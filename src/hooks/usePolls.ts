import { useEffect, useState } from 'react';
import { findAllPolls } from '../api/polls';

const usePolls: UsePollsHook = () => {
    const [allPolls, setAllPolls] = useState([]);

    useEffect(() => {
        findAllPolls().then((polls) => setAllPolls(polls));
    }, []);

    return allPolls;
};

export default usePolls;
