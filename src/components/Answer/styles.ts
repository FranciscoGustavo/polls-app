import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    maxWidth: '400px',
    paddingLeft: theme.spacing(2),
  },
}));
