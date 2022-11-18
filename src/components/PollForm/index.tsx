import React, { FC, useState, Fragment } from 'react';
import {
    Paper,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
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
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/lab/Alert';

import { Box, styled } from '@mui/material';
import { RadioGroupProps } from '@mui/material/RadioGroup';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { v4 } from 'uuid';
import { usePollForm, usePollSave } from '../../hooks';
import Question from '../Question';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PollForm: FC<{ title: string; questions: Questions }> = ({
    title: oldTitle,
    questions: oldQuestions,
}) => {
    // const {
    //     title,
    //     onChangeTitle,
    //     questions,
    //     onAddQuestion,
    //     onRemoveQuestion,
    //     onGetQuestion,
    //     disabledButtons,
    // } = usePollForm({ title: oldTitle, questions: oldQuestions });

    // const { savePoll, isSaving, isSaved, error, resetValues } = usePollSave();

    // const onSavePoll = () => {
    //     savePoll({ title, questions });
    // };

    return <></>;
};

export default PollForm;

export const RadioGroupForm = styled(RadioGroup)<RadioGroupProps>(() => ({
    display: 'flex',
    flexDirection: 'row',
}));

export const SpeedDialButton = styled(Button)<ButtonProps>(() => ({
    position: 'absolute',
    right: '50px',
    bottom: '50px',
    width: '80px',
    height: '80px',
    borderRadius: '100%',
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

export const PollForm2: FC<{ poll?: Poll }> = ({ poll: oldPoll }) => {
    const [poll, setPoll] = useState<Poll>(
        oldPoll || { uuid: '', title: '', questions: [] }
    );
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const { savePoll, isSaving, isSaved, error, resetValues } = usePollSave();

    const handleChange =
        (panel: string) =>
            (event: React.SyntheticEvent | null, isExpanded: boolean) => {
                setExpanded(isExpanded ? panel : false);
            };

    const handleAddNewQuestion = () => {
        const newQuestion: Question = {
            uuid: v4(),
            question: '',
            typeQuestion: 'open_question',
            answers: [],
        };
        const questions = [...poll.questions];
        questions.push(newQuestion);
        setPoll({
            ...poll,
            questions,
        });

        handleChange(newQuestion.uuid)(null, true);
    };

    const handleAddNewAnswer = (uuid: string) => () => {
        const newAnswer: Answer = {
            uuid: v4(),
            answer: '',
        };
        const questions: Questions = poll.questions.map((currentQuestion) => {
            if (currentQuestion.uuid === uuid) {
                currentQuestion.answers = [
                    ...currentQuestion.answers,
                    newAnswer,
                ];
            }

            return currentQuestion;
        });

        setPoll({
            ...poll,
            questions,
        });
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setPoll({
            ...poll,
            title,
        });
    };

    const handleChangeQuestion =
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.question = event.target.value;
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };

    const handleChangeTypeQuestion =
        (uuid: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const questions: Questions = poll.questions.map(
                (currentQuestion) => {
                    if (currentQuestion.uuid === uuid) {
                        currentQuestion.typeQuestion = event.target
                            .value as TypeQuestion;
                    }

                    return currentQuestion;
                }
            );

            setPoll({
                ...poll,
                questions,
            });
        };
    
    const handleChangeAnswer = ({ uuid, answerUuid }: {uuid: string; answerUuid: string}) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const questions: Questions = poll.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === uuid) {
                    currentQuestion.answers = currentQuestion.answers.map(currentAnswer => {
                        if (currentAnswer.uuid === answerUuid) {
                            currentAnswer.answer = event.target.value;
                        }

                        return currentAnswer;
                    });
                }

                return currentQuestion;
            }
        );

        setPoll({
            ...poll,
            questions,
        });
    };

    const handleDeleteQuestion = (uuid: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        const questions: Questions = poll.questions.filter(
            (currentQuestion) => currentQuestion.uuid !== uuid
        );

        setPoll({
            ...poll,
            questions,
        });
    };

    const handleDeleteAnswer = ({ uuid, answerUuid }: {uuid: string; answerUuid: string}) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        const questions: Questions = poll.questions.map(
            (currentQuestion) => {
                if (currentQuestion.uuid === uuid) {
                    currentQuestion.answers = currentQuestion.answers.filter(currentAnswer => currentAnswer.uuid !== answerUuid);
                }

                return currentQuestion;
            }
        );

        setPoll({
            ...poll,
            questions,
        });
    };

    const handleSave = () => {
        console.log('Guardando...', poll);
        savePoll(poll);
    };

    return (
        <>
            <PaperBox>
                <Button color="secondary" variant="contained" onClick={handleSave}>Guardar</Button>
                <Button onClick={handleAddNewQuestion}>Agregar Pregunta</Button>
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
                                <IconButton onClick={handleDeleteQuestion(uuid)}>
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
                                                onChange={handleChangeAnswer({ uuid, answerUuid})}
                                            />
                                        </Grid>

                                        <Grid item xs={1}>
                                            <IconButton onClick={handleDeleteAnswer({ uuid, answerUuid })}>
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
