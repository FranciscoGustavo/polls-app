import { useState, useEffect } from 'react';
import { savePollAnswered as savePollAnsweredApi } from '../api/polls';

const usePollAnsweredSave: UsePollAnsweredSaveHook = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const [poll, setPoll] = useState<Poll | undefined>(
    undefined
  );

  const savePollAnswered = (
    currentPoll: Poll,
    answers: AnswersByUser
  ) => {
    const { uuid, title, questions } = currentPoll;
    const newQuestions = questions.map(({ uuid, ...rest }) => {
      return {
        uuid,
        ...rest,
        userAnswer: answers[uuid],
      };
    });
    setPoll({
      uuid,
      title,
      questions: newQuestions,
    });
  };

  useEffect(() => {
    if (poll) {
      setIsSaving(false);
      savePollAnsweredApi(poll)
        .then(() => setIsSaved(true))
        .catch(() => setError(true))
        .finally(() => setIsSaving(false));
    }
  }, [poll]);

  return {
    savePollAnswered,
    isSaved,
    isSaving,
    error,
  };
};

export default usePollAnsweredSave;
