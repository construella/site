import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useColorMode } from '../../ColorModeContext';

export default function Ribbon() {
 const { t } = useTranslation();
 const { layoutWidth } = useColorMode();
 const isFullWidth = layoutWidth === 'full';

 return (
 <Box sx={{ 
    width: 150, 
    height: 150, 
    overflow: 'hidden', 
    position: 'absolute', 
    top: 0,
    right: isFullWidth ? 0 : -9,
    zIndex: 2000,
    '&::before, &::after': {
        position: 'absolute',
        zIndex: -1,
        content: '""',
        display: isFullWidth ? 'none' : 'block',
        border: '5px solid',
        borderColor: (theme) => theme.palette.secondary.dark,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent'
    },
    '&::before': { top: 0, left: 0 },
    '&::after': { bottom: 0, right: 0 },
    '& span': {
        position: 'absolute',
        display: 'block',
        width: 225,
        padding: '15px 0',
        backgroundColor: (theme) => theme.palette.secondary.main,
        boxShadow: '0 5px 10px rgba(0,0,0,.1)',
        color: (theme) => theme.palette.secondary.contrastText,
        font: '700 18px/1 "Lato", sans-serif',
        textShadow: '0 1px 1px rgba(0,0,0,.2)',
        textTransform: 'uppercase',
        textAlign: 'center',
        left: -25,
        top: 30,
        transform: 'rotate(45deg)'
    }
 }}>
    <span>{t('coming_soon')}</span>
 </Box>
 );
}
