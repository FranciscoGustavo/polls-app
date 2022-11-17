import React, { FC } from 'react';
import {
    Grid,
    TextField,
    Button,
    IconButton,
    Radio,
    FormControlLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuestionForm } from '../../hooks';
import Answer from '../Answer';
import { BoxRoot, Title, RadioGroupForm } from './styles';

type QuestionProps = {
    uid: string;
    question: string;
    typeQuestion: TypeQuestion;
    answers: Answers;
    onGetQuestion: OnGetQuestion;
    onRemoveQuestion: (uid: string) => void;
};
const Question: FC<QuestionProps> = ({
    uid,
    question: oldQuestion,
    typeQuestion: oldTypeQuestion,
    answers: oldAnswers,
    onGetQuestion,
    onRemoveQuestion,
}) => {
    const {
        question,
        onChangeQuestion,
        typeQuestion,
        onChangeTypeQuestion,
        answers,
        onAddAnswer,
        onRemoveAnswer,
        onChangeAnswer,
    } = useQuestionForm({
        uid,
        onGetQuestion,
        question: oldQuestion,
        typeQuestion: oldTypeQuestion,
        answers: oldAnswers,
    });

    return (
        <BoxRoot>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title>
                        <TextField
                            id="outlined-basic"
                            label="Preguta"
                            variant="outlined"
                            fullWidth
                            value={question}
                            onChange={onChangeQuestion}
                        />
                        <IconButton onClick={() => onRemoveQuestion(uid)}>
                            <DeleteIcon />
                        </IconButton>
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <RadioGroupForm
                        value={typeQuestion}
                        onChange={onChangeTypeQuestion}
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
                {typeQuestion === 'multiple_choice' &&
                    answers.map(({ uuid, answer }) => (
                        <Grid key={uuid} item xs={12}>
                            <Answer
                                answer={answer}
                                onChangeAnswer={(
                                    _event: React.ChangeEvent<HTMLInputElement>
                                ) => onChangeAnswer(uuid, _event.target.value)}
                                onRemoveAnswer={() => onRemoveAnswer(uuid)}
                            />
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
        </BoxRoot>
    );
};

export default Question;
