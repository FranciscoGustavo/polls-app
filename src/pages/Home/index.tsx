import { FC } from 'react';
import { Container, Grid } from '@mui/material';
import { usePolls } from '../../hooks';
import { Layout, PollCard } from '../../components';
import { BoxRoot } from './styles';

const Home: FC = () => {
  const polls = usePolls();

  return (
    <Layout>
      <BoxRoot>
        <Container>
          <Grid container spacing={2}>
            {polls.map(({ uuid, title, isAnswered }) => (
              <Grid key={uuid} item xs={12}>
                <PollCard
                  uuid={uuid as string}
                  title={title}
                  isAnswered={isAnswered}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </BoxRoot>
    </Layout>
  );
};

export default Home;
