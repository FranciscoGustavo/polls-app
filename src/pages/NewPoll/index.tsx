import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@mui/material';
import { Layout, PollForm } from '../../components';
import { BoxRoot } from './styles';

const NewPoll: FC = () => {
    return (
        <Layout>
            <Helmet>
                <title>Nueva encuesta</title>
                <meta name="description" content="Nueva encuesta" />
            </Helmet>
            <BoxRoot>
                <Container>
                    <PollForm />
                </Container>
            </BoxRoot>
        </Layout>
    );
};

export default NewPoll;
