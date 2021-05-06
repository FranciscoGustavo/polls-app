import { Home, NewPoll, AnswerPoll } from '../pages';

const ROUTER = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/polls/new', component: NewPoll },
  { exact: true, path: '/polls/:uid/answer', component: AnswerPoll },
];

export default ROUTER;
