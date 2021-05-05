import React, { FC } from 'react';
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
import { usePollForm, usePollSave } from '../../hooks';
import Question from '../Question';

const PollForm: FC = () => {
  const {
    title,
    onChangeTitle,
    questions,
    onAddQuestion,
    onRemoveQuestion,
    onGetQuestion,
    disabledButtons,
  } = usePollForm();

  const { savePoll, isSaving, isSaved, error } = usePollSave();

  const onSavePoll = () => {
    savePoll({ title, questions });
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
              onChange={onChangeTitle}
            />
          </Grid>
          {questions.map(({ uid }) => (
            <Grid key={uid} item xs={12}>
              <Question
                uid={uid}
                onGetQuestion={onGetQuestion}
                onRemoveQuestion={onRemoveQuestion}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          onClick={onAddQuestion}
          disabled={disabledButtons}
        >
          Agregar Pregunta
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={disabledButtons}
          onClick={onSavePoll}
        >
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
};

export default PollForm;
