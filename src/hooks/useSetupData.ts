import { v4 as uuidv4 } from 'uuid';

const useSetupData: UseSetupDataHook = () => {
  const generatedPolls: Polls = Array(2)
    .fill({})
    .map((item, idx) => ({
      uid: uuidv4(),
      title: `Encuesta numero ${idx + 1}`,
      questions: Array(5)
        .fill({})
        .map((subitem, idx) => ({
          uid: uuidv4(),
          question: `¿Pregunta número ${idx + 1} con signo de interrogación?`,
          typeQuestion: idx % 2 === 0 ? 'open_question' : 'multiple_choice',
          answers:
            idx % 2 === 0
              ? []
              : Array(4)
                  .fill({})
                  .map((subitem, idx) => ({
                    uid: uuidv4(),
                    answer: `respuesta ${idx + 1}`,
                  })),
        })),
    }));

  const existPolls = localStorage.getItem('polls');
  if (!existPolls) {
    localStorage.setItem('polls', JSON.stringify(generatedPolls));
  }
};

export default useSetupData;
