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
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/lab/Alert';
import { usePollForm, usePollSave } from '../../hooks';
import Question from '../Question';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
        <>
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
                        {questions.map(({ uuid }) => (
                            <Grid key={uuid} item xs={12}>
                                <Question
                                    uid={uuid}
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
            <Snackbar
                open={isSaving || isSaved || error}
                autoHideDuration={2000}
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
        </>
    );
};

export default PollForm;
