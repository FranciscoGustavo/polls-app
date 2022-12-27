import { useState, useId, FC, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableFooter,
    TablePagination,
    IconButton,
    Modal,
    Box,
    CircularProgress,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import queryString from 'query-string';
import { Layout, Skeleton, Confirmation } from '../../components';
import { BoxRoot } from './styles';
import { useFindAllPolls, useDeletePoll } from '../../hooks';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

const Home: FC = () => {
    const id = useId();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            page: Number(params.page) - 1 || 0,
            limit: Number(params.limit) || 24,
        };
    }, [location.search]);
    
    const {
        polls,
        isLoading: isLoadingPolls,
        isLoaded: isLoadedPolls,
        error: errorPolls,
        refetch,
    } = useFindAllPolls(searchParams);
    const { isLoading, deletePoll } = useDeletePoll();
    const [modal, setModal] = useState<boolean>(false);
    const [currentPollUUID, setCurrentPollUUID] = useState<string | false>(
        false
    );

    const handleDeletePoll = (uuid: string) => () => {
        setCurrentPollUUID(uuid);
        setModal(true);
    };

    const handleConfirmDeletePoll = () => {
        if (currentPollUUID) {
            deletePoll(currentPollUUID).finally(() => refetch());
        }
        setModal(false);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        const limit = searchParams.limit;
        navigate({ pathname: '/', search: `?page=${page + 1}&limit=${limit}` });
    };

    const handleChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        const limit = event.target.value;
        const page = searchParams.page;
        navigate({ pathname: '/', search: `?page=${page + 1}&limit=${limit}` });
        
    };

    return (
        <Layout>
            <Helmet>
                <title>Polls App</title>
                <meta name="description" content="Pagina home de la aplicacion de encuestas" />
            </Helmet>
            <BoxRoot>
                <Container sx={{ height: '100%' }}>
                    <TableContainer component={Paper} sx={{ height: '100%' }}>
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
                                {isLoadingPolls &&
                                    new Array(24).fill(null).map((_, idx) => (
                                        <TableRow key={`${id}-${idx}`}>
                                            <TableCell>
                                                <Skeleton
                                                    variant="rectangular"
                                                    height={20}
                                                    animation="wave"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton
                                                    variant="rectangular"
                                                    height={20}
                                                    animation="wave"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton
                                                    variant="circular"
                                                    width={20}
                                                    height={20}
                                                    animation="wave"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton
                                                    variant="circular"
                                                    width={20}
                                                    height={20}
                                                    animation="wave"
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent:
                                                            'flex-end',
                                                    }}
                                                >
                                                    <Skeleton
                                                        variant="rectangular"
                                                        width={80}
                                                        height={20}
                                                        animation="wave"
                                                    />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                {isLoadedPolls &&
                                    polls.map((poll) => (
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
                                                    disabled={
                                                        currentPollUUID ===
                                                            poll.uuid &&
                                                        isLoading
                                                    }
                                                    onClick={handleDeletePoll(
                                                        poll.uuid
                                                    )}
                                                >
                                                    {!isLoading && (
                                                        <DeleteIcon fontSize="small" />
                                                    )}
                                                    {currentPollUUID ===
                                                        poll.uuid &&
                                                        isLoading && (
                                                        <CircularProgress
                                                            size={16}
                                                            color="info"
                                                        />
                                                    )}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                {errorPolls && (
                                    <TableRow>
                                        <TableCell colSpan={5}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '100%',
                                                    paddingTop: '50px',
                                                }}
                                            >
                                                <Typography variant="h3">
                                                    Opps algo salio mal vuelve a
                                                    recargar la pagina
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        labelRowsPerPage="Encuestas por pagina"
                                        rowsPerPageOptions={[5, 10, 24]}
                                        count={240}
                                        rowsPerPage={searchParams.limit}
                                        page={searchParams.page}
                                        showFirstButton
                                        showLastButton
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </TableRow>
                            </TableFooter>
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
