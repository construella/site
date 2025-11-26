import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Tab,
  Tabs,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Link,
  Typography,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "../../utils/cookie";
import CloseIcon from "@mui/icons-material/Close";
import { CookieIcon } from "./cookie.svg";
// import cookieImg from "../../assets/img/fa/duotone/cookie-bite-duotone-light-full.svg";

interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  type: string;
}

const necessaryCookie: CookieRow[] = [
  {
    name: "cookie_consent",
    provider: "www.costorado.com",
    purpose: "cookie_consent",
    expiry: "cookie_expiry_1year",
    type: "cookie_type_http",
  },
  // {
  //   name: "csrf",
  //   provider: "www.costorado.com",
  //   purpose: "cookie_csrf",
  //   expiry: "cookie_expiry_session",
  //   type: "cookie_type_http",
  // },
];
const prefCookie: CookieRow[] = [
  {
    name: "ui_settings",
    provider: "www.costorado.com",
    purpose: "cookie_ui_settings",
    expiry: "cookie_expiry_1year",
    type: "cookie_type_http",
  },
];

interface CookieConsentProps {
  open: boolean;
  onClose: () => void;
}

export default function CookieConsent({ open, onClose }: CookieConsentProps) {
  const { t } = useTranslation();
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [allowPref, setAllowPref] = React.useState(() => {
    const cookie = Cookies.get("cookie_consent");
    if (cookie) {
      try {
        const parsed = JSON.parse(cookie);
        if (typeof parsed === "object" && parsed !== null && "preferences" in parsed) {
          return parsed.preferences;
        }
      } catch {}
    }
    return true;
  });
  const theme = useTheme();

  function accept() {
    const consent = { necessary: true, preferences: allowPref };
    Cookies.set("cookie_consent", JSON.stringify(consent), { expires: 365, secure: true, sameSite: 'Lax' });
    if (!allowPref) {
      Cookies.remove("ui_settings");
    }
    onClose();
  }

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "background.paper",
        boxShadow: 6,
        borderRadius: 3,
        width: { xs: "calc(100% - 48px)", sm: 600, md: 800 },
        zIndex: 1300,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <IconButton
        onClick={onClose}
        size="small"
        sx={{ position: "absolute", top: 12, right: 12, color: "text.secondary" }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          minHeight: 102,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 1, mx: 2 }}>
          {/* <Box component="img" src={cookieImg} width={40} /> */}
          <CookieIcon width={40} height={40}
                        primaryColor={theme.palette.text.secondary}
              secondaryColor={theme.palette.text.disabled}
          />
          <Box sx={{ flex: 1, textAlign: "left", display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" component="span" sx={{ mr: 1 }}>
              {t("cookie_disclaimer")}
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => setDetailsOpen(!detailsOpen)}
              sx={{ textDecoration: "none", fontWeight: "bold" }}
            >
              {t("cookie_details")}
            </Link>
          </Box>
          <Button
            onClick={accept}
            variant="contained"
            size="medium"
            sx={{ px: 3 }}
          >
            {t("cookie_ok")}
          </Button>
        </Box>

        <Collapse in={detailsOpen}>
          <Box sx={{ mt: 2, width: "100%" }}>
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              variant="fullWidth"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                minHeight: 36,
                "& .MuiTab-root": { minHeight: 36, fontSize: "0.8rem", p: 1 },
              }}
            >
              <Tab
                label={`${t("cookie_necessary")} (${necessaryCookie.length})`}
              />
              <Tab
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Checkbox
                      size="small"
                      checked={allowPref}
                      onChange={(e) => setAllowPref(e.target.checked)}
                      sx={{ p: 0 }}
                    />
                    {t("cookie_preferences")}
                  </Box>
                }
              />
            </Tabs>
            <Box sx={{ mt: 1, maxHeight: 200, overflow: "auto" }}>
              <CookieTable rows={tab === 0 ? necessaryCookie : prefCookie} />
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

function CookieTable({ rows }: { rows: CookieRow[] }) {
  const { t } = useTranslation();
  return (
    <Table
      size="small"
      sx={{ "& .MuiTableCell-root": { fontSize: "0.75rem", px: 1, py: 0.5 } }}
    >
      <TableHead>
        <TableRow>
          <TableCell>{t("cookie_col_name")}</TableCell>
          <TableCell>{t("cookie_col_provider")}</TableCell>
          <TableCell>{t("cookie_col_purpose")}</TableCell>
          <TableCell>{t("cookie_col_expiry")}</TableCell>
          <TableCell>{t("cookie_col_type")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.name}>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.provider}</TableCell>
            <TableCell>{t(r.purpose)}</TableCell>
            <TableCell>{t(r.expiry)}</TableCell>
            <TableCell>{t(r.type)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
