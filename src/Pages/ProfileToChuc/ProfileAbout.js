import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Tabs, Tab } from "@mui/material";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import Rating from "@mui/material/Rating";

export default function ProfileAbout() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Box className="profileedit__avatar">
          <Badge className="login__avatar">
            <Avatar
              className="profileedit__avatarmain"
              alt="Travis Howard"
              src="/img/avavtar.png"
            />
            <Typography variant="h2" gutterBottom>
              David Silbia
            </Typography>
          </Badge>
        </Box>

        <Box className="profileedit__numberperson">
          <Box className="profileedit__numberpersonitem">
            <Box className="profileedit__number">350</Box>
            <Box className="profileedit__person">Đang theo dõi</Box>
          </Box>
          <Box className="profileedit__numberpersonitem">
            <Box className="profileedit__number">346</Box>
            <Box className="profileedit__person">Người theo dõi</Box>
          </Box>
        </Box>

        <Stack className="profileedit__listbutton" direction="row" spacing={2}>
          <Button variant="contained" startIcon={<PersonAddIcon />}>
            Theo dõi
          </Button>
          <Button variant="outlined" startIcon={<ChatBubbleOutlineIcon />}>
            Nhắn tin
          </Button>
        </Stack>

        <Box className="event--tablist event--tabprofile">
          <Box className="layouttextbutton">
            <Box className="layouttextbutton__text">
              <WestIcon></WestIcon>Sự kiện
            </Box>
            <Box className="layouttextbutton__button">
              <Link href="#">
                <MoreVertIcon></MoreVertIcon>
              </Link>
            </Box>
          </Box>
          <Tabs
            className="event__tabsprofile"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Mô tả" />
            <Tab label="Sự kiện" />
            <Tab label="Đánh giá" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box className="profileedit__aboutus">
              <Box className="profileedit__des">
                Enjoy your favorite dishe and a lovely your friends and family
                and have a great time. Food from local food trucks will be
                available for purchase.
                <Link href="#">Read More</Link>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel className="event__vertical" value={value} index={1}>
            <Typography>
              <Box className="event event__blog">
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />

                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />

                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__content">
                    <Box className="event__datetext">Sat, Apr 24 • 1:30 PM</Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Box>
            </Typography>
          </TabPanel>

          <TabPanel className="event__vertical" value={value} index={2}>
            <Typography>
              <List className="addevent__listitem addevent__listitem--details">
                <ListItem className="addevent__item">
                  <ListItemAvatar>
                    <img src="img/avatar.png" />
                  </ListItemAvatar>
                  <Box>
                    <Typography variant="h3" gutterBottom>
                      Rocks Velkeinjen
                    </Typography>

                    <Rating name="customized-10" defaultValue={2} max={5} />
                    <Typography variant="p" gutterBottom>
                      Cinemas is the ultimate experience to see new movies in
                      Gold Class or Vmax. Find a cinema near you.
                    </Typography>
                  </Box>

                  <Box className="follow" variant="contained">
                    Theo dõi
                  </Box>
                </ListItem>
                <ListItem className="addevent__item">
                  <ListItemAvatar>
                    <img src="img/avatar.png" />
                  </ListItemAvatar>
                  <Box>
                    <Typography variant="h3" gutterBottom>
                      Rocks Velkeinjen
                    </Typography>

                    <Rating name="customized-10" defaultValue={2} max={5} />
                    <Typography variant="p" gutterBottom>
                      Cinemas is the ultimate experience to see new movies in
                      Gold Class or Vmax. Find a cinema near you.
                    </Typography>
                  </Box>

                  <Box className="follow" variant="contained">
                    Theo dõi
                  </Box>
                </ListItem>
               
              </List>
            </Typography>
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography component="Box">{children}</Typography>}
    </Box>
  );
}
