import React, { useEffect, FC } from 'react';
import {
  Button,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import Congratulations from '../Congratulations';
import { useAnswerQuestions, usePollAnsweredSave } from '../../hooks';
import { BoxRoot, ContainerQuestion, ContainerAnswer, ContainerButtonNextQuestion } from './styles';

type AnsweringQuestionsProps = {
  poll: Poll & { uid: string };
};
const AnsweringQuestions: FC<AnsweringQuestionsProps> = ({ poll }) => {

  const {
    question,
    answers,
    onChangeInputAnswer,
    onNextQuestion,
    disabledNextQuestion,
    finishedPoll,
  } = useAnswerQuestions(poll);

  const { savePollAnswered } = usePollAnsweredSave();

  useEffect(() => {
    if (finishedPoll) {
      savePollAnswered(poll, answers);
    }
  }, [finishedPoll]);

  if (finishedPoll) return <Congratulations />;
  return (
    <BoxRoot>
      <ContainerQuestion>
        <Typography variant="h4">{question.question}</Typography>
      </ContainerQuestion>
      <ContainerAnswer>
        {question.typeQuestion === 'open_question' && (
          <TextField
            fullWidth
            label="Escribe tu respuesta"
            value={answers[question.uid]}
            onChange={onChangeInputAnswer}
          />
        )}
        {question.typeQuestion === 'multiple_choice' && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Opciones</FormLabel>
            <RadioGroup
              value={answers[question.uid]}
              onChange={onChangeInputAnswer}
            >
              {question.answers.map(({ uid, answer }) => (
                <FormControlLabel
                  value={uid}
                  control={<Radio />}
                  label={answer}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      </ContainerAnswer>
      <ContainerButtonNextQuestion>
        <Button
          variant="contained"
          color="primary"
          disabled={disabledNextQuestion}
          onClick={onNextQuestion}
        >
          Siguiente
        </Button>
      </ContainerButtonNextQuestion>
    </BoxRoot>
  );
};

export default AnsweringQuestions;
