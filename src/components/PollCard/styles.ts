import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
  },
  containerProgress: {
    display: 'flex',
    alignItems: 'center',
  },
  containerLinearProgress: {
    width: '100%',
    marginRight: theme.spacing(1),
  },
  containerLabelProgress: {
    minWidth: 35,
  },
}));
