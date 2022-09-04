import { useState, useEffect } from 'react';
import { findOnePoll } from '../api/polls';

const usePoll: UsePollHook = (uid: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [poll, setPoll] = useState<Poll | undefined>();

    useEffect(() => {
        findOnePoll(uid)
            .then((res: Poll) => setPoll(res))
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        poll: poll as Poll,
        isLoading,
        error,
    };
};

export default usePoll;
