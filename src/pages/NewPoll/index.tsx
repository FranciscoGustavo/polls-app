import React, { FC } from 'react';
import { Container } from '@mui/material';
import { Layout, PollForm } from '../../components';
import { BoxRoot } from './styles';

const NewPoll: FC = () => {
    return (
        <Layout>
            <BoxRoot>
                <Container maxWidth="md">
                    <PollForm />
                </Container>
            </BoxRoot>
        </Layout>
    );
};

export default NewPoll;
