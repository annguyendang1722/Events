import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Footerhome from "../../Components/Home/Layout/footerhome";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
}));

export default function ProfileReview() {
  return (
    <Container maxWidth="sm">
      <Box className="event--tablist profiletitle">
        <Box className="layouttextbutton">
          <Box className="layouttextbutton__text">
            <WestIcon></WestIcon>Profile
          </Box>
          <Box className="layouttextbutton__button">
            <Link href="#">
              <MoreVertIcon></MoreVertIcon>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="profileedit__avatar">
          <Badge className="login__avatar">
            <Avatar
              className="profileedit__avatarmain"
              alt="Travis Howard"
              src="/img/avavtar.png"
            />
              <Typography variant="h2" gutterBottom>
                Ashfak Sayem
              </Typography>
          </Badge>
        </Box>

        <Box className="profileedit__aboutus">
          <h3>Về tôi</h3>
          <Box className="profileedit__des">
            Enjoy your favorite dishe and a lovely your friends and family and
            have a great time. Food from local food trucks will be available for
            purchase.
            <Link href="#">Read More</Link>
          </Box>
        </Box>
      </Box>

      <Box className="listbutton listbutton--profile">
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Games Online
          </Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Concert
          </Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Music
          </Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Art
          </Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Movie
          </Box>
        </Box>

        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">
            Other
          </Box>
        </Box>

      </Box>

      <Footerhome />
    </Container>
  );
}
