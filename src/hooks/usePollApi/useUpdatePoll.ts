import { useState, useEffect } from 'react';
import { updatePoll as updatePollAPI } from '../../api/polls';

export const useUpdatePoll = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const updatePoll = (poll: Poll) => {
        setError(false);
        setIsLoaded(false);
        setIsLoading(true);
        return updatePollAPI(poll)
            .then(() => {
                setIsLoaded(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        isLoading,
        isLoaded,
        error,
        updatePoll,
    };
};
