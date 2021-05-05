import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { useStyles } from './styles';

type PollCardProps = {
  uid: string;
  title: string;
};

const PollCard: FC<PollCardProps> = ({ uid, title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Box className={classes.containerProgress}>
            <Box className={classes.containerLinearProgress}>
              <LinearProgress variant="determinate" value={50} />
            </Box>
            <Box className={classes.containerLabelProgress}>
              <Typography variant="body2" color="textSecondary">
                30 %
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/polls/${uid}/answer`}>
            Contestar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PollCard;
