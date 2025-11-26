import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CssBaseline, GlobalStyles } from '@mui/material'
import './index.css'
import "./i18n"
import { PmPage } from './pm/pm.page.tsx'
import { ColorModeProvider, useColorMode } from './ColorModeContext.tsx'
import { ThemeSwitcher } from './ThemeSwitcher.tsx'
import pattern15transparent from './assets/img/pattern15transparent.svg'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { layoutWidth } = useColorMode();
  return (
    <>
      <GlobalStyles styles={(theme) => ({
        body: layoutWidth === 'boxed' ? {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#f0f2f5',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 0, // Create stacking context
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${pattern15transparent})`,
            backgroundColor: `${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}`,
            backgroundRepeat: 'repeat',
            filter: 'opacity(0.7)',
            zIndex: 1,
            pointerEvents: 'none',
          }
        } : {},
        '#root': layoutWidth === 'boxed' ? {
          width: '100%',
          maxWidth: '1440px',
          boxShadow: theme.shadows[24],
          position: 'relative',
          zIndex: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#f0f2f5',
        } : {
          width: '100%',
        }
      })} />
      {children}
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ColorModeProvider>
        <LayoutWrapper>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PmPage />} />
            </Routes>
            <ThemeSwitcher />
          </BrowserRouter>
        </LayoutWrapper>
      </ColorModeProvider>
  </StrictMode>,
)