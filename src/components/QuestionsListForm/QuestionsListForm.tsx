import React, { FC, Fragment } from 'react';
import {
    Paper,
    Grid,
    TextField,
    Button,
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
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

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

export const QuestionsListForm: FC<{
    questions: Questions;
    expanded: string | boolean;
    handleAccordion: (
        panel: string
    ) => (event: React.SyntheticEvent | null, isExpanded: boolean) => void;
    handleDeleteQuestion: (
        uuid: string
    ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleChangeQuestion: (
        uuid: string
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeTypeQuestion: (
        uuid: string
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeAnswer: (props: {
        uuid: string;
        answerUUID: string;
    }) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteAnswer: (props: {
        uuid: string;
        answerUUID: string;
    }) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleAddNewAnswer: (uuid: string) => () => void;
}> = ({
    questions,
    expanded,
    handleDeleteQuestion,
    handleAccordion,
    handleChangeQuestion,
    handleChangeTypeQuestion,
    handleChangeAnswer,
    handleDeleteAnswer,
    handleAddNewAnswer,
}) => {
    return (
        <Box>
            {questions.map(({ uuid, question, typeQuestion, answers }) => (
                <Accordion
                    key={uuid}
                    expanded={expanded === uuid}
                    onChange={handleAccordion(uuid)}
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
                                {answers.map(({ uuid: answerUUID, answer }) => (
                                    <Fragment key={answerUUID}>
                                        <Grid item xs={11}>
                                            <TextField
                                                label="Respuesta"
                                                variant="outlined"
                                                fullWidth
                                                value={answer}
                                                onChange={handleChangeAnswer({
                                                    uuid,
                                                    answerUUID,
                                                })}
                                            />
                                        </Grid>

                                        <Grid item xs={1}>
                                            <IconButton
                                                onClick={handleDeleteAnswer({
                                                    uuid,
                                                    answerUUID,
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
        </Box>
    );
};
