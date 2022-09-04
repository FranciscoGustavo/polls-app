import { Box, styled } from '@mui/material';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

export const BoxRoot = styled(Box)(({ theme }) => ({
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: 'gray',
    paddingTop: theme.spacing(4),
}));

export const Title = styled(Box)(() => ({
    display: 'flex',
}));

export const RadioGroupForm = styled(RadioGroup)<RadioGroupProps>(() => ({
    display: 'flex',
    flexDirection: 'row',
}));
