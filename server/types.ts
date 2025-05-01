export interface UserSelection {
    contentItemId: string;
    selectedStyle: string;
}

export interface TopicSelection {
    selectedTopicId: string;
}

export interface SurveySetResponse {
    setId: string;
    setName: string;
    contentSelections: UserSelection[];
    topicSelection: TopicSelection;
}

export interface SurveyResponse {
    timestamp: string;
    userName: string;
    userId: string;
    responses: SurveySetResponse[];
} 