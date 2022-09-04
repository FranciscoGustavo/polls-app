import { useState, useEffect } from 'react';

const useAnswerQuestions: UseAnswerQuestionsHook = ({ questions }) => {
    // Get index by current question
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // This is the question object
    const [question, setQuestion] = useState(questions[currentQuestion]);

    // Here save all answers order by question uid
    const [answers, setAnswers] = useState({ [question.uuid]: '' });

    const [disabledNextQuestion, setDisabledNextQuestion] = useState(true);
    const [finishedPoll, setFinishedPoll] = useState(false);

    const onChangeInputAnswer = (_event: any) => {
        setAnswers({
            ...answers,
            [question.uuid]: _event.target.value,
        });
    };

    const onNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinishedPoll(true);
        }
    };

    /**
   * When currentQuestion changes the question object is updated
   */
    useEffect(() => {
        setQuestion(questions[currentQuestion]);
    }, [currentQuestion]);

    /**
   * When question object changes the current answer is updated
   */
    useEffect(() => {
        setAnswers({
            ...answers,
            [question.uuid]: '',
        });
    }, [question]);

    /**
   * When answer of one question change verify if is valid
   * if it is valid, the button is activated to go to the next question
   * if it is not valid, the button stay disabled
   */
    useEffect(() => {
        if (answers[question.uuid] === '' || !answers[question.uuid]) {
            setDisabledNextQuestion(true);
        } else {
            setDisabledNextQuestion(false);
        }
    }, [answers]);

    return {
        question,
        answers,
        onChangeInputAnswer,
        onNextQuestion,
        disabledNextQuestion,
        finishedPoll,
    };
};

export default useAnswerQuestions;
