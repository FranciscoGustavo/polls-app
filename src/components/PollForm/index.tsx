import React, { FC, useState, Fragment } from 'react';
import {
    Paper,
    Grid,
    TextField,
    Button,
    Snackbar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Radio,
    RadioGroup,
    FormControlLabel,
    ButtonProps,
    PaperProps,
    RadioGroupProps,
} from '@mui/material';
import { Box, styled } from '@mui/material';
import {
    Delete as DeleteIcon,
    Add as AddIcon,
    Save as SaveIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { Alert } from '../Alert';
import { usePollForm } from './PollForm.hook';

export const RadioGroupForm = styled(RadioGroup)<RadioGroupProps>(() => ({
    display: 'flex',
    flexDirection: 'row',
}));

export const PaperBox = styled(Paper)<PaperProps>(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
}));

const getTypeQuestion = (type: TypeQuestion) => {
    if (type === 'multiple_choice') {
        return 'Opcion Multiple';
    }

    return 'Pregunta abierta';
};

export const PollForm: FC<{ poll?: Poll }> = ({ poll: oldPoll }) => {
    const {
        poll,
        expanded,
        isSaving,
        isSaved,
        error,
        handleChangeTitle,
        handleChange,
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
            {poll.questions.map(({ uuid, question, typeQuestion, answers }) => (
                <Accordion
                    key={uuid}
                    expanded={expanded === uuid}
                    onChange={handleChange(uuid)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography>{question}</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {getTypeQuestion(typeQuestion)}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    onClick={handleDeleteQuestion(uuid)}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Preguta"
                                        variant="outlined"
                                        fullWidth
                                        value={question}
                                        onChange={handleChangeQuestion(uuid)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroupForm
                                        value={typeQuestion}
                                        onChange={handleChangeTypeQuestion(
                                            uuid
                                        )}
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
                                    </RadioGroupForm>
                                </Grid>
                                {answers.map(({ uuid: answerUuid, answer }) => (
                                    <Fragment key={answerUuid}>
                                        <Grid item xs={11}>
                                            <TextField
                                                label="Respuesta"
                                                variant="outlined"
                                                fullWidth
                                                value={answer}
                                                onChange={handleChangeAnswer({
                                                    uuid,
                                                    answerUuid,
                                                })}
                                            />
                                        </Grid>

                                        <Grid item xs={1}>
                                            <IconButton
                                                onClick={handleDeleteAnswer({
                                                    uuid,
                                                    answerUuid,
                                                })}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    </Fragment>
                                ))}
                                {typeQuestion === 'multiple_choice' && (
                                    <Grid item xs={11}>
                                        <Button
                                            onClick={handleAddNewAnswer(uuid)}
                                        >
                                            Agregar respuesta
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
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
