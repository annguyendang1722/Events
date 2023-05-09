import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const InviteFriend = () => {
  return (
    <Container className="addevent" maxWidth="sm">
      <Box className="layouttextbutton addevent__layouttextbutton">
        <Box className="layouttextbutton__text">Mời bạn bè</Box>
      </Box>
      <Paper className="addevent__formsearch" component="form">
        <Box className="addevent__inputleft">
          <InputBase
            className="addevent__inputsearch"
            placeholder="Tìm kiếm"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Paper>

      <List className="addevent__listitem addevent__listitem--invite">
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Alex Lee" secondary="2k Người theo dõi" />

          <Button
            className="missus"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Đã gửi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Micheal Ulasi" secondary="56 Người theo dõi" />

          <Button className="invite" variant="contained">
            Mời
          </Button>
        </ListItem>



        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Alex Lee" secondary="2k Người theo dõi" />

          <Button
            className="missus"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Đã gửi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Micheal Ulasi" secondary="56 Người theo dõi" />

          <Button className="invite" variant="contained">
            Mời
          </Button>
        </ListItem>




        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Alex Lee" secondary="2k Người theo dõi" />

          <Button
            className="missus"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Đã gửi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Micheal Ulasi" secondary="56 Người theo dõi" />

          <Button className="invite" variant="contained">
            Mời
          </Button>
        </ListItem>




        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Alex Lee" secondary="2k Người theo dõi" />

          <Button
            className="missus"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Đã gửi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Micheal Ulasi" secondary="56 Người theo dõi" />

          <Button className="invite" variant="contained">
            Mời
          </Button>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Alex Lee" secondary="2k Người theo dõi" />

          <Button
            className="missus"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Đã gửi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText primary="Micheal Ulasi" secondary="56 Người theo dõi" />

          <Button className="invite" variant="contained">
            Mời
          </Button>
        </ListItem>



      </List>
    </Container>
  );
};
export default InviteFriend;
