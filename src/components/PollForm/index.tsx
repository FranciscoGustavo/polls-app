import React, { FC, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    const navigate = useNavigate();
    const location = useLocation();
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

    useEffect(() => {
        if (poll.uuid && location.pathname === '/polls/new') {
            setTimeout(() => {
                navigate(`/polls/${poll.uuid}/edit`);
            }, 4500);
        }
    }, [poll.uuid]);

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
            >
                <Alert
                    severity={error ? 'error' : isSaving ? 'info' : 'success'}
                >
                    {isSaving && 'Guardando'}
                    {isSaved &&
                        'Encuesta guardada, seras redireccionado a la vista de edicion'}
                    {error && 'Upss algo salio mal'}
                </Alert>
            </Snackbar>
        </>
    );
};
