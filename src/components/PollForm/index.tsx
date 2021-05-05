import React, { useState, FC } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  TextField,
  Button,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import Question from '../Question';

const PollForm: FC = () => {
  const [title] = useState('');
  const [questions, setQuestions] = useState([{ uid: uuidv4(), question: '' }]);

  const onAddQuestion = () => {
    setQuestions([...questions, { uid: uuidv4(), question: '' }]);
  };

  const onRemoveQuestion = (uid: string) => {
    const filteredQuestions = questions.filter(
      ({ uid: uidQuestion }) => uidQuestion !== uid
    );
    setQuestions(filteredQuestions);
  };

  return (
    <Card>
      <CardHeader title="Nueva encuesta" />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Titulo de la encuesta"
              variant="outlined"
              fullWidth
              value={title}
            />
          </Grid>
          {questions.map(({ uid }) => (
            <Grid key={uid} item xs={12}>
              <Question onRemoveQuestion={() => onRemoveQuestion(uid)} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" onClick={onAddQuestion}>
          Agregar Pregunta
        </Button>
        <Button variant="contained" color="primary">
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
};

export default PollForm;
