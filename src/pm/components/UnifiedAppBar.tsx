import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useColorMode } from "../../ColorModeContext";
import { costoradoTheme } from "../../theme";
import Ribbon from "./Ribbon";

// === Styled Components ===

const TopBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "colorScheme",
})<{ colorScheme: string }>(({ theme }) => {
  const isDark = theme.palette.mode === "dark";
  let bgColor = theme.palette.primary.main;

  if (isDark) {
    bgColor = costoradoTheme.palette.primary.main;
  }

  return `
      background: ${alpha(bgColor, 0.95)};
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
      width: 100%;
      font-family: 'Sen', sans-serif;
    `;
});

const NavLink = styled(Button)(
  ({ theme }) => `
    text-transform: none;
    font-weight: 500;
    font-size: 0.9rem;
    padding-inline: ${theme.spacing(2)};
    color: ${theme.palette.grey[100]};
    font-family: 'Sen', sans-serif;
    &:hover {
      background: rgba(255, 255, 255, 0.06);
    }
  `
);

const interpolateColor = (color1: string, color2: string, factor: number) => {
  const result = color1
    .slice(1)
    .match(/.{2}/g)!
    .map((hex, i) => {
      const start = parseInt(hex, 16);
      const end = parseInt(color2.slice(1).match(/.{2}/g)![i], 16);
      const val = Math.round(start + (end - start) * factor);
      return val.toString(16).padStart(2, "0");
    });
  return `#${result.join("")}`;
};

const Parallelogram = ({ color }: { color: string }) => (
  <Box
    sx={{
      width: "8px",
      height: "10px",
      transform: "skew(-30deg)",
      background: color,
      marginLeft: "3px",
    }}
  />
);

// === Component ===

interface UnifiedAppBarProps {
  variant: "portal" | "pm";
}

export const UnifiedAppBar: React.FC<UnifiedAppBarProps> = ({ variant }) => {
  const { layoutWidth, colorScheme } = useColorMode();
  const { t } = useTranslation();
  const toolbarMaxWidth = layoutWidth === "full" ? "100%" : 1200;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setMobileMoreAnchorEl(event.currentTarget);

  const portalLinks = [
    t("nav_ecosystem"),
    t("nav_tools"),
    t("nav_standards"),
    t("nav_knowledge"),
    t("nav_labs"),
    t("nav_docs"),
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <TopBar position="sticky" elevation={0} colorScheme={colorScheme}>
        <Toolbar
          sx={{
            maxWidth: toolbarMaxWidth,
            margin: "0 auto",
            width: "100%",
            px: layoutWidth === "full" ? 4 : 2,
          }}
        >
          {/* Brand */}
          <MuiLink
            href="/"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                  letterSpacing: "5px",
                  fontFamily: "'Sen', sans-serif",
                  fontWeight: 700,
                }}
              >
                COSTORADO
              </Box>
              <Box sx={{ display: "flex", marginRight: "12px" }}>
                {[...Array(8)].map((_, i) => {
                  // const color = interpolateColor('#C89B3C', '#E7C267', i / 7);
                  const color = interpolateColor("#6c6b52", "#E7C267", i / 7);
                  return <Parallelogram key={i} color={color} />;
                })}
              </Box>
            </Box>
          </MuiLink>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: { xs: 16, md: 12 }, // add right margin on small screens to avoid overlapping the ribbon

              alignItems: "center",
              gap: 1,
            }}
          >
            {variant === "portal" ? (
              portalLinks.map((link) => <NavLink key={link}>{link}</NavLink>)
            ) : (
              <>
                <NavLink onClick={() => scrollToId("home")}>
                  {t("home_menu")}
                </NavLink>
                <NavLink onClick={() => scrollToId("features")}>
                  {t("features_menu")}
                </NavLink>
                <NavLink onClick={() => scrollToId("contact")}>
                  {t("contact_menu")}
                </NavLink>
              </>
            )}

            {/* Sign In Button (Common or PM only? Layout.tsx had it) */}
            <Button
              href="https://app.costorado.com"
              variant="outlined"
              sx={{
                color: "inherit",
                // borderColor: "rgba(255,255,255,0.5)",
                ml: 2,
                fontFamily: "'Sen', sans-serif",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  // borderColor: "white",
                },
              }}
            >
              {t("nav_signin")}
            </Button>
          </Box>

          {/* Mobile Nav */}
          <Box sx={{ 
            display: { xs: "block", md: "none" },               
            mr: { xs: 16, md: 0 }, // add right margin on small screens to avoid overlapping the ribbon
           }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}
            >
              <MenuItem
                onClick={() => {
                  scrollToId("home");
                  handleMobileMenuClose();
                }}
              >
                {t("home_menu")}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  scrollToId("features");
                  handleMobileMenuClose();
                }}
              >
                {t("features_menu")}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  scrollToId("contact");
                  handleMobileMenuClose();
                }}
              >
                {t("contact_menu")}
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>{t("nav_signin")}</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {variant === "pm" && <Ribbon />}
      </TopBar>
    </>
  );
};
