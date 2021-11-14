import Dialog from "@mui/material/Dialog";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/lab/LoadingButton";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "../icons/CloseIcon";
import { DialogActions } from "@mui/material";
import { useState } from "react";

const AddSongPreviewDialog = ({
  children,
  open = false,
  onClose = (f) => f,
  onAddSong = (f) => f,
}) => {
  const [loading, setLoading] = useState(false);

  const onAddSongButtonClick = () => {
    setLoading(true);

    onAddSong()
      .then(() => {
        setLoading(false);
        onClose();
      })
      .catch(console.error);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <CardHeader
        sx={{ borderBottom: 2, borderColor: "divider" }}
        title="Edit Song Preview"
        action={
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
        titleTypographyProps={{
          sx: {
            fontSize: "1rem",
            fontWeight: 700,
          },
        }}
      />

      <DialogContent>{children}</DialogContent>

      <DialogActions sx={{ p: (theme) => theme.spacing(1, 3, 3, 3) }}>
        <Button
          loading={loading}
          disableElevation
          variant="contained"
          fullWidth
          onClick={onAddSongButtonClick}
        >
          Add song
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSongPreviewDialog;
