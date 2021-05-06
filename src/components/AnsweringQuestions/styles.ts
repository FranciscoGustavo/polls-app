import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr 60px',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.width('md'),
    margin: 'auto',
  },
  containerQuestion: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerAnswer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerButtonNextQuestion: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));
