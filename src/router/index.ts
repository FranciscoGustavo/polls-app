import { Home, NewPoll, AnswerPoll, SignIn, EditPoll } from '../pages';

const ROUTER = [
    { exact: true, path: '/', Component: Home },
    { exact: true, path: '/polls/new', Component: NewPoll },
    { exact: true, path: '/polls/:uuid/edit', Component: EditPoll },
    { exact: true, path: '/polls/:uuid/answer', Component: AnswerPoll },
    { exact: true, path: '/sign-in', Component: SignIn },
];

export default ROUTER;
