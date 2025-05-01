import express from 'express';
import cors from 'cors';
import * as fs from 'fs/promises';
import * as path from 'path';
import { SurveyResponse } from './types';

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store responses
const RESPONSES_FILE = path.join(__dirname, 'data', 'survey_responses.json');

// Ensure data directory exists
async function ensureDataDir() {
    const dir = path.dirname(RESPONSES_FILE);
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
}

// Initialize responses file if it doesn't exist
async function initResponsesFile() {
    try {
        await fs.access(RESPONSES_FILE);
    } catch {
        await fs.writeFile(RESPONSES_FILE, '[]', 'utf-8');
    }
}

// Read responses
async function readResponses(): Promise<SurveyResponse[]> {
    try {
        const data = await fs.readFile(RESPONSES_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Save responses
async function saveResponses(responses: SurveyResponse[]) {
    await fs.writeFile(RESPONSES_FILE, JSON.stringify(responses, null, 2), 'utf-8');
}

// Initialize
(async () => {
    await ensureDataDir();
    await initResponsesFile();
})();

// Routes
app.post('/api/responses', async (req, res) => {
    try {
        const newResponse: SurveyResponse = req.body;
        const responses = await readResponses();

        // Find if user already exists
        const userIndex = responses.findIndex(r => r.userId === newResponse.userId);

        if (userIndex !== -1) {
            // Update existing user's responses
            responses[userIndex].responses.push(...newResponse.responses);
        } else {
            // Add new user response
            responses.push(newResponse);
        }

        await saveResponses(responses);
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving response:', error);
        res.status(500).json({ error: 'Failed to save response' });
    }
});

app.get('/api/responses', async (req, res) => {
    try {
        const responses = await readResponses();
        res.json(responses);
    } catch (error) {
        console.error('Error reading responses:', error);
        res.status(500).json({ error: 'Failed to read responses' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 