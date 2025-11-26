import { styled, alpha } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

export const Root = styled("div")(
  ({ theme }) => `
    min-height: 100vh;
    background: ${
      theme.palette.mode === "dark"
        ? `radial-gradient(circle at top left, ${alpha(
            theme.palette.primary.dark,
            0.4
          )} 0, ${theme.palette.background.default} 45%, #000000 100%)`
        : `radial-gradient(circle at top left, ${alpha(
            theme.palette.primary.light,
            0.2
          )} 0, ${theme.palette.background.default} 45%, ${alpha(
            theme.palette.background.paper,
            0.5
          )} 100%)`
    };
    color: ${theme.palette.text.primary};
  `
);

export const EcosystemCard = styled(Card)(
  ({ theme }) => `
    height: 100%;
    border-radius: 18px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? alpha(theme.palette.primary.light, 0.1)
        : "rgba(12, 22, 33, 0.06)"
    };
    box-shadow: ${
      theme.palette.mode === "dark"
        ? "0 18px 55px rgba(0, 0, 0, 0.6)"
        : "0 18px 55px rgba(8, 17, 26, 0.08)"
    };
    background-color: ${theme.palette.background.paper};
  `
);

export const Section = styled("section")(
  ({ theme }) => `
    padding: ${theme.spacing(6)} 0;
    scroll-margin-top: 80px;
    min-height: 100vh;
    background-color: ${
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : theme.palette.background.default
    };
  `
);

export const SectionHeader = styled("div")(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${theme.spacing(3)};
    gap: ${theme.spacing(2)};
    flex-wrap: wrap;
  `
);

export const SectionTitle = styled(Typography)(
  ({ theme }) => `
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${theme.palette.text.secondary};
  `
);

export const SectionHeadline = styled(Typography)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: ${theme.spacing(2)};
`);

export const GoldAccent = styled("span")`
  background: linear-gradient(135deg, #c89b3c, #e7c267);
  -webkit-background-clip: text;
  color: transparent;
`;

export const HeroGrid = styled("div")(
  ({ theme }) => `
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
    gap: ${theme.spacing(8)};
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `
);

export const HeroTitle = styled("h1")(
  ({ theme }) => `
    margin: 0 0 ${theme.spacing(2)};
    font-size: clamp(2.4rem, 3.1vw, 3.3rem);
    line-height: 1.1;
    letter-spacing: 0.03em;
  `
);

export const HeroSubtitle = styled("p")(
  ({ theme }) => `
    margin: ${theme.spacing(5)} 0 ${theme.spacing(3)};
    font-size: 1.3rem;
    max-width: 40rem;
    color: ${theme.palette.text.secondary};
  `
);

export const ToolGrid = styled("div")(
  ({ theme }) => `
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${theme.spacing(2.5)};

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 780px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `
);

export const FooterStyled = styled("footer")(
  ({ theme }) => `
    padding: ${theme.spacing(4)} 0 ${theme.spacing(5)};
    border-top: 1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(15, 83, 87, 0.12)"
    };
    margin-top: ${theme.spacing(4)};
  `
);

export const FooterLattice = styled("footer")(
  ({ theme }) => `
    padding: ${theme.spacing(4)} 0 ${theme.spacing(5)};
    border-top: 1px solid ${
      theme.palette.mode === "dark"
        ? alpha(theme.palette.primary.light, 0.15)
        : alpha(theme.palette.primary.dark, 0.12)
    };

    background: ${
      theme.palette.mode === "dark"
        ? `radial-gradient(circle at top left,
            ${alpha(theme.palette.primary.dark, 0.5)} 0,
            ${theme.palette.background.default} 45%,
            ${theme.palette.background.paper} 100%)`
        : `radial-gradient(circle at top left,
            ${alpha(theme.palette.primary.light, 0.25)} 0,
            ${theme.palette.background.default} 45%,
            ${alpha(theme.palette.background.paper, 0.6)} 100%)`
    };
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: ${theme.palette.mode === "dark" ? 0.15 : 0.1};
      background-image:
        linear-gradient(${alpha(theme.palette.text.primary, 0.25)} 1px, transparent 1px),
        linear-gradient(90deg, ${alpha(theme.palette.text.primary, 0.25)} 1px, transparent 1px);
      background-size: 20px 20px;
    }
  `
);
