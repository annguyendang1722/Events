import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import WestIcon from "@mui/icons-material/West";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

const Notification = () => {
  return (
    <Container className="addevent notification" maxWidth="sm">
      

        <Box className="layouttextbutton">
          <Box className="layouttextbutton__text">
            <WestIcon></WestIcon>Thông báo
          </Box>
          <Box className="layouttextbutton__button">
            <Link href="#">
              <MoreVertIcon></MoreVertIcon>
            </Link>
          </Box>
        </Box>



      <List className="addevent__listitem addevent__notification  addevent__listitem--invite">
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  David Silbia
                </Typography>
                {"Mời tham dự Jo Malone London’s Mother’s"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">Bây giờ</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Adnan Safi
                </Typography>
                {"Bắt đầu theo dõi bạn"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">5 phút trước</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Joan Baker
                </Typography>
                {" mời  tham gia  A virtual Evening of Smooth Jazz"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">20 phút trước</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Ronald C. Kinch
                </Typography>
                {"lưu sự kiện của bạn"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">1 giờ trước</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Clara Tolson
                </Typography>
                {"đã tham gia sự kiện Gala Music Festival"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">9 giờ trước</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Jennifer Fritz
                </Typography>
                {"mời bạn tham gia International Kids Safe"}
              </React.Fragment>
            }
          />

          <Box className="addevent__listbutton">
            <Button className="missus" variant="contained">
              Từ chối
            </Button>
            <Button className="invite" variant="contained">
              Đồng ý
            </Button>
          </Box>
          <Box className="addevent__time">1 ngày trước</Box>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar>
            <img src="img/avavtar.png" />
          </ListItemAvatar>
          <ListItemText
            className="addevent__listtext"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="span">
                  Eric G. Prickett
                </Typography>
                {" Bắt đầu theo dõi bạn"}
              </React.Fragment>
            }
          />

          <Box className="addevent__time">1 tuần trước</Box>
        </ListItem>
      </List>
    </Container>
  );
};
export default Notification;
