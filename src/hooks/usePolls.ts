import { validateExistPollsAndGet } from '../utils';

const usePolls: UsePollsHook = () => {
  const allPolls = validateExistPollsAndGet();
  const allPollsAnswered = validateExistPollsAndGet('pollsAnswered');

  const readyPolls = allPolls.map((poll) => {
    const isAnswered = allPollsAnswered.find(({ uid }) => uid === poll.uid);
    return {
      ...poll,
      uid: poll.uid as string,
      isAnswered: Boolean(isAnswered),
    };
  });

  return readyPolls;
};

export default usePolls;
