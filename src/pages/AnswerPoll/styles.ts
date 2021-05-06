import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(4, 0),
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
}));
