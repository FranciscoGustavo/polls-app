import { Home, NewPoll, AnswerPoll, SignIn } from '../pages';

const ROUTER = [
    { exact: true, path: '/', Component: Home },
    { exact: true, path: '/polls/new', Component: NewPoll },
    { exact: true, path: '/polls/:uuid/answer', Component: AnswerPoll },
    { exact: true, path: '/sign-in', Component: SignIn },
];

export default ROUTER;
