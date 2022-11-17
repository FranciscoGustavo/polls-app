import { Box, styled } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(4, 0),
    overflowY: 'auto',
    backgroundColor: theme.palette.grey[100]
}));
