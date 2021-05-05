import { v4 as uuidv4 } from 'uuid';

type SavePoll = (poll: Poll) => Promise<void>;
export const savePoll: SavePoll = async (poll) => {
  /**
   * Here can be make a http request to save data in one api
   */
  const existPolls = localStorage.getItem('polls');
  if (!existPolls) localStorage.setItem('polls', JSON.stringify([]));

  const allPolls = JSON.parse(localStorage.getItem('polls') as string);
  allPolls.push({ uid: uuidv4(), ...poll });
  localStorage.setItem('polls', JSON.stringify(allPolls));
};
