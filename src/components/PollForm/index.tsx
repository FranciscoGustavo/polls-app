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
  Snackbar,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { usePollForm, usePollSave } from '../../hooks';
import Question from '../Question';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

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

  const { savePoll, isSaving, isSaved, error, resetValues } = usePollSave();

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
      <Snackbar
        open={isSaving || isSaved || error}
        autoHideDuration={6000}
        onClose={resetValues}
      >
        <Alert
          severity={error ? 'error' : isSaving ? 'info' : 'success'}
          onClose={resetValues}
        >
          {isSaving && 'Guardando'}
          {isSaved && 'Encuesta guardada'}
          {error && 'Upss algo salio mal'}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default PollForm;
