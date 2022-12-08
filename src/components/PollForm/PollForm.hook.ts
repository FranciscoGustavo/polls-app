import React, { useState, useCallback, useReducer } from 'react';
import { reducer } from './PollForm.reducer';
import {
    addNewAnswer,
    addNewQuestion,
    deleteAnswer,
    deleteQuestion,
    updateAnswer,
    updateQuestion,
    updateTitle,
    updateTypeQuestion,
    updateAllPoll,
} from './PollForm.actions';
import { usePollSave } from '../../hooks';

const defaultInitialState: Poll = {
    uuid: '',
    title: '',
    questions: [],
};

export const usePollForm: UsePollForm = ({ poll: oldPoll }) => {
    const [poll, dispatch] = useReducer(
        reducer,
        oldPoll ? oldPoll : defaultInitialState
    );

    const [expanded, setExpanded] = useState<string | false>(false);
    const { savePoll, isSaving, isSaved, error } = usePollSave();

    const handleAccordion = useCallback(
        (panel: string) =>
            (event: React.SyntheticEvent | null, isExpanded: boolean) => {
                setExpanded(isExpanded ? panel : false);
            },
        []
    );

    const handleChangeTitle = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateTitle(event.target.value));
        },
        []
    );

    const handleAddNewQuestion = useCallback(() => {
        dispatch(addNewQuestion());
        // handleChange(newQuestion.uuid)(null, true);
    }, []);

    const handleChangeQuestion = useCallback(
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateQuestion({ uuid, value: event.target.value }));
        },
        []
    );

    const handleChangeTypeQuestion = useCallback(
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateTypeQuestion({ uuid, value: event.target.value }));
        },
        []
    );

    const handleAddNewAnswer = useCallback(
        (uuid: string) => () => {
            dispatch(addNewAnswer(uuid));
        },
        []
    );

    const handleChangeAnswer = useCallback(
        ({ uuid, answerUUID }: { uuid: string; answerUUID: string }) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    updateAnswer({
                        uuid,
                        answerUUID,
                        value: event.target.value,
                    })
                );
            },
        []
    );

    const handleDeleteQuestion = useCallback(
        (uuid: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            dispatch(deleteQuestion(uuid));
        },
        []
    );

    const handleDeleteAnswer = useCallback(
        ({ uuid, answerUUID }: { uuid: string; answerUUID: string }) =>
            (event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                dispatch(deleteAnswer({ uuid, answerUUID }));
            },
        []
    );

    const handleSave = async () => {
        const savedPoll = await savePoll(poll);
        dispatch(updateAllPoll(savedPoll));
    };

    return {
        poll,
        expanded,
        isSaving,
        isSaved,
        error,
        handleAccordion,
        handleAddNewQuestion,
        handleAddNewAnswer,
        handleChangeTitle,
        handleChangeQuestion,
        handleChangeTypeQuestion,
        handleChangeAnswer,
        handleDeleteQuestion,
        handleDeleteAnswer,
        handleSave,
    };
};
