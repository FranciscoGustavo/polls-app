/**
 * usePollForm
 */
type CreateQuestion = () => Question;
type UsePollFormHookReturnedProps = {
    title: string;
    disabledButtons: boolean;
    onChangeTitle: (_event: any) => void;
    questions: Questions;
    onAddQuestion: () => void;
    onRemoveQuestion: (uid: string) => void;
    onGetQuestion: OnGetQuestion;
};
type UsePollFormHook = (params: {
    title: string;
    questions: Questions;
}) => UsePollFormHookReturnedProps;

/**
 * useQuestionForm
 */
type CreateAnswer = () => Answer;
type UseQuestionFormHookRetunedProps = {
    question: string;
    onChangeQuestion: (_event: any) => void;
    typeQuestion: TypeQuestion;
    onChangeTypeQuestion: () => void;
    answers: Answers;
    onAddAnswer: () => void;
    onRemoveAnswer: (uid: string) => void;
    onChangeAnswer: (uid: string, value: string) => void;
};
type OnGetQuestion = (question: Question) => void;
type UseQuestionFormHook = (props: {
    uid: string;
    question: string;
    typeQuestion: TypeQuestion;
    answers: Answers;
    onGetQuestion: OnGetQuestion;
}) => UseQuestionFormHookRetunedProps;

/**
 * usePollSave
 */
type UsePollSaveHookReturnedProps = {
    savePoll: (poll: CreatePoll) => void;
    isSaved: boolean;
    isSaving: boolean;
    error: boolean;
    resetValues: () => void;
};

type UsePollSaveHook = (poll?: Poll) => UsePollSaveHookReturnedProps;

/**
 * usePolls
 */
type UsePollsHookReturnedProps = Array<Poll & { isAnswered: boolean }>;
type UsePollsHook = () => UsePollsHookReturnedProps;

/**
 * useSetupData
 */
type UseSetupDataHook = () => void;

/**
 * usePoll
 */
type UsePollHookReturnedProps = {
    poll: Poll;
    isLoading: boolean;
    error: boolean;
};
type UsePollHook = (uid: string) => UsePollHookReturnedProps;

/**
 *
 */
type AnswersByUser = { [key: string]: string };
type UseAnswerQuestionsHookReturnedProps = {
    question: Question;
    answers: AnswersByUser;
    onChangeInputAnswer: (_event: any) => void;
    onNextQuestion: () => void;
    disabledNextQuestion: boolean;
    finishedPoll: boolean;
};
type UseAnswerQuestionsHook = (
    poll: Poll
) => UseAnswerQuestionsHookReturnedProps;

/**
 * usePollAnsweredSave
 */
type UsePollAnsweredSaveHookReturnedProps = {
    savePollAnswered: (poll: Poll, answers: AnswersByUser) => void;
    isSaved: boolean;
    isSaving: boolean;
    error: boolean;
};
type UsePollAnsweredSaveHook = () => UsePollAnsweredSaveHookReturnedProps;
