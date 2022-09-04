import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
    root: {
        display: 'flex',
        maxWidth: '400px',
        paddingLeft: theme.spacing(2),
    },
}));
