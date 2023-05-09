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
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function Profile() {
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

        <Stack
          className="profileedit__listbutton profileedit__listbutton--1"
          direction="row"
          spacing={2}
        >
          <Button
            variant="outlined"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clipPath="url(#clip0_1272_3120)">
                  <path
                    d="M10.0833 3.6665H3.66667C3.18044 3.6665 2.71412 3.85966 2.37031 4.20347C2.02649 4.54729 1.83334 5.01361 1.83334 5.49984V18.3332C1.83334 18.8194 2.02649 19.2857 2.37031 19.6295C2.71412 19.9734 3.18044 20.1665 3.66667 20.1665H16.5C16.9862 20.1665 17.4525 19.9734 17.7964 19.6295C18.1402 19.2857 18.3333 18.8194 18.3333 18.3332V11.9165"
                    stroke="#5669FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9583 2.29171C17.323 1.92704 17.8176 1.72217 18.3333 1.72217C18.8491 1.72217 19.3437 1.92704 19.7083 2.29171C20.073 2.65638 20.2779 3.15099 20.2779 3.66671C20.2779 4.18244 20.073 4.67704 19.7083 5.04171L11 13.75L7.33334 14.6667L8.25 11L16.9583 2.29171Z"
                    stroke="#5669FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1272_3120">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            Sửa Profile
          </Button>
        </Stack>

        <Box className="profileedit__aboutus">
          <Typography variant="h3" component="h3">
            Về tôi
          </Typography>
          <Box className="profileedit__des">
            Enjoy your favorite dishe and a lovely your friends and family and
            have a great time. Food from local food trucks will be available for
            purchase.
            <Link href="#">Read More</Link>
          </Box>
        </Box>
      </Box>

      <Box className="addevent__item profileedit__button">
        <Typography variant="h3" component="h3">
          Sở thích
        </Typography>
        <Button variant="contained" startIcon={<DriveFileRenameOutlineIcon />}>
          Thay đổi
        </Button>
      </Box>
      <Box className="listbutton listbutton--profile">
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Games Online</Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Concert</Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Music</Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Art</Box>
        </Box>
        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Movie</Box>
        </Box>

        <Box className="listbutton__itemslide">
          <Box className="listbutton__slide">Other</Box>
        </Box>
      </Box>

      <Footerhome />
    </Container>
  );
}
