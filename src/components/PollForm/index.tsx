import React, { FC } from 'react';
import { Paper, TextField, Button, Snackbar, PaperProps } from '@mui/material';
import { styled } from '@mui/material';
import { Add as AddIcon, Save as SaveIcon } from '@mui/icons-material';
import { Alert } from '../Alert';
import { QuestionsListForm } from '../QuestionsListForm';
import { usePollForm } from './PollForm.hook';

export const PaperBox = styled(Paper)<PaperProps>(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
}));

export const PollForm: FC<{ poll?: Poll }> = ({ poll: oldPoll }) => {
    const {
        poll,
        expanded,
        isSaving,
        isSaved,
        error,
        handleChangeTitle,
        handleAccordion,
        handleAddNewQuestion,
        handleAddNewAnswer,
        handleChangeQuestion,
        handleChangeTypeQuestion,
        handleChangeAnswer,
        handleDeleteQuestion,
        handleDeleteAnswer,
        handleSave,
    } = usePollForm({ poll: oldPoll });

    return (
        <>
            <PaperBox>
                <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                >
                    Guardar
                </Button>
                <Button startIcon={<AddIcon />} onClick={handleAddNewQuestion}>
                    Agregar Pregunta
                </Button>
            </PaperBox>
            <PaperBox>
                <TextField
                    id="title"
                    name="title"
                    label="Titulo de la encuesta"
                    variant="outlined"
                    fullWidth
                    value={poll.title}
                    onChange={handleChangeTitle}
                />
            </PaperBox>
            <QuestionsListForm
                questions={poll.questions}
                expanded={expanded}
                handleDeleteQuestion={handleDeleteQuestion}
                handleAccordion={handleAccordion}
                handleChangeQuestion={handleChangeQuestion}
                handleChangeTypeQuestion={handleChangeTypeQuestion}
                handleChangeAnswer={handleChangeAnswer}
                handleDeleteAnswer={handleDeleteAnswer}
                handleAddNewAnswer={handleAddNewAnswer}
            />
            <Snackbar
                open={isSaving || isSaved || error}
                autoHideDuration={5000}
                // onClose={resetValues}
            >
                <Alert
                    severity={error ? 'error' : isSaving ? 'info' : 'success'}
                    // onClose={resetValues}
                >
                    {isSaving && 'Guardando'}
                    {isSaved && 'Encuesta guardada'}
                    {error && 'Upss algo salio mal'}
                </Alert>
            </Snackbar>
        </>
    );
};
