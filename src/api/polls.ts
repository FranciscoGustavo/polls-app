import { v4 as uuidv4 } from 'uuid';
import { validateExistPollsAndGet } from '../utils';

type FindOnePoll = (uid: string) => Promise<Poll & { uid: string }> | any;
export const findOnePoll: FindOnePoll = async (uid) => {
  /**
   * Here can be make a http request to save data in one api
   */
  const allPolls = validateExistPollsAndGet();
  const findedPoll = allPolls.find(({ uid: uidPoll }) => uidPoll === uid);

  if (!findedPoll) {
    throw new Error();
  }
  return findedPoll;
};

type SavePoll = (poll: Poll) => Promise<void>;
export const savePoll: SavePoll = async (poll) => {
  /**
   * Here can be make a http request to save data in one api
   */
  const allPolls = validateExistPollsAndGet();
  allPolls.push({ uid: uuidv4(), ...poll });
  localStorage.setItem('polls', JSON.stringify(allPolls));
};

type SavePollAnswered = (poll: Poll) => Promise<void>;
export const savePollAnswered: SavePollAnswered = async (poll) => {
  /**
   * Here can be make a http request to save data in one api
   */
  const allPolls = validateExistPollsAndGet('pollsAnswered');
  allPolls.push({ uid: uuidv4(), ...poll });
  localStorage.setItem('pollsAnswered', JSON.stringify(allPolls));
};
