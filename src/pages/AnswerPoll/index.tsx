import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  CircularProgress,
} from '@mui/material';
import { usePoll } from '../../hooks';
import { Layout, AnsweringQuestions } from '../../components';
import { BoxRoot, Container } from './styles';

const AnswerPoll: FC = () => {
  const params = useParams<{ uid: string }>();
  const { poll, isLoading, error } = usePoll(params.uid || '');

  return (
    <Layout>
      <BoxRoot>
        <Container>
          {error && <Typography>Ups algo salio mal</Typography>}
          {isLoading && <CircularProgress color="secondary" />}
          {poll && <AnsweringQuestions poll={poll} />}
        </Container>
      </BoxRoot>
    </Layout>
  );
};

export default AnswerPoll;
