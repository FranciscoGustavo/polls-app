import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',
    '& > *': {
        margin: theme.spacing(2, 0),
    },
}));
