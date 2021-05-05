import { v4 as uuidv4 } from 'uuid';
import { validateExistPollsAndGet } from '../utils';

type SavePoll = (poll: Poll) => Promise<void>;
export const savePoll: SavePoll = async (poll) => {
  /**
   * Here can be make a http request to save data in one api
   */
  const allPolls = validateExistPollsAndGet();
  allPolls.push({ uid: uuidv4(), ...poll });
  localStorage.setItem('polls', JSON.stringify(allPolls));
};
