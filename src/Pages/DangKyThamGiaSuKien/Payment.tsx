import React, { useState } from "react";
import { Container } from "@mui/material";

import Box from "@mui/material/Box";

import WestIcon from "@mui/icons-material/West";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";

const Payment = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box className="payment">
        <Dialog className="payment__dialog" open={open} onClose={handleClose}>
          <DialogContent className="payment__dialogform">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Card Number
                  </InputLabel>
                  <Input id="input-with-icon-adornment" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Expires End
                  </InputLabel>
                  <Input id="input-with-icon-adornment" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    CVV
                  </InputLabel>
                  <Input id="input-with-icon-adornment" />
                </FormControl>
              </Grid>
            </Grid>

            <Box className="payment__save">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M18.203 8.10498L11.328 14.98L8.203 11.855"
                  stroke="#5669FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Save as a primary card
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              className="payment__button"
              onClick={handleClose}
              endIcon={<ArrowForwardTwoToneIcon />}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>

        <Box className="layouttextbutton">
          <Box className="layouttextbutton__text">
            <WestIcon></WestIcon>Thanh toán
          </Box>
        </Box>
        <Box className="payment__title">
          Phương thức thanh toán{" "}
          <Button
            className="payment__selectaddress"
            variant="text"
            onClick={handleClickOpen}
          >
            Add New Card
          </Button>
        </Box>
        <List className="payment__list">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Apple Pay"
              name="radio-buttons-group"
            >
              <ListItem className="payment__item">
                <ListItemAvatar>
                  <Avatar src="img/apple.png" />
                </ListItemAvatar>
                <ListItemText primary="Apple Pay" />
                <FormControlLabel
                  className="payment__radio"
                  value="Apple Pay"
                  control={<Radio />}
                  label=""
                />
              </ListItem>

              <ListItem className="payment__item">
                <ListItemAvatar>
                  <Avatar src="img/paypal.png" />
                </ListItemAvatar>
                <ListItemText primary="PayPal" />
                <FormControlLabel
                  className="payment__radio"
                  value="PayPal"
                  control={<Radio />}
                  label=""
                />
              </ListItem>

              <ListItem className="payment__item">
                <ListItemAvatar>
                  <Avatar src="img/google.png" />
                </ListItemAvatar>
                <ListItemText primary="Google Pay" />
                <FormControlLabel
                  className="payment__radio"
                  value="Google Pay"
                  control={<Radio />}
                  label=""
                />
              </ListItem>
            </RadioGroup>
          </FormControl>

          <FormGroup className="payment__creditcard">
            <FormControlLabel
              className="payment__checkbox"
              control={<Checkbox />}
              label="Pay by Debit/ Credit Card"
            />
          </FormGroup>

          <FormControl>
            <ListItem className="payment__item payment__itemcard">
              <ListItemAvatar>
                <Avatar src="img/image111.png" />
                <Avatar src="img/four.png" />
                <Avatar src="img/four.png" />
                <Avatar src="img/four.png" />
              </ListItemAvatar>
              <ListItemText
                className="payment__creditcardtext"
                primary="0231"
              />
            </ListItem>
          </FormControl>
        </List>

        <Box className="confirm__vouchertitle">Thêm Voucher</Box>

        <form className="payment__voucher">
          <TextField
            id="margin-normal"
            name="name"
            placeholder="Voucher Code"
          />

          <Button type="submit" variant="contained">
            Áp dụng
          </Button>
        </form>

        <FormControl className="selectinterest__submit">
          <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
            Kiểm tra
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
export default Payment;
