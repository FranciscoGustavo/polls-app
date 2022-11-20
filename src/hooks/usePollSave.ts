import { useState } from 'react';
import {
    createPoll as createPollAPI,
    updatePoll as updatePollAPI,
} from '../api/polls';

const usePollSave: UsePollSaveHook = (currentPoll) => {
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [error, setError] = useState(false);

    const savePoll = async (poll: Poll) => {
        setIsSaving(true);
        setIsSaved(false);
        try {
            if (poll.uuid) {
                await updatePollAPI(poll);
            } else {
                await createPollAPI(poll);
            }

            setIsSaved(true);
        } catch {
            setError(true);
        } finally {
            setIsSaving(false);
        }
    };

    const resetValues = () => {
        setIsSaved(false);
        setError(false);
        setIsSaving(false);
    };

    return {
        savePoll,
        isSaved,
        isSaving,
        error,
        resetValues,
    };
};

export default usePollSave;
