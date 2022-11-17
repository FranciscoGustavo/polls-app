import React, { FC } from 'react';
import { TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BoxRoot } from './styles';

type AnswerProps = {
    answer: string;
    onChangeAnswer: (_event: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveAnswer: () => void;
};
const Answer: FC<AnswerProps> = ({
    answer,
    onChangeAnswer,
    onRemoveAnswer,
}) => {
    return (
        <BoxRoot>
            <TextField
                label="Respuesta"
                variant="outlined"
                fullWidth
                value={answer}
                onChange={onChangeAnswer}
            />
            <IconButton onClick={onRemoveAnswer}>
                <DeleteIcon />
            </IconButton>
        </BoxRoot>
    );
};

export default Answer;
