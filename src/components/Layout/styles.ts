import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(() => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
}));

export const Wrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    paddingTop: '56px',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
        paddingTop: '64px',
    },
}));

export const Content = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
}));
