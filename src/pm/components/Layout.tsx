import { type ReactNode, useState, useEffect } from "react";
import {
  Box,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "../../utils/cookie";
import LanguageSelect from "./LanguageSelect";
import { UnifiedAppBar } from "./UnifiedAppBar";
import { FooterLattice } from "./styles";
import { useColorMode } from "../../ColorModeContext";
import { CookieIcon } from "./cookie.svg";
import CookieConsent from "./CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const { layoutWidth } = useColorMode();
  const containerMaxWidth = layoutWidth === "full" ? false : "lg";
  const theme = useTheme();
  const [cookieOpen, setCookieOpen] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setCookieOpen(true);
    }
  }, []);

  return (
    <Box sx={{ fontFamily: "Lato" }}>
      <UnifiedAppBar variant="pm" />
      <Box component="main">{children}</Box>
      <FooterLattice sx={{
            px: layoutWidth === "full" ? 6 : 2,
      }}>
        <Container
          maxWidth={containerMaxWidth}
          sx={{
            mx: "auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 4,
          }}
        >
            <Typography variant="caption" color="text.secondary" mr="auto">
              © 2025 Costorado
            </Typography>
          <Link
            component="button"
            onClick={() => setCookieOpen(true)}
            sx={{
              display: "flex",
              outerline: "none",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "text.secondary",
              ml: 4,
              // mb: 1,
              width: 'fit-content',
            }}
          >
            <CookieIcon
              primaryColor={theme.palette.text.secondary}
              secondaryColor={theme.palette.text.disabled}
            />
            <Box sx={{ fontSize: "0.8rem" }}>{t("cookie")}</Box>
          </Link>
          <LanguageSelect sx={{ color: "text.secondary" }} />
        </Container>
      </FooterLattice>
      <CookieConsent open={cookieOpen} onClose={() => setCookieOpen(false)} />
    </Box>
  );
}
