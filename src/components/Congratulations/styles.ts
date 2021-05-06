import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.width('md'),
    margin: 'auto',
    '& > *': {
      margin: theme.spacing(2, 0)
    }
  },
}));
