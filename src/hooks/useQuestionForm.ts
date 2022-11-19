import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useQuestionForm: UseQuestionFormHook = ({
    uid: uidQuestion,
    question: oldQuestion,
    typeQuestion: oldTypeQuestion,
    answers: oldAnswers,
    onGetQuestion,
}) => {
    const [question, setQuestion] = useState(oldQuestion);
    const [typeQuestion, setTypeQuestion] =
        useState<TypeQuestion>(oldTypeQuestion);
    const [answers, setAnswers] = useState<Answers>(oldAnswers);
    console.log(typeQuestion);
    const createAnswer: CreateAnswer = () => ({
        uuid: uuidv4(),
        answer: '',
    });

    const onChangeQuestion = (_event: any) => {
        setQuestion(_event.target.value);
    };

    const onChangeTypeQuestion = () => {
        if (typeQuestion === 'open_question') {
            setTypeQuestion('multiple_choice');
            return;
        }
        setTypeQuestion('open_question');
        return;
    };

    const onAddAnswer = () => {
        setAnswers([...answers, createAnswer()]);
    };

    const onRemoveAnswer = (uid: string) => {
        const filteredAnswer = answers.filter(
            ({ uuid: uidAnswer }) => uidAnswer !== uid
        );
        setAnswers(filteredAnswer);
    };

    const onChangeAnswer = (uuid: string, value: string) => {
        const newAnswers = answers.map((answer) => {
            const { uuid: uuidAnswer } = answer;
            if (uuid !== uuidAnswer) return answer;
            return { uuid, answer: value };
        });
        setAnswers(newAnswers);
    };

    useEffect(() => {
        onGetQuestion({ uuid: uidQuestion, question, typeQuestion, answers });
    }, [question, typeQuestion, answers]);

    return {
        question,
        onChangeQuestion,
        typeQuestion,
        onChangeTypeQuestion,
        answers,
        onAddAnswer,
        onRemoveAnswer,
        onChangeAnswer,
    };
};

export default useQuestionForm;
