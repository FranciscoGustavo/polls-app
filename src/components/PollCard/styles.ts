import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(() => ({
    width: '100%',
    margin: 'auto',
}));

export const ContainerProgress = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}));

export const ContainerLinearProgress = styled(Box)(({ theme }) => ({
    width: '100%',
    marginRight: theme.spacing(1),
}));

export const ContainerLabelProgress = styled(Box)(() => ({
    minWidth: 35,
}));
