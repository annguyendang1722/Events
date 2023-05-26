import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import WestIcon from "@mui/icons-material/West";
import Link from "@mui/material/Link";

const Ticket = () => {
  return (
    <Container className="addevent ticket" maxWidth="sm">
      <Box className="layouttextbutton">
        <Box className="layouttextbutton__text">
          <WestIcon></WestIcon>Vé tham dự
        </Box>
        <Box className="layouttextbutton__button">
          <Link href="#">
            <MoreVertIcon></MoreVertIcon>
          </Link>
        </Box>
      </Box>

      <Box className="ticket__inner">
        <Box className="addevent__changeimg">
          <img src="img/banner1.png" />
        </Box>
        <Box className="addevent__title">
          <Typography variant="h2" component="h2">
            International Band Music Concert
          </Typography>
        </Box>
        <List className="addevent__listitem">
          <ListItem className="addevent__item">
            <ListItemText primary="Tên" secondary="Jisan X Rahman" />
          </ListItem>
          <ListItem className="addevent__item">
            <ListItemText primary="Ngày" secondary="14 December, 2021" />

            <Box className="addevent__itemright">
              <Box className="addevent__itemtime">Thời gian</Box>
              <Box className="addevent__itemtimedate">07:30 PM</Box>
            </Box>
          </ListItem>
          <ListItem className="addevent__item">
            <ListItemText
              primary="Địa điểm"
              secondary="Gala Convention Center"
            />

     
          </ListItem>
         
        </List>
        <Box className="ticket__localtion">
        36 Guild Street London, UK
        </Box>
        <Box className="checkqr ">
          <img src="img/image1.png" />
        </Box>
      </Box>
    </Container>
  );
};
export default Ticket;
