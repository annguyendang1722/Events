import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";

const EventSubmit = () => {
  return (
    <Container className="addevent" maxWidth="sm">
      <Box className="layouttextbutton addevent__layouttextbutton">
        <Box className="layouttextbutton__text">Tạo sự kiện mới</Box>
        <Box className="layouttextbutton__button">
          <Button variant="contained">Tiếp</Button>
        </Box>
      </Box>
      <Box className="addevent__changeimg">
        <img src="img/banner1.png" />
        <Stack
          direction="row"
          className="addevent__inputchangeimg"
          alignItems="center"
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>

          <Button variant="outlined" component="label">
            Thay đổi
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>
      </Box>
      <Box className="addevent__title">
        <Typography variant="h2" component="h2">
          International Band Music Concert
        </Typography>{" "}
        <Typography variant="p" component="p">
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks..
        </Typography>
      </Box>
      <List className="addevent__listitem">
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <rect
                opacity="0.1"
                width="41"
                height="41"
                rx="10.25"
                fill="url(#paint0_linear_621_13237)"
              ></rect>
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2404 13.113H23.7989V11.5859H17.2404V13.113ZM15.7483 11.6485V11.6561C15.2364 11.7027 14.7299 11.8043 14.2371 11.9573V11.9516C14.2225 11.9578 14.2087 11.9625 14.1955 11.9671C14.1781 11.9731 14.1617 11.9787 14.1455 11.9868C14.1062 11.9963 14.0677 12.0105 14.0311 12.0286C13.923 12.0638 13.8149 12.1056 13.7133 12.1483C13.6862 12.1588 13.6592 12.1709 13.6322 12.183L13.6322 12.183C13.6052 12.1951 13.5782 12.2072 13.5511 12.2177C13.5141 12.2353 13.4754 12.2545 13.4367 12.2738L13.4367 12.2738C13.398 12.293 13.3593 12.3122 13.3222 12.3298L13.139 12.4353C13.1051 12.4526 13.0738 12.4728 13.0418 12.4935C13.0227 12.5058 13.0035 12.5183 12.9833 12.5303C12.7076 12.708 12.4521 12.9161 12.2213 13.1527L12.2076 13.167C12.1772 13.2023 12.1471 13.2366 12.1173 13.2704L12.1173 13.2705C12.067 13.3276 12.0179 13.3834 11.9713 13.4407L11.9575 13.454C11.2083 14.4879 10.8328 15.7621 10.8979 17.0535V17.4631H12.377V17.0497C12.377 15.25 12.9503 14.1296 14.2261 13.5557C14.7134 13.3494 15.2281 13.2221 15.752 13.1756H15.7657V11.6552L15.7483 11.6485ZM29.0394 13.4349L29.0458 13.4482C29.7941 14.4831 30.1678 15.7583 30.1018 17.0497V17.463H28.6236V17.0392C28.6548 16.2771 28.5018 15.5188 28.1776 14.8337C27.8662 14.2474 27.368 13.7922 26.7662 13.5452C26.2872 13.339 25.7798 13.2107 25.2624 13.1651V11.6523C25.7743 11.6998 26.2808 11.8005 26.7745 11.9535V11.9459C26.8022 11.9585 26.8234 11.966 26.8597 11.9788L26.8661 11.981C26.8829 11.987 26.8986 11.993 26.9142 11.9989C26.9358 12.007 26.9571 12.0151 26.9805 12.0229C27.0818 12.0561 27.1765 12.0952 27.2739 12.1355L27.291 12.1426C27.336 12.1584 27.3783 12.178 27.4165 12.1956C27.4289 12.2013 27.4408 12.2068 27.4522 12.212C27.5328 12.2471 27.6152 12.2889 27.6812 12.3241C27.7252 12.3469 27.768 12.3713 27.8082 12.3942C27.8299 12.4066 27.8508 12.4186 27.8708 12.4296C27.9036 12.4477 27.9321 12.4671 27.9595 12.4857C27.9796 12.4993 27.999 12.5125 28.0191 12.5246C28.2957 12.7032 28.554 12.9123 28.7876 13.147L28.7958 13.1613C28.8819 13.2477 28.9634 13.339 29.0394 13.4349Z"
                fill="#5E6FFF"
              ></path>
              <path
                d="M25.3046 10.5885V13.9534C25.3046 14.3774 24.9606 14.7208 24.5359 14.7208C24.1111 14.7208 23.7671 14.3774 23.7671 13.9534V10.5961C23.7633 10.1722 24.1054 9.82589 24.5301 9.82302C24.9548 9.82014 25.3017 10.1607 25.3046 10.5846V10.5885Z"
                fill="#5E6FFF"
              ></path>
              <path
                d="M17.2328 10.6007V13.9573C17.2328 14.3831 16.8884 14.7283 16.4636 14.7283C16.0388 14.7283 15.6953 14.3831 15.6953 13.9573V10.6007C15.6953 10.1749 16.0388 9.83057 16.4636 9.83057C16.8884 9.83057 17.2328 10.1749 17.2328 10.6007Z"
                fill="#5E6FFF"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8906 25.7426V17.4634H30.1094V25.7426C30.1094 29.353 28.0931 31.1771 24.0972 31.1771H16.8936C12.9069 31.1771 10.8906 29.353 10.8906 25.7426ZM19.6155 22.0661C19.6155 22.567 20.0187 22.9734 20.5045 22.9734C20.9902 22.9734 21.3843 22.567 21.3843 22.0567C21.3843 21.5652 20.9902 21.1588 20.5045 21.1494H20.4953C20.0096 21.1588 19.6155 21.5652 19.6155 22.0661ZM24.8944 22.9736C24.4087 22.9736 24.0146 22.5672 24.0146 22.0663C24.0146 21.5653 24.3995 21.1589 24.8944 21.1589C25.3801 21.1589 25.7742 21.5653 25.7742 22.0663C25.7742 22.5672 25.3801 22.9736 24.8944 22.9736ZM24.8946 26.8486C24.4089 26.8486 24.0148 26.4422 24.0056 25.9413C24.0056 25.4404 24.3997 25.034 24.8854 25.034H24.8946C25.3803 25.034 25.7744 25.4404 25.7744 25.9413C25.7744 26.4422 25.3803 26.8486 24.8946 26.8486ZM20.5045 26.8485C20.0187 26.8485 19.6155 26.4421 19.6155 25.9412C19.6155 25.4402 20.0096 25.0338 20.4953 25.0244H20.5045C20.9902 25.0338 21.3751 25.4402 21.3843 25.9317C21.3843 26.4421 20.9902 26.8485 20.5045 26.8485ZM15.2257 22.0662C15.2257 22.5671 15.6198 22.9735 16.1055 22.9735C16.6004 22.9735 16.9945 22.5576 16.9853 22.0567C16.9853 21.5558 16.5912 21.1494 16.1147 21.1494H16.1055C15.6198 21.1494 15.2257 21.5652 15.2257 22.0662ZM16.1054 26.8485C15.6196 26.8485 15.2255 26.4421 15.2255 25.9412C15.2164 25.4402 15.6105 25.0244 16.1054 25.0244C16.5911 25.0244 16.9852 25.4308 16.9852 25.9317C16.9852 26.4326 16.5911 26.8485 16.1054 26.8485Z"
                fill="#5E6FFF"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_621_13237"
                  x1="47.4063"
                  y1="2.96524e-06"
                  x2="1.39611e-07"
                  y2="34.5937"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5669FF"></stop>
                  <stop offset="1" stop-color="#6D7DFF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText
            primary="Ngày 14 tháng 03 năm 2023"
            secondary="Thứ 3 , 4:00PM - 9:00PM"
          />

          <Button
            variant="contained"
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            Thay đổi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <rect
                opacity="0.1"
                width="41"
                height="41"
                rx="10.25"
                fill="url(#paint0_linear_645_13028)"
              ></rect>
              <path
                d="M30 18.0999C30.1 17.5999 29.7 16.9999 29.2 16.9999L23.5 16.1999L20.9 10.9999C20.8 10.7999 20.7 10.6999 20.5 10.5999C20 10.2999 19.4 10.4999 19.1 10.9999L16.6 16.1999L10.9 16.9999C10.6 16.9999 10.4 17.0999 10.3 17.2999C9.9 17.6999 9.9 18.2999 10.3 18.6999L14.4 22.6999L13.4 28.3999C13.4 28.5999 13.4 28.7999 13.5 28.9999C13.8 29.4999 14.4 29.6999 14.9 29.3999L20 26.6999L25.1 29.3999C25.2 29.4999 25.4 29.4999 25.6 29.4999C25.7 29.4999 25.7 29.4999 25.8 29.4999C26.3 29.3999 26.7 28.8999 26.6 28.2999L25.6 22.5999L29.7 18.5999C29.9 18.4999 30 18.2999 30 18.0999Z"
                fill="#8C3EF1"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_645_13028"
                  x1="-2.13542"
                  y1="57.2292"
                  x2="42.2813"
                  y2="6.83334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#35ECA9"></stop>
                  <stop offset="1" stop-color="#24D192"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText primary="Lĩnh vực" secondary="Âm nhạc, Game" />

          <Button
            variant="contained"
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            Thay đổi
          </Button>
        </ListItem>
        <ListItem className="addevent__item">
          <ListItemAvatar>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <rect
                opacity="0.1"
                width="41"
                height="41"
                rx="10.25"
                fill="url(#paint0_linear_621_13240)"
              ></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7969 10.8232C19.1297 9.46774 21.997 9.49144 24.3079 10.8853C26.5961 12.3075 27.9868 14.8457 27.9739 17.5761C27.9206 20.2886 26.4294 22.8384 24.5654 24.8095C23.4895 25.9522 22.2859 26.9627 20.9793 27.8203C20.8447 27.8981 20.6973 27.9502 20.5444 27.974C20.3972 27.9678 20.2538 27.9243 20.1272 27.8475C18.1324 26.5589 16.3823 24.914 14.9612 22.9921C13.772 21.3877 13.0964 19.4495 13.0261 17.4405C13.0246 14.7048 14.4641 12.1786 16.7969 10.8232ZM18.1448 18.5729C18.5372 19.5403 19.4634 20.1714 20.491 20.1714C21.1642 20.1762 21.8113 19.9066 22.2882 19.4225C22.765 18.9385 23.032 18.2802 23.0296 17.5945C23.0332 16.5478 22.417 15.6021 21.4687 15.199C20.5203 14.7959 19.427 15.0149 18.6991 15.7537C17.9712 16.4926 17.7524 17.6055 18.1448 18.5729Z"
                fill="#64D6FB"
              ></path>
              <path
                opacity="0.4"
                d="M20.4999 31.1774C23.4483 31.1774 25.8385 30.6994 25.8385 30.1097C25.8385 29.52 23.4483 29.042 20.4999 29.042C17.5515 29.042 15.1614 29.52 15.1614 30.1097C15.1614 30.6994 17.5515 31.1774 20.4999 31.1774Z"
                fill="#64D6FB"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_621_13240"
                  x1="38.0104"
                  y1="3.41667"
                  x2="-2.32685e-07"
                  y2="44.8438"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5ED1FE"></stop>
                  <stop offset="1" stop-color="#83EEE8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText
            primary="Gala Convention "
            secondary="36 Guild Street London, UK "
          />

          <Button
            variant="contained"
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            Thay đổi
          </Button>
        </ListItem>

        <ListItem className="addevent__item">
          <ListItemAvatar className="addevent__listavatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <rect
                opacity="0.1"
                width="41"
                height="41"
                rx="10.25"
                fill="url(#paint0_linear_621_13243)"
              ></rect>
              <path
                d="M24.5039 20.4998C23.4749 20.4998 22.4799 20.0403 21.7012 19.2065C20.9439 18.3932 20.4815 17.3086 20.3999 16.1535C20.3128 14.9213 20.6887 13.7882 21.4579 12.9624C22.2272 12.1366 23.3027 11.6912 24.5039 11.6912C25.6966 11.6912 26.7751 12.1446 27.5419 12.9684C28.3161 13.8002 28.693 14.9313 28.6059 16.153C28.5223 17.3096 28.0604 18.3937 27.3047 19.206C26.5279 20.0403 25.5334 20.4998 24.5039 20.4998ZM31.1019 29.3083H17.9065C17.6943 29.3095 17.4847 29.2619 17.2939 29.1693C17.103 29.0768 16.9359 28.9416 16.8054 28.7743C16.667 28.593 16.5715 28.3826 16.5259 28.1591C16.4803 27.9356 16.4858 27.7046 16.5422 27.4836C16.9636 25.7914 18.0076 24.388 19.5611 23.4256C20.9399 22.5718 22.6952 22.1013 24.5039 22.1013C26.3482 22.1013 28.0574 22.5518 29.4442 23.4051C31.0013 24.3625 32.0468 25.7739 32.4662 27.4866C32.5218 27.7078 32.5268 27.9387 32.4807 28.1622C32.4345 28.3856 32.3386 28.5957 32.1999 28.7768C32.0696 28.9434 31.9029 29.0778 31.7126 29.17C31.5222 29.2621 31.3133 29.3094 31.1019 29.3083Z"
                fill="#FF6258"
              ></path>
              <path
                opacity="0.4"
                d="M15.0451 20.7C13.2839 20.7 11.7354 19.0624 11.5917 17.0499C11.5207 16.0189 11.842 15.0655 12.4926 14.3663C13.1362 13.6741 14.0441 13.2927 15.0451 13.2927C16.0461 13.2927 16.947 13.6761 17.5941 14.3723C18.2497 15.077 18.57 16.0284 18.495 17.0509C18.3513 19.0629 16.8033 20.7 15.0451 20.7ZM18.3313 22.274C17.451 21.8436 16.3083 21.6284 15.0456 21.6284C13.5712 21.6284 12.1393 22.0127 11.0132 22.7104C9.73643 23.5027 8.87759 24.6563 8.53075 26.0492C8.48 26.2495 8.4752 26.4587 8.51671 26.6612C8.55823 26.8637 8.64498 27.0541 8.77049 27.2183C8.88958 27.3712 9.04214 27.4947 9.21646 27.5794C9.39077 27.6641 9.58218 27.7077 9.77597 27.7068H15.3314C15.4252 27.7068 15.5159 27.6739 15.5879 27.6138C15.6599 27.5537 15.7085 27.4702 15.7253 27.378C15.7308 27.3464 15.7378 27.3149 15.7458 27.2839C16.1702 25.5792 17.1647 24.1388 18.6341 23.0888C18.6882 23.0498 18.7316 22.998 18.7606 22.938C18.7895 22.878 18.8031 22.8117 18.7999 22.7452C18.7968 22.6786 18.7771 22.6139 18.7427 22.5569C18.7082 22.4999 18.66 22.4523 18.6026 22.4186C18.524 22.3726 18.4339 22.324 18.3313 22.274Z"
                fill="#FF6258"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_621_13243"
                  x1="41"
                  y1="1.2219e-06"
                  x2="-1.2219e-06"
                  y2="41"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF6056"></stop>
                  <stop offset="1" stop-color="#FF655B"></stop>
                </linearGradient>
              </defs>
            </svg>

            <AvatarGroup className="addevent__listavatar"  max={4}>
              <Avatar className="addevent__imgavatar"
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar className="addevent__imgavatar"
                alt="Trevor Henderson"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
            </AvatarGroup>
          </ListItemAvatar>
          <Button variant="contained" startIcon={<PersonAddAltIcon />}>
            Mời
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};
export default EventSubmit;
