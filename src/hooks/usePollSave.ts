import { useState, useEffect } from 'react';
import { savePoll as savePollApi } from '../api/polls';

const usePollSave: UsePollSaveHook = (currentPoll) => {
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [error, setError] = useState(false);
    const [poll, setPoll] = useState<CretaePoll | undefined>(currentPoll);

    const savePoll = (poll: CretaePoll) => {
        setPoll(poll);
    };

    const resetValues = () => {
        setIsSaved(false);
        setError(false);
        setIsSaving(false);
    };

    useEffect(() => {
        if (poll) {
            setIsSaving(false);
            savePollApi(poll)
                .then(() => setIsSaved(true))
                .catch(() => setError(true))
                .finally(() => setIsSaving(false));
        }
    }, [poll]);

    return {
        savePoll,
        isSaved,
        isSaving,
        error,
        resetValues,
    };
};

export default usePollSave;
