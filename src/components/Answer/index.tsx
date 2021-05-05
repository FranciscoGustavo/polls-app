import React, { FC } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';

type AnswerProps = {
  answer: string;
  onChangeAnswer: (_event: any) => void;
  onRemoveAnswer: () => void;
};
const Answer: FC<AnswerProps> = ({
  answer,
  onChangeAnswer,
  onRemoveAnswer,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
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
    </Box>
  );
};

export default Answer;
