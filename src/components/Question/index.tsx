import React, { useState, FC } from 'react';
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
import { v4 as uuidv4 } from 'uuid';
import Answer from '../Answer';
import { useStyles } from './styles';

type QuestionProps = {
  onRemoveQuestion: () => void;
};
const Question: FC<QuestionProps> = ({ onRemoveQuestion }) => {
  const [typeQuestion, setTypeQuestion] = useState('open_question');
  const [answers, setAnswers] = useState([{ uid: uuidv4() }]);

  const onChageTypeQuestion = () => {
    if (typeQuestion === 'open_question') {
      setTypeQuestion('multiple_choice');
      return;
    }
    setTypeQuestion('open_question');
    return;
  };

  const onAddAnswer = () => {
    setAnswers([...answers, { uid: uuidv4() }]);
  };

  const onRemoveAnswer = (uid: string) => {
    const filteredAnswer = answers.filter(
      ({ uid: uidAnswer }) => uidAnswer !== uid
    );
    setAnswers(filteredAnswer);
  };

  const classes = useStyles();
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
              value="Pregunta numero 1"
            />
            <IconButton onClick={onRemoveQuestion}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            className={classes.typeQuestion}
            value={typeQuestion}
            onChange={onChageTypeQuestion}
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
          answers.map(({ uid }) => (
            <Grid item xs={12}>
              <Answer onRemoveAnswer={() => onRemoveAnswer(uid)} />
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
