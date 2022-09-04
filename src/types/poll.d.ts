type Answer = {
    uuid: string;
    answer: string;
};

type Answers = Answer[];

type TypeQuestion = 'open_question' | 'multiple_choice';

type Question = {
    uuid: string;
    question: string;
    typeQuestion: TypeQuestion;
    answers: Answers;
};

type Questions = Question[];

type Poll = {
    uuid: string;
    title: string;
    questions: Questions;
};

type Polls = Poll[];

type CretaePoll = Omit<Poll, 'uuid'>;
