import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: 'gray',
    paddingTop: theme.spacing(4),
  },
  containerTitle: {
    display: 'flex',
  },
  typeQuestion: {
    display: 'flex',
    flexDirection: 'row',
  },
}));
