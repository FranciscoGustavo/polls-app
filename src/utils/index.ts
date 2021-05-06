type ExistPolls = (type?: 'pollsAnswered' | 'polls') => Polls;
export const validateExistPollsAndGet: ExistPolls = (type = 'polls') => {
  const existPolls = localStorage.getItem(type);
  if (!existPolls) localStorage.setItem(type, JSON.stringify([]));

  const allPolls: Polls = JSON.parse(localStorage.getItem(type) as string);
  return allPolls;
};
