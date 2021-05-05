import { validateExistPollsAndGet } from '../utils';

const usePolls: UsePollsHook = () => {
  const allPolls = validateExistPollsAndGet();
  return allPolls;
};

export default usePolls;
