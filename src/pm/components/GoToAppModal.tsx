import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function GoToAppModal() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = React.useState(5);
  React.useEffect(() => {
    // TODO: fetch current user; if exists open redirect modal
  }, []);
  React.useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setCounter((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [open]);
  React.useEffect(() => {
    if (counter === 0 && open) {
      window.location.href = "/app";
    }
  }, [counter, open]);
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{t("go_to_app")}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: 1 }}>
          {t("redirecting_in")}{" "}
          <Box
            sx={{
              width: 24,
              height: 24,
              border: (theme) => `2px solid ${theme.palette.secondary.main}`,
              borderRadius: "50%",
              textAlign: "center",
            }}
          >
            {counter}
          </Box>{" "}
          {t("seconds")}
        </Box>
        <Button onClick={() => setOpen(false)} sx={{ mt: 2 }}>
          {t("cancel_button")}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
