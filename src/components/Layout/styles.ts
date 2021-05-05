import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingTop: '56px',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '64px',
    },
  },
  content: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
}));
