import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const SelectAddress = () => {
  const [open, setOpen] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="header__selectaddress" variant="text" endIcon={<ArrowDropDownIcon />} onClick={handleClickOpen}>
          <span>Địa điểm hiện tại</span>
      </Button>
      <Box className="header__address">Hà Đông, Hà Nội</Box>
      <Dialog className="header__dialog" open={open} onClose={handleClose}>
          <img src="img/address.png"/>
        <DialogTitle className="header__dialogtitle">Dịch vụ định vị</DialogTitle>
        <DialogContent>
          <DialogContentText className="header__dialogcontent">
          Vui lòng đặt vị trí hiện tại của bạn để bắt đầu khám phá các sự kiện xung quanh bạn
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button className="header__button" onClick={handleClose}>Bật ngay</Button>
       
        </DialogActions>
      </Dialog>
    </>

    
   
  );
};

export default SelectAddress;

