import { Home, NewPoll } from '../pages';

const ROUTER = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/polls/new', component: NewPoll },
  { exact: true, path: '/polls/:id', component: Home },
  { exact: true, path: '/polls/:id/answers', component: Home },
];

export default ROUTER;
