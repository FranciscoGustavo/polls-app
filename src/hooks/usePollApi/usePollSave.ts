import { useState } from 'react';
import {
    createPoll as createPollAPI,
    updatePoll as updatePollAPI,
} from '../../api/polls';

export const usePollSave: UsePollSaveHook = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [error, setError] = useState(false);

    const savePoll = async (poll: Poll): Promise<Poll> => {
        setIsSaving(true);
        setIsSaved(false);
        let currentPoll = poll;
        try {
            if (poll.uuid) {
                currentPoll = await updatePollAPI(poll);
            } else {
                currentPoll = await createPollAPI(poll);
            }

            setIsSaved(true);
        } catch {
            setError(true);
        } finally {
            setIsSaving(false);
        }

        return currentPoll;
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
