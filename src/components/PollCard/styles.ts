import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({theme}) => ({
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
}));

export const ContainerProgress = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const ContainerLinearProgress = styled(Box)(({theme}) => ({
    width: '100%',
    marginRight: theme.spacing(1),
}));

export const ContainerLabelProgress = styled(Box)(({theme}) => ({
    minWidth: 35,
}));
