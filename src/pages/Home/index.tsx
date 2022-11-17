import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePolls } from '../../hooks';
import { Layout, PollCard } from '../../components';
import { BoxRoot } from './styles';

const Home: FC = () => {
    const polls = usePolls();

    return (
        <Layout>
            <BoxRoot>
                <Container>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Titulo</TableCell>
                                    <TableCell>Preguntas</TableCell>
                                    <TableCell>Contestadas</TableCell>
                                    <TableCell align="right">
                                        Acciones
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {polls.map((poll) => (
                                    <TableRow>
                                        <TableCell>
                                            {poll.uuid.substring(0, 8)}
                                        </TableCell>
                                        <TableCell>{poll.title}</TableCell>
                                        <TableCell>
                                            {poll.questions.length}
                                        </TableCell>
                                        <TableCell>0</TableCell>
                                        <TableCell align="right">
                                            <Link
                                                to={`/polls/${poll.uuid}/edit`}
                                            >
                                                <IconButton>
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                            </Link>
                                            <IconButton>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </BoxRoot>
        </Layout>
    );
};

export default Home;
