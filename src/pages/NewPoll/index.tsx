import React, { FC } from 'react';
import { Container } from '@mui/material';
import { Layout, PollForm, PollForm2 } from '../../components';
import { BoxRoot } from './styles';

const NewPoll: FC = () => {
    return (
        <Layout>
            <BoxRoot>
                <Container maxWidth="md">
                    <PollForm2 />
                </Container>
            </BoxRoot>
        </Layout>
    );
};

export default NewPoll;
