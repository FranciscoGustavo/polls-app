import { useState, useEffect } from 'react';
import { savePollAnswered as savePollAnsweredApi } from '../api/polls';

const usePollAnsweredSave: UsePollAnsweredSaveHook = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const [poll, setPoll] = useState<(Poll & { uid: string }) | undefined>(
    undefined
  );

  const savePollAnswered = (
    currentPoll: Poll & { uid: string },
    answers: AnswersByUser
  ) => {
    const { uid, title, questions } = currentPoll;
    const newQuestions = questions.map(({ uid, ...rest }) => {
      return {
        uid,
        ...rest,
        userAnswer: answers[uid],
      };
    });
    setPoll({
      uid,
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
