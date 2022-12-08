export const ACTION_TYPES = {
    UPDATE_ALL_POLL: 'UPDATE_ALL_POLL',
    UPDATE_TITLE: 'UPDATE_TITLE',
    ADD_NEW_QUESTION: 'ADD_NEW_QUESTION',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    UPDATE_TYPE_QUESTION: 'UPDATE_TYPE_QUESTION',
    ADD_NEW_ANSWER: 'ADD_NEW_ANSWER',
    UPDATE_ANSWER: 'UPDATE_ANSWER',
    DELETE_QUESTION: 'DELETE_QUESTION',
    DELETE_ANSWER: 'DELETE_ANSWER',
};

export const updateAllPoll = (payload: Poll) => ({
    type: ACTION_TYPES.UPDATE_ALL_POLL,
    payload,
});

export const updateTitle = (payload: string) => ({
    type: ACTION_TYPES.UPDATE_TITLE,
    payload,
});

export const addNewQuestion = () => ({
    type: ACTION_TYPES.ADD_NEW_QUESTION,
    payload: false,
});

export const updateQuestion = (payload: { uuid: string; value: string }) => ({
    type: ACTION_TYPES.UPDATE_QUESTION,
    payload,
});

export const updateTypeQuestion = (payload: {
    uuid: string;
    value: string;
}) => ({
    type: ACTION_TYPES.UPDATE_TYPE_QUESTION,
    payload,
});

export const addNewAnswer = (payload: string) => ({
    type: ACTION_TYPES.ADD_NEW_ANSWER,
    payload,
});

export const updateAnswer = (payload: {
    uuid: string;
    answerUUID: string;
    value: string;
}) => ({
    type: ACTION_TYPES.UPDATE_ANSWER,
    payload,
});

export const deleteQuestion = (payload: string) => ({
    type: ACTION_TYPES.DELETE_QUESTION,
    payload,
});

export const deleteAnswer = (payload: {
    uuid: string;
    answerUUID: string;
}) => ({
    type: ACTION_TYPES.DELETE_ANSWER,
    payload,
});
