import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
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
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
}));

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

        <Box className="event--tablist">
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
            className="event__tabsname"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Sắp diễn ra" />
            <Tab label="Đã kết thúc" />
            <Tab label="Đã kết thúc 1" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography>
              <Box className="event event__blog">
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                  <CardContent className="event__title">
                    <Typography gutterBottom variant="h3" component="Box">
                      International Band Mu...
                    </Typography>
                  </CardContent>
                  <Box className="event__location">
                    <LocationOnIcon></LocationOnIcon>
                    <em>36 Guild Street London, UK </em>
                  </Box>
                  <Box className="event__numbericonbox">
                    <Box className="event__number">
                      <span>+20 Going</span>
                    </Box>
                    <Box className="event__inconbox">
                      <BookmarkIcon></BookmarkIcon>
                    </Box>
                  </Box>
                </Card>
                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                  <CardContent className="event__title">
                    <Typography gutterBottom variant="h3" component="Box">
                      International Band Mu...
                    </Typography>
                  </CardContent>
                  <Box className="event__location">
                    <LocationOnIcon></LocationOnIcon>
                    <em>36 Guild Street London, UK </em>
                  </Box>
                  <Box className="event__numbericonbox">
                    <Box className="event__number">
                      <span>+20 Going</span>
                    </Box>
                    <Box className="event__inconbox">
                      <BookmarkIcon></BookmarkIcon>
                    </Box>
                  </Box>
                </Card>

                <Card className="event__card">
                  <CardMedia
                    className="event__img"
                    sx={{ height: 231 }}
                    image="img/event1.png"
                    title="green iguana"
                  />
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM</Box>
                  <CardContent className="event__title">
                    <Typography gutterBottom variant="h3" component="Box">
                      International Band Mu...
                    </Typography>
                  </CardContent>
                  <Box className="event__location">
                    <LocationOnIcon></LocationOnIcon>
                    <em>36 Guild Street London, UK </em>
                  </Box>
                  <Box className="event__numbericonbox">
                    <Box className="event__number">
                      <span>+20 Going</span>
                    </Box>
                    <Box className="event__inconbox">
                      <BookmarkIcon></BookmarkIcon>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Typography>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Typography>
          </TabPanel>

          <TabPanel className="event__vertical" value={value} index={2}>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
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
                    <Box className="event__datetext">
                      {" "}
                      Sat, Apr 24 • 1:30 PM{" "}
                      <Box className="event__inconbox">
                        <BookmarkIcon></BookmarkIcon>
                      </Box>
                    </Box>
                    <CardContent className="event__title">
                      <Typography gutterBottom variant="h3" component="Box">
                        Jo Malone London’s Mother’s Day Presents
                      </Typography>
                    </CardContent>
                    <Box className="event__location">
                      <LocationOnIcon></LocationOnIcon>
                      <em>36 Guild Street London, UK </em>
                    </Box>
                  </Box>
                </Card>
              </Box>
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
