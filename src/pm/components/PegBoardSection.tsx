import React, { type ReactNode } from 'react';
import { Box, Container, type SxProps, type Theme } from '@mui/material';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  sx?: SxProps<Theme>;
}

export const PegBoardSection: React.FC<SectionProps> = ({ children, id, sx }) => {
  return (
    <Box component="section" id={id} sx={{ 
        py:8, 
        minHeight: '100vh',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default, 
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            bottom: 0,
            left: 0,
            zIndex: 0,
            opacity: 0.2,
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHZpZXdCb3g9IjAgMCA1IDUiPjxjaXJjbGUgZmlsbD0iIzAwYWNlNSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iLjUiLz48L3N2Zz4=)',
            backgroundPosition: 'center center'
        },
        ...sx,
        scrollMarginTop: '80px'
    }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            {children}
        </Container>
    </Box>
  );
};
