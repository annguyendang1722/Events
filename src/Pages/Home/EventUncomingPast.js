import React, { useState } from "react";
import { Container } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WestIcon from "@mui/icons-material/West";


export default function EventUncomingPast() {
  //   const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Container maxWidth="sm">
      
      <Box className="event--tablist">
        <Box className="layouttextbutton">
          <Box className="layouttextbutton__text">
            <WestIcon></WestIcon>Sự kiện
          </Box>
          <Box className="layouttextbutton__button">
            <Link href="/">
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
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
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
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
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
                    <ImageList
                      className="event__listimg"
                      sx={{ width: 100 }}
                      cols={3}
                      rowHeight={32}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
                  <Box className="event__datetext"> Sat, Apr 24 • 1:30 PM <Box className="event__inconbox">
                    <BookmarkIcon></BookmarkIcon>
                  </Box></Box>
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
