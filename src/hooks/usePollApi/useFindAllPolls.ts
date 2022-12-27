import { useState, useEffect } from 'react';
import { findAllPolls as findAllPollsAPI } from '../../api/polls';

export const useFindAllPolls = ({ page, limit }: { page: number; limit: number }) => {
    const [polls, setPolls] = useState<Polls>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const refetch = () => {
        findAllPollsAPI({ page, limit })
            .then((response) => {
                setPolls(response);
                // setIsLoaded(true);
            })
            .catch(() => {
                // setError(true);
            })
            .finally(() => {
                // setIsLoading(false);
            });
    };

    useEffect(() => {
        findAllPollsAPI({ page, limit })
            .then((response) => {
                setPolls(response);
                setIsLoaded(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [page, limit]);

    return {
        polls,
        isLoading,
        isLoaded,
        error,
        refetch,
    };
};
