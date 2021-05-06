import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { usePoll } from '../../hooks';
import { Layout, AnsweringQuestions } from '../../components';
import { useStyles } from './styles';

const AnswerPoll: FC = () => {
  const classes = useStyles();
  const params = useParams<{ uid: string }>();
  const { poll, isLoading, error } = usePoll(params.uid);

  return (
    <Layout>
      <Box className={classes.root}>
        <Container className={classes.container}>
          {poll && <AnsweringQuestions poll={poll} />}
        </Container>
      </Box>
    </Layout>
  );
};

export default AnswerPoll;
