import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const usePollForm: UsePollFormHook = () => {
  const [title, setTitle] = useState('');
  const [disabledButtons, setDisabledButtons] = useState(true);
  const [questions, setQuestions] = useState<Questions>([]);

  const createQuestion: CreateQuestion = () => ({
    uid: uuidv4(),
    question: '',
    typeQuestion: 'open_question',
    answers: [],
  });

  const onChangeTitle = (_event: any) => {
    setDisabledButtons(false);
    setTitle(_event.target.value);
  };

  const onAddQuestion = () => {
    setQuestions([...questions, createQuestion()]);
  };

  const onRemoveQuestion = (uid: string) => {
    const filteredQuestions = questions.filter(
      ({ uid: uidQuestion }) => uidQuestion !== uid
    );
    setQuestions(filteredQuestions);
  };

  const onGetQuestion: OnGetQuestion = (question) => {
    const newQuestions = questions.map((currentQuestion) => {
      if (currentQuestion.uid !== question.uid) return currentQuestion;
      return question;
    });
    setQuestions(newQuestions);
  };

  return {
    title,
    disabledButtons,
    onChangeTitle,
    questions,
    onAddQuestion,
    onRemoveQuestion,
    onGetQuestion,
  };
};

export default usePollForm;
