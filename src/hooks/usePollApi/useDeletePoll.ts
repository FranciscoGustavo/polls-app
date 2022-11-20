import { useState, useEffect } from 'react';
import { deletePoll as deletePollAPI } from '../../api/polls';

export const useDeletePoll = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const deletePoll = (uuid: string) => {
        setError(false);
        setIsLoaded(false);
        setIsLoading(true);
        return deletePollAPI(uuid)
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
        deletePoll,
    };
};
