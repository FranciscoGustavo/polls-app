import { useState, FC } from 'react';
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
    Modal,
    Box,
    Typography,
    Button,
    Grid,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
import { usePolls } from '../../hooks';
import { Layout, PollCard } from '../../components';
import { BoxRoot } from './styles';
import { deletePoll } from '../../api/polls';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

const Confirmation: FC<{ onDelete: () => void; onClose: () => void }> = ({
    onDelete,
    onClose,
}) => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        Eliminar encuesta
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" textAlign="center">
                        Estas Seguro?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth onClick={onDelete}>
                        Eliminar
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

const Home: FC = () => {
    const polls = usePolls();
    const [modal, setModal] = useState<boolean>(false);
    const [currentPollUUID, setCurrentPollUUID] = useState<string | false>(
        false
    );

    const handleDeletePoll = (uuid: string) => () => {
        setCurrentPollUUID(uuid);
        setModal(true);
        console.log('Eliminando');
    };

    const handleConfirmDeletePoll = () => {
        if (currentPollUUID) {
            deletePoll(currentPollUUID)
                .then((res) => {
                    console.log('', res);
                })
                .catch((error) => {
                    console.log('ERROR', error);
                })
                .then(() => {
                    setModal(false);
                });
        }
    };

    const handleCloseModal = () => {
        setModal(false);
    };

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
                                    <TableRow key={poll.uuid}>
                                        <TableCell>
                                            {poll.uuid.substring(0, 8)}
                                        </TableCell>
                                        <TableCell>{poll.title}</TableCell>
                                        <TableCell>
                                            {poll.questions.length}
                                        </TableCell>
                                        <TableCell>0</TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                component={Link}
                                                to={`/polls/${poll.uuid}/edit`}
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                onClick={handleDeletePoll(
                                                    poll.uuid
                                                )}
                                            >
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
            <Modal open={modal} onClose={handleCloseModal}>
                <Paper sx={style}>
                    <Confirmation
                        onDelete={handleConfirmDeletePoll}
                        onClose={handleCloseModal}
                    />
                </Paper>
            </Modal>
        </Layout>
    );
};

export default Home;
