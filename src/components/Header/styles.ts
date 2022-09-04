import { styled } from '@mui/material';

export const Nav = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    '& > a': {
      marginLeft: theme.spacing(1),
    },
}));
