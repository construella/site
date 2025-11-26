import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  CardContent,
  Typography,
  Link as MuiLink,
  Container,
  Grid,
} from "@mui/material";
import {
  SectionHeader,
  SectionTitle,
  SectionHeadline,
  ToolGrid,
  EcosystemCard,
} from "./styles";
import workerImg from "../../assets/img/worker.svg";
import { ShieldCheckIcon } from "./ShieldCheckIcon";
import { PluginIcon } from "./PluginIcon";
import { ClipboardListIcon } from "./ClipboardListIcon";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DinoWorker = (
  <Box
    component="img"
    src={workerImg}
    alt="worker"
    sx={{ maxWidth: "200px", height: "auto" }}
  />
);

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  caption?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
  caption,
}) => (
  <EcosystemCard>
    <CardContent>
      <Typography
        variant="subtitle1"
        sx={{ mb: 0.5, display: "flex", alignItems: "center", gap: 1 }}
      >
        {icon}
        {title}
      </Typography>
      {link && linkText && (
        <MuiLink
          href={link}
          variant="caption"
          color="text.secondary"
          underline="hover"
          sx={{ mb: 1.5, display: "block" }}
        >
          {linkText}
        </MuiLink>
      )}
      <Typography variant="body2" sx={{ mb: 1.5, textIndent: "1em" }}>
        {description}
      </Typography>
      {caption && (
        <Typography variant="caption" color="text.secondary">
          {caption}
        </Typography>
      )}
    </CardContent>
  </EcosystemCard>
);

export const ToolsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <SectionHeader>
            <SectionHeadline>{t("features_headline")}</SectionHeadline>
            <SectionTitle variant="overline"></SectionTitle>
          </SectionHeader>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}
        >
          {DinoWorker}
        </Grid>

        <ToolGrid>
          <ToolCard
            icon={<ClipboardListIcon size={24} />}
            title={t("tools_pm_title")}
            description={t("tools_pm_desc")}
          />

          <ToolCard
            icon={<ViewTimelineIcon sx={{ fontSize: 24 }} />}
            title={t("tools_gantt_title")}
            description={t("tools_gantt_desc")}
          />

          <ToolCard
            icon={<AutoAwesomeIcon sx={{ fontSize: 24 }} />}
            title={t("tools_ai_title")}
            description={t("tools_ai_desc")}
          />

          <ToolCard
            icon={<ShoppingCartIcon sx={{ fontSize: 24 }} />}
            title={t("tools_procurement_title")}
            description={t("tools_procurement_desc")}
          />

          <ToolCard
            icon={<ShieldCheckIcon size={24} />}
            title={t("tools_access_title")}
            description={t("tools_access_desc")}
          />

          <ToolCard
            icon={<PluginIcon size={24} />}
            title={t("tools_customization_title")}
            description={t("tools_customization_desc")}
          />
        </ToolGrid>
      </Grid>
    </Container>
  );
};
