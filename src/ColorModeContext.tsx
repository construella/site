import React, { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import Cookies from './utils/cookie';
import { 
  costoradoTheme, 
  costoradoDarkPalette, 
  costoradoBluePalette,
  costoradoBlueDarkPalette
} from './theme';

type ColorMode = 'light' | 'dark' | 'system';
type ColorScheme = 'teal' | 'blue';
type LayoutWidth = 'full' | 'boxed';

interface ColorModeContextType {
  mode: ColorMode;
  setMode: (mode: ColorMode) => void;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  layoutWidth: LayoutWidth;
  setLayoutWidth: (width: LayoutWidth) => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'system',
  setMode: () => {},
  colorScheme: 'teal',
  setColorScheme: () => {},
  layoutWidth: 'boxed',
  setLayoutWidth: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }: { children: React.ReactNode }) => {
  const getUiSettings = () => {
    const cookie = Cookies.get('ui_settings');
    try {
      return cookie ? JSON.parse(cookie) : {};
    } catch (e) {
      return {};
    }
  };

  const setUiSettings = (newSettings: any) => {
    const cookie = Cookies.get('cookie_consent');
    let consent = { preferences: false };
    try { consent = cookie ? JSON.parse(cookie) : {}; } catch (e) {}

    if (consent.preferences) {
      const current = getUiSettings();
      Cookies.set('ui_settings', JSON.stringify({ ...current, ...newSettings }), { expires: 365, secure: true, sameSite: 'Lax' });
    }
  };

  const [mode, setMode] = useState<ColorMode>(() => {
    const settings = getUiSettings();
    return (settings.color_mode as ColorMode) || 'system';
  });

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const settings = getUiSettings();
    return (settings.color_scheme as ColorScheme) || 'teal';
  });

  const [layoutWidth, setLayoutWidth] = useState<LayoutWidth>(() => {
    const settings = getUiSettings();
    return (settings.layout_width as LayoutWidth) || 'boxed';
  });

  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setUiSettings({ color_mode: mode });
  }, [mode]);

  useEffect(() => {
    setUiSettings({ color_scheme: colorScheme });
  }, [colorScheme]);

  useEffect(() => {
    setUiSettings({ layout_width: layoutWidth });
  }, [layoutWidth]);

  const activeMode = useMemo(() => {
    if (mode === 'system') {
      return systemPrefersDark ? 'dark' : 'light';
    }
    return mode;
  }, [mode, systemPrefersDark]);

  const theme = useMemo(() => {
    let paletteOverrides = {};

    switch (colorScheme) {
      case 'blue':
        paletteOverrides = activeMode === 'light' ? costoradoBluePalette : costoradoBlueDarkPalette;
        break;
      case 'teal':
      default:
        paletteOverrides = activeMode === 'dark' ? costoradoDarkPalette : {};
        break;
    }

    return createTheme(costoradoTheme, {
      palette: {
        mode: activeMode,
        ...paletteOverrides,
      },
    });
  }, [activeMode, colorScheme]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode, colorScheme, setColorScheme, layoutWidth, setLayoutWidth }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
