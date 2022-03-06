import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function ViewClub({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [msg, setMsg] = React.useState("");

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            fullWidth
            label="Message"
            id="fullWidth"
            onChange={(e) => setMsg(e.target.value)}
          />
          <Box height={10} />

          <Button onClick={handleClose} fullWidth variant="contained">
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
