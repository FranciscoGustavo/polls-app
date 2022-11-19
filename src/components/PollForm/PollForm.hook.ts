import React, { FC, useState, Fragment } from 'react';
import { v4 } from 'uuid';
import { usePollSave } from '../../hooks';

export const usePollForm: UsePollForm = ({ poll: oldPoll }) => {
    const [poll, setPoll] = useState<Poll>(
        oldPoll || { uuid: '', title: '', questions: [] }
    );
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const { savePoll, isSaving, isSaved, error, resetValues } = usePollSave();

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent | null, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const handleAddNewQuestion = () => {
        const newQuestion: Question = {
            uuid: v4(),
            question: '',
            typeQuestion: 'open_question',
            answers: [],
        };
        const questions = [...poll.questions];
        questions.push(newQuestion);
        setPoll({
            ...poll,
            questions,
        });

        handleChange(newQuestion.uuid)(null, true);
    };

    const handleAddNewAnswer = (uuid: string) => () => {
        const newAnswer: Answer = {
            uuid: v4(),
            answer: '',
        };
        const questions: Questions = poll.questions.map((currentQuestion) => {
            if (currentQuestion.uuid === uuid) {
                currentQuestion.answers = [
                    ...currentQuestion.answers,
                    newAnswer,
                ];
            }

            return currentQuestion;
        });

        setPoll({
            ...poll,
            questions,
        });
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setPoll({
            ...poll,
            title,
        });
    };

    const handleChangeQuestion =
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.question = event.target.value;
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleChangeTypeQuestion =
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.typeQuestion = event.target
                            .value as TypeQuestion;
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleChangeAnswer =
        ({ uuid, answerUuid }: { uuid: string; answerUuid: string }) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.answers = currentQuestion.answers.map(
                            (currentAnswer) => {
                                if (currentAnswer.uuid === answerUuid) {
                                    currentAnswer.answer = event.target.value;
                                }

                                return currentAnswer;
                            }
                        );
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleDeleteQuestion =
        (uuid: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            const questions: Questions = poll.questions.filter(
                (currentQuestion) => currentQuestion.uuid !== uuid
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleDeleteAnswer =
        ({ uuid, answerUuid }: { uuid: string; answerUuid: string }) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.answers =
                            currentQuestion.answers.filter(
                                (currentAnswer) =>
                                    currentAnswer.uuid !== answerUuid
                            );
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleSave = () => {
        console.log('Guardando...', poll);
        savePoll(poll);
    };

    return {
        poll,
        expanded,
        isSaving,
        isSaved,
        error,
        handleChange,
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
