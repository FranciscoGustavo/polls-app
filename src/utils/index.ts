type ExistPolls = () => Polls;
export const validateExistPollsAndGet: ExistPolls = () => {
  const existPolls = localStorage.getItem('polls');
  if (!existPolls) localStorage.setItem('polls', JSON.stringify([]));

  const allPolls: Polls = JSON.parse(localStorage.getItem('polls') as string);
  return allPolls;
};
