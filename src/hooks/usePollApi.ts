import { useState, useEffect } from 'react';
import {
    findAllPolls as findAllPollsAPI,
    findOnePoll,
    createPoll,
    updatePoll as updatePollAPI,
    deletePoll as deletePollAPI,
} from '../api/polls';

export const usePollApi = () => {
    const [polls, setPolls] = useState<Polls>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const findAllPolls = () => {
        setError(false);
        setIsLoaded(false);
        setIsLoading(true);
        findAllPollsAPI()
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
    };

    const savePoll = () => {};

    const updatePoll = () => {};

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
        polls,
        isLoading,
        isLoaded,
        error,
        findAllPolls,
        savePoll,
        updatePoll,
        deletePoll,
    };
};

export const useFindAllPolls = () => {
    const [polls, setPolls] = useState<Polls>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const refetch = () => {
        findAllPollsAPI()
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
        findAllPollsAPI()
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
    }, []);

    return {
        polls,
        isLoading,
        isLoaded,
        error,
        refetch,
    };
};

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
