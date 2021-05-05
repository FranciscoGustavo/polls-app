import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useQuestionForm: UseQuestionFormHook = (uidQuestion, onGetQuestion) => {
  const [question, setQuestion] = useState('');
  const [typeQuestion, setTypeQuestion] = useState<TypeQuestion>(
    'open_question'
  );
  const [answers, setAnswers] = useState<Answers>([]);

  const createAnswer: CreateAnswer = () => ({
    uid: uuidv4(),
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
      ({ uid: uidAnswer }) => uidAnswer !== uid
    );
    setAnswers(filteredAnswer);
  };

  const onChangeAnswer = (uid: string, value: string) => {
    const newAnswers = answers.map((answer) => {
      const { uid: uidAnswer } = answer;
      if (uid !== uidAnswer) return answer;
      return { uid, answer: value };
    });
    setAnswers(newAnswers);
  };

  useEffect(() => {
    onGetQuestion({ uid: uidQuestion, question, typeQuestion, answers });
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
