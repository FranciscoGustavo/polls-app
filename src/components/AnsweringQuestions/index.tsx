import React, { useEffect, FC } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import Congratulations from '../Congratulations';
import { useAnswerQuestions, usePollAnsweredSave } from '../../hooks';
import { useStyles } from './styles';

type AnsweringQuestionsProps = {
  poll: Poll & { uid: string };
};
const AnsweringQuestions: FC<AnsweringQuestionsProps> = ({ poll }) => {
  const classes = useStyles();
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
    <Box className={classes.root}>
      <Box className={classes.containerQuestion}>
        <Typography variant="h4">{question.question}</Typography>
      </Box>
      <Box className={classes.containerAnswer}>
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
      </Box>
      <Box className={classes.containerButtonNextQuestion}>
        <Button
          variant="contained"
          color="primary"
          disabled={disabledNextQuestion}
          onClick={onNextQuestion}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default AnsweringQuestions;
