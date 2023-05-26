import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";


import WestIcon from "@mui/icons-material/West";

import CloseIcon from '@mui/icons-material/Close';


import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";



const Confirm = () => {
  return (
    <Container className="confirm" maxWidth="sm">
      <Box className="layouttextbutton">
        <Box className="layouttextbutton__text">
          <WestIcon></WestIcon>Thanh toán 
        </Box>
     
      </Box>

      <Box className="confirm__inner">
      <Box className="confirm__title">
      Phương thức thanh toán
      </Box>
        <Box className="addevent__changeimg">
          <img src="img/imghf.png" />
        </Box>
        <Box className="confirm__voucher">
          <Box className="confirm__vouchertitle">
            Voucher
          </Box>
        <List className="addevent__listitem confirm__listitem">
          <ListItem className="addevent__item confirm__item">   

            <ListItemText primary="Mã Voucher áp dụng" secondary={ <React.Fragment> EventHub21 <Typography  component="span">   25% off</Typography> </React.Fragment>  } />
          </ListItem>
          
        <CloseIcon></CloseIcon>
         
        </List>
        </Box>

      <FormControl className="selectinterest__submit">
        <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
             Xác nhận
        </Button>
      </FormControl>
       
      </Box>







    </Container>
  );
};
export default Confirm;
