import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

const CovidDeclaration = () => {
  return (
    <Container className="confirm coviddeclaration" maxWidth="sm">
      <Box className="confirm__inner">
        <Box className="confirm__title coviddeclaration__toptitle">Giữ an toàn và được an toàn</Box>
        <Box className="addevent__changeimg">
          <img src="img/img5.png" />
        </Box>


        <Box className="confirm__voucher">
          <Box className="addevent__title coviddeclaration__title">
            <Typography variant="h3" component="h3">
              Covid- 19 Self Health Declaration
            </Typography>
            <Typography variant="p" component="p">
              Enjoy your favorite dishe and a lovely your friends and family and
              have a great time. Food from local food trucks..
            </Typography>
          </Box>

          <List className="addevent__listitem coviddeclaration__listitem">
            <ListItem className="addevent__item ">
              <ListItemText primary="Enjoy your favorite dishe and a lovely your friends and family and have a" />
            </ListItem>

            <ListItem className="addevent__item">
              <ListItemText primary="I have not traveled interationaly in the last 14 days" />
            </ListItem>
          </List>

          <Box className="coviddeclaration__confirm">
            <img src="img/xacnhan.png" />
            <Typography variant="span" component="span">
            Tôi xác nhận bản thân khoẻ mạnh</Typography>
          </Box>

        </Box>

        <FormControl className="selectinterest__submit">
          <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
            Continue
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
export default CovidDeclaration;