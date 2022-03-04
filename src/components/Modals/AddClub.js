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

const currencies = [
  {
    value: "Horror",
    label: "Horror",
  },
  {
    value: "Thriller",
    label: "Thriller",
  },
  {
    value: "Sci-Fi",
    label: "Sci-Fi",
  },
  {
    value: "Romance",
    label: "Romance",
  },
];

const types = [
  {
    value: "Free",
    label: "Free",
  },
  {
    value: "Paid",
    label: "Paid",
  },
];

export default function AddClub({ open, setOpen }) {
  const handleClose = () => {
    console.log(currency, type, img, name, img);
    setOpen(false);
  };

  const [currency, setCurrency] = React.useState("Thriller");
  const [type, setType] = React.useState("Free");
  const [name, setName] = React.useState("Free");
  const [desc, setDesc] = React.useState("Free");
  const [img, setImg] = React.useState("Free");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            fullWidth
            label="Club Name"
            id="fullWidth"
            onChange={(e) => setName(e.target.value)}
          />
          <Box height={10} />
          <TextField
            fullWidth
            label="Club Description"
            id="fullWidth"
            onChange={(e) => setDesc(e.target.value)}
          />
          <Box height={10} />
          <TextField
            fullWidth
            label="Club Image URL"
            id="fullWidth"
            onChange={(e) => setImg(e.target.value)}
          />
          <Box height={15} />
          <TextField
            id="outlined-select-currency"
            select
            label="Club Category"
            value={currency}
            onChange={handleChange}
            helperText="Please select your club type"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box height={15} />
          <TextField
            id="outlined-select-currency"
            select
            label="Club Type"
            value={type}
            onChange={handleTypeChange}
            helperText="Please select your club category"
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box height={15} />
          <Button onClick={handleClose} fullWidth variant="contained">
            Create a Book Club
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
