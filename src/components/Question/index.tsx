import React, { FC } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useQuestionForm } from '../../hooks';
import Answer from '../Answer';
import { useStyles } from './styles';

type QuestionProps = {
  uid: string;
  onGetQuestion: OnGetQuestion;
  onRemoveQuestion: (uid: string) => void;
};
const Question: FC<QuestionProps> = ({
  uid,
  onGetQuestion,
  onRemoveQuestion,
}) => {
  const classes = useStyles();
  const {
    question,
    onChangeQuestion,
    typeQuestion,
    onChangeTypeQuestion,
    answers,
    onAddAnswer,
    onRemoveAnswer,
    onChangeAnswer,
  } = useQuestionForm(uid, onGetQuestion);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.containerTitle}>
            <TextField
              id="outlined-basic"
              label="Preguta"
              variant="outlined"
              fullWidth
              value={question}
              onChange={onChangeQuestion}
            />
            <IconButton onClick={() => onRemoveQuestion(uid)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            className={classes.typeQuestion}
            value={typeQuestion}
            onChange={onChangeTypeQuestion}
          >
            <FormControlLabel
              value="open_question"
              control={<Radio />}
              label="Pregunta abierta"
            />
            <FormControlLabel
              value="multiple_choice"
              control={<Radio />}
              label="Selección multiple"
            />
          </RadioGroup>
        </Grid>
        {typeQuestion === 'multiple_choice' &&
          answers.map(({ uid, answer }) => (
            <Grid item xs={12}>
              <Answer
                answer={answer}
                onChangeAnswer={(_event: any) =>
                  onChangeAnswer(uid, _event.target.value)
                }
                onRemoveAnswer={() => onRemoveAnswer(uid)}
              />
            </Grid>
          ))}
        {typeQuestion === 'multiple_choice' && (
          <Grid item xs={12}>
            <Button color="secondary" onClick={onAddAnswer}>
              Agregar Respuesta
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Question;
