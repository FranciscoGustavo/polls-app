import { Home, NewPoll, AnswerPoll } from '../pages';

const ROUTER = [
  { exact: true, path: '/', Component: Home },
  { exact: true, path: '/polls/new', Component: NewPoll },
  { exact: true, path: '/polls/:uuid/answer', Component: AnswerPoll },
];

export default ROUTER;
