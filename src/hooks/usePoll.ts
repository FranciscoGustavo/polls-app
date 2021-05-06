import { useState, useEffect } from 'react';
import { findOnePoll } from '../api/polls';

const usePoll: UsePollHook = (uid: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [poll, setPoll] = useState<(Poll & { uid: string }) | undefined>();

  useEffect(() => {
    findOnePoll(uid)
      .then((res: Poll & { uid: string }) => setPoll(res))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    poll: poll as Poll & { uid: string },
    isLoading,
    error,
  };
};

export default usePoll;
