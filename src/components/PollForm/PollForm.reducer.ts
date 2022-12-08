import { v4 } from 'uuid';
import { cloneDeep } from 'lodash';
import { ACTION_TYPES } from './PollForm.actions';

export const reducer = (
    state: Poll,
    action: { type: string; payload: any }
) => {
    const newState = cloneDeep(state);

    switch (action.type) {
    case ACTION_TYPES.UPDATE_ALL_POLL:
        return {
            ...cloneDeep(action.payload as Poll),
        };
    case ACTION_TYPES.UPDATE_TITLE:
        return {
            ...newState,
            title: action.payload as string,
        };
    case ACTION_TYPES.ADD_NEW_QUESTION: {
        const newQuestion: Question = {
            uuid: v4(),
            question: '',
            typeQuestion: 'open_question',
            answers: [],
        };
        const questions = [...newState.questions];
        questions.push(newQuestion);

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.UPDATE_QUESTION: {
        const questions: Questions = newState.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === action.payload.uuid) {
                    currentQuestion.question = action.payload.value;
                }

                return currentQuestion;
            }
        );

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.UPDATE_TYPE_QUESTION: {
        const questions: Questions = newState.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === action.payload.uuid) {
                    currentQuestion.typeQuestion = action.payload
                        .value as TypeQuestion;
                }

                return currentQuestion;
            }
        );

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.ADD_NEW_ANSWER: {
        const newAnswer: Answer = {
            uuid: v4(),
            answer: '',
        };
        const questions: Questions = newState.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === action.payload) {
                    currentQuestion.answers = [
                        ...currentQuestion.answers,
                        newAnswer,
                    ];
                }

                return currentQuestion;
            }
        );

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.UPDATE_ANSWER: {
        const questions: Questions = newState.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === action.payload.uuid) {
                    currentQuestion.answers = currentQuestion.answers.map(
                        (currentAnswer) => {
                            if (
                                currentAnswer.uuid ===
                                    action.payload.answerUUID
                            ) {
                                currentAnswer.answer = action.payload.value;
                            }

                            return currentAnswer;
                        }
                    );
                }

                return currentQuestion;
            }
        );

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.DELETE_QUESTION: {
        const questions: Questions = newState.questions.filter(
            (currentQuestion) => currentQuestion.uuid !== action.payload
        );

        return {
            ...newState,
            questions,
        };
    }
    case ACTION_TYPES.DELETE_ANSWER: {
        const questions: Questions = newState.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === action.payload.uuid) {
                    currentQuestion.answers =
                            currentQuestion.answers.filter(
                                (currentAnswer) =>
                                    currentAnswer.uuid !==
                                    action.payload.answerUUID
                            );
                }

                return currentQuestion;
            }
        );

        return {
            ...newState,
            questions,
        };
    }
    default:
        return newState;
    }
};
