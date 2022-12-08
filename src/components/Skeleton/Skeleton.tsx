import { Skeleton as MUISkeleton, styled } from '@mui/material';

export const Skeleton = styled(MUISkeleton)(({ variant, theme }) =>({
    borderRadius: variant === 'rectangular' ? theme.spacing(1) : '50%',
}));