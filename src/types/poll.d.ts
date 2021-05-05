type Answer = {
  uid: string;
  answer: string;
};
type Answers = Array<Answer>;
type TypeQuestion = 'open_question' | 'multiple_choice';
type Question = {
  uid: string;
  question: string;
  typeQuestion: TypeQuestion;
  answers: Answers;
};
type Questions = Array<Question>;
type Poll = {
  title: string;
  questions: Questions;
};
type Polls = Array<Poll & { uid?: string }>;
