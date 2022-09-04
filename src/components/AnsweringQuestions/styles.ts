import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateRows: 'auto 1fr 60px',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',
}));

export const ContainerQuestion = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}));

export const ContainerAnswer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}));

export const ContainerButtonNextQuestion = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
}));
