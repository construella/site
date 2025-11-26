import React, { useState } from 'react';
import { 
  ToggleButton, 
  ToggleButtonGroup, 
  Box, 
  Stack, 
  Drawer, 
  IconButton, 
  Typography, 
  Divider,
  Fab,
  Tooltip
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import CircleIcon from '@mui/icons-material/Circle';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import WebIcon from '@mui/icons-material/Web';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useColorMode } from './ColorModeContext';
import Cookies from './utils/cookie';

export function ThemeSwitcher() {
  const { t, i18n } = useTranslation();
  const { mode, setMode, colorScheme, setColorScheme, layoutWidth, setLayoutWidth } = useColorMode();
  const [open, setOpen] = useState(false);

  const handleModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: 'light' | 'dark' | 'system' | null,
  ) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const handleSchemeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newScheme: 'teal' | 'blue' | null,
  ) => {
    if (newScheme !== null) {
      setColorScheme(newScheme);
    }
  };

  const handleLayoutChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLayout: 'full' | 'boxed' | null,
  ) => {
    if (newLayout !== null) {
      setLayoutWidth(newLayout);
    }
  };

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLang: string | null,
  ) => {
    if (newLang !== null) {
      i18n.changeLanguage(newLang);
      
      const cookieConsent = Cookies.get('cookie_consent');
      let consent = { preferences: false };
      try { consent = cookieConsent ? JSON.parse(cookieConsent) : {}; } catch(e){}

      if (consent.preferences) {
        const cookie = Cookies.get('ui_settings');
        let settings = {};
        try { settings = cookie ? JSON.parse(cookie) : {}; } catch(e){}
        Cookies.set('ui_settings', JSON.stringify({ ...settings, lang: newLang }), { expires:365, secure: true, sameSite: 'Lax' });
      }
    }
  };

  return (
    <>
      <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
        <Tooltip title={t('theme_customize_view')}>
          <Fab 
            color="primary" 
            aria-label="settings" 
            onClick={() => setOpen(true)}
            size="medium"
          >
            <SettingsIcon />
          </Fab>
        </Tooltip>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 360 }, p: 3 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            {t('theme_appearance')}
          </Typography>
          <IconButton onClick={() => setOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={4}>
          {/* Language Switcher */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
              {t('theme_language')}
            </Typography>
            <ToggleButtonGroup
              value={i18n.language}
              exclusive
              onChange={handleLanguageChange}
              aria-label="language"
              fullWidth
              orientation="vertical"
              size="small"
            >
              <ToggleButton value="en">
                <Stack direction="row" spacing={1} alignItems="center">
                  {/* <TranslateIcon fontSize="small" sx={{ opacity: i18n.language === 'en' ? 1 : 0.5 }} /> */}
                  <Typography variant="body2">English</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="es">
                <Stack direction="row" spacing={1} alignItems="center">
                  {/* <TranslateIcon fontSize="small" sx={{ opacity: i18n.language === 'es' ? 1 : 0.5 }} /> */}
                  <Typography variant="body2">Español</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="pl">
                <Stack direction="row" spacing={1} alignItems="center">
                  {/* <TranslateIcon fontSize="small" sx={{ opacity: i18n.language === 'pl' ? 1 : 0.5 }} /> */}
                  <Typography variant="body2">Polski</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="ru">
                <Stack direction="row" spacing={1} alignItems="center">
                  {/* <TranslateIcon fontSize="small" sx={{ opacity: i18n.language === 'ru' ? 1 : 0.5 }} /> */}
                  <Typography variant="body2">Русский</Typography>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Divider />

          {/* Layout Switcher */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
              {t('theme_layout_width')}
            </Typography>
            <ToggleButtonGroup
              value={layoutWidth}
              exclusive
              onChange={handleLayoutChange}
              aria-label="layout width"
              fullWidth
              size="small"
            >
              <ToggleButton value="boxed">
                <Stack direction="row" spacing={1} alignItems="center">
                  <ViewWeekIcon fontSize="small" />
                  <Typography variant="body2">{t('theme_layout_boxed')}</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="full">
                <Stack direction="row" spacing={1} alignItems="center">
                  <WebIcon fontSize="small" />
                  <Typography variant="body2">{t('theme_layout_full')}</Typography>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Divider />

          {/* Color Scheme Switcher */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
              {t('theme_color_theme')}
            </Typography>
            <ToggleButtonGroup
              value={colorScheme}
              exclusive
              onChange={handleSchemeChange}
              aria-label="color scheme"
              fullWidth
              orientation="vertical"
              size="small"
            >
              <ToggleButton value="teal" sx={{justifyContent: "left"}}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CircleIcon fontSize="small" sx={{ color: '#0F5357' }} />
                  <Typography variant="body2">{t('theme_color_teal')}</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="blue" sx={{justifyContent: "left"}}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CircleIcon fontSize="small" sx={{ color: '#1976D2' }} />
                  <Typography variant="body2">{t('theme_color_blue')}</Typography>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Divider />

          {/* Mode Switcher */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
              {t('theme_mode')}
            </Typography>
            <ToggleButtonGroup
              value={mode}
              exclusive
              onChange={handleModeChange}
              aria-label="color mode"
              fullWidth
              size="small"
            >
              <ToggleButton value="light">
                <Stack direction="row" spacing={1} alignItems="center">
                  <LightModeIcon fontSize="small" />
                  <Typography variant="body2">{t('theme_mode_light')}</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="system">
                <Stack direction="row" spacing={1} alignItems="center">
                  <SettingsBrightnessIcon fontSize="small" />
                  <Typography variant="body2">{t('theme_mode_system')}</Typography>
                </Stack>
              </ToggleButton>
              <ToggleButton value="dark">
                <Stack direction="row" spacing={1} alignItems="center">
                  <DarkModeIcon fontSize="small" />
                  <Typography variant="body2">{t('theme_mode_dark')}</Typography>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
