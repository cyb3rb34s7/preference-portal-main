import { writeFile } from 'fs/promises';
import path from 'path';

async function initDataFile() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'survey_responses.json');

    try {
        await writeFile(filePath, '[]', 'utf-8');
        console.log('Survey responses file initialized successfully');
    } catch (error) {
        console.error('Failed to initialize survey responses file:', error);
    }
}

initDataFile(); 