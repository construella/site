import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ClipboardListIcon } from "./ClipboardListIcon";

import { PlatformIllustration } from "./PlatformIllustration";
import { AboutBgShape } from "./AboutBgShape";
import { HeroSubtitle, Section } from "./styles";
import drawingImg from "../../assets/img/002-drawing.svg";
import { useState } from "react";
import type { SectionProps } from "./PegBoardSection";
import EarlyAccessModal from "./EarlyAccessModal";

export default function ContactSection(props: SectionProps) {
  return (
    <Section
      id={props.id}
      sx={{
        py: 8,
        minHeight: "100vh",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "20px",
          bottom: 0,
          left: 0,
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHZpZXdCb3g9IjAgMCA1IDUiPjxjaXJjbGUgZmlsbD0iIzAwYWNlNSIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iLjUiLz48L3N2Zz4=)",
          backgroundPosition: "center center",
        },
        ...props.sx,
      }}
    >
      <AboutBgShape
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
          bottom: 0,
          left: 0,
        }}
      />
      {props.children}
    </Section>
  );
}

export function ContactBlock() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1}}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 4,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ClipboardListIcon size={32} />
            {t("pilot_header")}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column"  }}>
                  <Stack
          direction="row"
          spacing={2}
          margin={2}
          sx={{ mb: 3, flexWrap: "wrap", rowGap: 1, position: "relative", zIndex: 1 }}
        >
          <HeroSubtitle>
            {t("pilot_intro")}
          </HeroSubtitle>

          <Chip
            label={t("pilot_expect_rough_edges")}
            variant="outlined"
            size="small"
            color="primary"
          />
        </Stack>
        <Box sx={{ mr: "20%", alignSelf: "end" }}>
          <EarlyAccessModal />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <PlatformIllustration
            style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
          />
        </Grid>
      </Grid>

      <Grid
        size={{ xs: 12 }}
        sx={{ textAlign: "center", mt: 4, zIndex: 1, position: "relative" }}
      >
        <Box
          component="img"
          src={drawingImg}
          alt="drawing"
          sx={{ width: 64, height: 64, mb: 2 }}
        />
        <Box
          component="address"
          sx={{
            fontStyle: "normal",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Link
            href="mailto:pilot@costorado.com"
            color="inherit"
            underline="hover"
            sx={{ fontSize: "1.1rem" }}
          >
            pilot@costorado.com
          </Link>
          <CopyEmailButton />
        </Box>
      </Grid>
    </Container>
  );
}

export function CopyEmailButton() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  return (
    <Button
      size="small"
      variant="text"
      onClick={() => {
        navigator.clipboard.writeText("pilot@costorado.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      sx={{
        minWidth: "auto",
        px: 1,
        py: 0.5,
        fontSize: "0.8rem",
        textTransform: "none",
      }}
    >
      {copied ? t("copy_email_done") : t("copy_email")}
    </Button>
  );
}
