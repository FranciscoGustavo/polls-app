import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    Button,
    LinearProgress,
} from '@mui/material';
import {
    BoxRoot,
    ContainerProgress,
    ContainerLinearProgress,
    ContainerLabelProgress,
} from './styles';

type PollCardProps = {
    uuid: string;
    title: string;
    isAnswered: boolean;
};

const PollCard: FC<PollCardProps> = ({ uuid, title, isAnswered }) => {
    return (
        <BoxRoot>
            <Card>
                <CardHeader title={title} />
                <CardContent>
                    <ContainerProgress>
                        <ContainerLinearProgress>
                            <LinearProgress
                                variant="determinate"
                                value={isAnswered ? 100 : 0}
                            />
                        </ContainerLinearProgress>
                        <ContainerLabelProgress>
                            <Typography variant="body2" color="textSecondary">
                                {isAnswered ? '100 %' : '0 %'}
                            </Typography>
                        </ContainerLabelProgress>
                    </ContainerProgress>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/polls/${uuid}/answer`}>
                        Contestar
                    </Button>
                </CardActions>
            </Card>
        </BoxRoot>
    );
};

export default PollCard;
