import { Box, Container as MuiContainer, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(4, 0),
    overflow: 'hidden',
}));

export const Container = styled(MuiContainer)(() => ({
    width: '100%',
    height: '100%',
    overflowY: 'auto',
}));
