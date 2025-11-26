import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  CardContent,
  Typography,
  Chip,
  Stack,
  LinearProgress,
  Divider,
} from "@mui/material";
import {
  HeroGrid,
  HeroTitle,
  HeroSubtitle,
  GoldAccent,
  EcosystemCard,
} from "./styles";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HeroGrid>
      <Box>
        <HeroTitle>
          {t("hero_title_main")}
          <br />
          <GoldAccent>{t("hero_title_sub")}</GoldAccent>
        </HeroTitle>

        <HeroSubtitle>
          {t("hero_subtitle")}
        </HeroSubtitle>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3, flexWrap: "wrap", rowGap: 1 }}
        >
          <Chip label={t("hero_chip_pm")} variant="outlined" size="small" />
          <Chip label={t("hero_chip_planning")} variant="outlined" size="small" />
          <Chip
            label={t("hero_chip_norms")}
            variant="outlined"
            size="small"
          />
          <Chip
            label={t("hero_chip_procurement")}
            variant="outlined"
            size="small"
          />
          <Chip
            label={t("hero_chip_ai")}
            variant="outlined"
            size="small"
          />
        </Stack>
      </Box>

      {/* Ecosystem snapshot card */}
      <RoadmapCard />
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
        >
        </Typography>
    </HeroGrid>
  );
};

export const RoadmapCard = () => {
  const { t } = useTranslation();
  return (
  <EcosystemCard sx={{height: 'unset'}}>
    <CardContent sx={{ p: 3 }}>
      <Typography
        variant="subtitle2"
        sx={{ mb: 1.5, textTransform: "uppercase", letterSpacing: "0.1em" }}
      >
        {t("roadmap_title")}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {t("roadmap_desc")}
      </Typography>

      <Stack spacing={2}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
            sx={{ mb: 0.5 }}
          >
            <Chip size="small" label={t("roadmap_basic_func")} color="primary" />
            <Typography variant="caption" color="text.secondary">
              {t("roadmap_basic_desc")}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{ height: 4, borderRadius: 2 }}
          />
        </Box>

        <Box>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
            sx={{ mb: 0.5 }}
          >
            <Chip size="small" label={t("roadmap_ai_estimator")} />
            <Typography variant="caption" color="text.secondary">
              {t("roadmap_ai_desc")}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={10}
            sx={{ height: 4, borderRadius: 2 }}
          />
        </Box>

        {/* <Box>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mb: 0.5 }}>
                <Chip size="small" label="Norms Integration" />
                <Typography variant="caption" color="text.secondary">
                    Ongoing process of integrating national and industry norms
                </Typography>
              </Stack>
              <LinearProgress variant="determinate" value={10} sx={{ height: 4, borderRadius: 2 }} />
            </Box> */}

        <Box>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
            sx={{ mb: 0.5 }}
          >
            <Chip size="small" label={t("roadmap_procurement")} />
            <Typography variant="caption" color="text.secondary">
              {t("roadmap_procurement_desc")}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={10}
            sx={{ height: 4, borderRadius: 2 }}
          />
        </Box>

        {/* <Box>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mb: 0.5 }}>
                <Chip size="small" label="Costopedia" />
                <Typography variant="caption" color="text.secondary">
                  Guides • methodologies • examples
                </Typography>
              </Stack>
              <LinearProgress variant="determinate" value={10} sx={{ height: 4, borderRadius: 2 }} />
            </Box> */}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="caption" color="text.secondary">
        {/* Get from concept to a preliminary budget faster than ever before */}
      </Typography>
    </CardContent>
  </EcosystemCard>
);
};
