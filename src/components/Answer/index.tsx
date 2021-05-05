import React, { FC } from 'react';
import { Box, TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';

type AnswerProps = {
  onRemoveAnswer: () => void;
};
const Answer: FC<AnswerProps> = ({ onRemoveAnswer }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Respuesta"
        variant="outlined"
        fullWidth
      />
      <IconButton onClick={onRemoveAnswer}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Answer;
