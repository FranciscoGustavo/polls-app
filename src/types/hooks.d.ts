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
type UsePollFormHook = () => UsePollFormHookReturnedProps;

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
type UseQuestionFormHook = (
  uid: string,
  onGetQuestion: OnGetQuestion
) => UseQuestionFormHookRetunedProps;

/**
 * usePollSave
 */
type UsePollSaveHookReturnedProps = {
  savePoll: (poll: Poll) => void;
  isSaved: boolean;
  isSaving: boolean;
  error: boolean;
};

type UsePollSaveHook = (poll?: Poll) => UsePollSaveHookReturnedProps;

/**
 * usePolls
 */
type UsePollsHook = () => Polls;

/**
 * useSetupData
 */
type UseSetupDataHook = () => void;
