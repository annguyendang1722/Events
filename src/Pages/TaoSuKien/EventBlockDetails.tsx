import React from "react";
import { Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import WestIcon from "@mui/icons-material/West";

import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const EventBlockDetails = () => {
  return (
    <Container className="addevent addevent--details" maxWidth="sm">
      <Box className="addevent__bannereventdetails">
        <Box className="layouttextbutton addevent__layouttextbutton">
          <Box className="layouttextbutton__text">            
            <Link href="/eventsubmit"><WestIcon></WestIcon>Chi tiết sự kiện</Link>
          </Box>
          <Box className="layouttextbutton__button">
            <BookmarkIcon></BookmarkIcon>
          </Box>
        </Box>
        <Box className="addevent__changeimg">
          <img src="img/banner1.png" />
        </Box>
        <Box className="addevent__item addevent__listimg addevent__listicon">
          <Box className="addevent__itemicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <circle cx="21.5" cy="21.5" r="21.5" fill="#6B56F5" />
              <path
                d="M28.3282 32.5001C27.4132 32.5001 26.1278 32.1691 24.2032 31.0938C21.8627 29.7813 20.0524 28.5696 17.7246 26.2479C15.4802 24.0049 14.388 22.5527 12.8594 19.7711C11.1325 16.6305 11.4269 14.9843 11.756 14.2807C12.1478 13.4397 12.7263 12.9368 13.4739 12.4376C13.8986 12.1593 14.348 11.9208 14.8164 11.7251C14.8633 11.7049 14.9069 11.6857 14.9458 11.6683C15.1778 11.5638 15.5294 11.4058 15.9747 11.5746C16.2719 11.6861 16.5372 11.9144 16.9525 12.3246C17.8043 13.1646 18.9682 15.0354 19.3975 15.9541C19.6858 16.5733 19.8766 16.9821 19.8771 17.4405C19.8771 17.9772 19.6071 18.3911 19.2794 18.8379C19.218 18.9218 19.1571 19.0019 19.098 19.0797C18.7413 19.5485 18.663 19.684 18.7146 19.9258C18.8191 20.4119 19.5986 21.859 20.8797 23.1372C22.1608 24.4155 23.5661 25.1458 24.0541 25.2499C24.3063 25.3038 24.4446 25.2222 24.9283 24.8529C24.9977 24.7999 25.0689 24.7451 25.1435 24.6902C25.6432 24.3185 26.0378 24.0555 26.5619 24.0555H26.5647C27.0208 24.0555 27.4113 24.2533 28.0582 24.5796C28.9019 25.0052 30.8289 26.1541 31.6741 27.0068C32.0852 27.4211 32.3144 27.6855 32.4264 27.9822C32.5952 28.429 32.4363 28.7791 32.3327 29.0135C32.3153 29.0524 32.2961 29.0951 32.276 29.1424C32.0787 29.61 31.8387 30.0585 31.5593 30.4821C31.061 31.2274 30.5561 31.8044 29.7133 32.1968C29.2805 32.4015 28.8069 32.5052 28.3282 32.5001Z"
                fill="white"
              />
            </svg>
            <p>Thành viên</p>
          </Box>
          <Box className="addevent__itemicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <circle cx="21.5" cy="21.5" r="21.5" fill="#3E82F7" />
              <mask
                id="mask0_655_15036"
                maskUnits="userSpaceOnUse"
                x="10"
                y="10"
                width="24"
                height="24"
              >
                <rect
                  x="22"
                  y="10"
                  width="16.9706"
                  height="16.9706"
                  rx="2"
                  transform="rotate(45 22 10)"
                  fill="#C4C4C4"
                />
              </mask>
              <g mask="url(#mask0_655_15036)">
                <g clipPath="url(#clip0_655_15036)">
                  <path
                    d="M33.1947 21.1694L22.8075 10.7822C22.3574 10.3321 21.6245 10.3321 21.1801 10.7822L10.7929 21.1694C10.3428 21.6195 10.3428 22.3524 10.7929 22.8025L21.1801 33.1839V33.1897C21.6302 33.6398 22.3631 33.6398 22.8133 33.1897L33.2005 22.8025C33.6505 22.3466 33.6505 21.6195 33.1947 21.1694ZM24.302 24.8684V21.9831H19.6855V25.4455H17.3772V20.8289C17.3772 20.1884 17.8908 19.6748 18.5313 19.6748H24.302V16.7894L28.3415 20.8289L24.302 24.8684Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_655_15036">
                  <rect
                    width="23.0827"
                    height="23.0827"
                    fill="white"
                    transform="translate(10.4548 10.4446)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Chỉ đường</p>
          </Box>
          <Box className="addevent__itemicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <circle cx="21.5" cy="21.5" r="21.5" fill="#FDC400" />
              <path
                d="M28.6 12.6C28.4 12.4 28.1 12.3 27.8 12.4C25.6 12.9 23.4 12.4 21.6 11.1C21.3 10.9 20.8 10.9 20.5 11.1C18.6 12.4 16.4 12.9 14.2 12.4C13.7 12.3 13.1 12.7 13 13.2C13 13.3 13 13.3 13 13.4V20.9C13 23.8 14.4 26.5 16.8 28.2L20.5 30.7999C20.8 31 21.3 31 21.7 30.7999L25.4 28.2C27.8 26.5 29.2 23.8 29.2 20.9V13.4C29 13.1 28.9 12.8 28.6 12.6ZM23 22H22V23C22 23.6 21.6 24 21 24C20.4 24 20 23.6 20 23V22H19C18.4 22 18 21.6 18 21C18 20.4 18.4 20 19 20H20V19C20 18.4 20.4 18 21 18C21.6 18 22 18.4 22 19V20H23C23.6 20 24 20.4 24 21C24 21.6 23.6 22 23 22Z"
                fill="white"
              />
            </svg>
            <p>Quản lý </p>
          </Box>
        </Box>
      </Box>

      <Box className="addevent__title">
        <Typography variant="h2" component="h2">
          International Band Music Concert
        </Typography>
      </Box>
      <List className="addevent__listitem addevent__listitem--details">
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
                fillRule="evenodd"
                clipRule="evenodd"
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
                fillRule="evenodd"
                clipRule="evenodd"
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
                  <stop stopColor="#5669FF"></stop>
                  <stop offset="1" stopColor="#6D7DFF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText
            primary="Ngày 14 tháng 03 năm 2023"
            secondary="Thứ 3 , 4:00PM - 9:00PM"
          />
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
                  <stop stopColor="#35ECA9"></stop>
                  <stop offset="1" stopColor="#24D192"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText primary="Lĩnh vực" secondary="Âm nhạc, Game" />
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
                fillRule="evenodd"
                clipRule="evenodd"
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
                  <stop stopColor="#5ED1FE"></stop>
                  <stop offset="1" stopColor="#83EEE8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </ListItemAvatar>
          <ListItemText
            primary="Gala Convention "
            secondary="36 Guild Street London, UK "
          />
        </ListItem>
      </List>
      <Box className="addevent__note">
        <Typography variant="h3" component="h3">
          Members
        </Typography>
      </Box>
      <List className="addevent__listitem addevent__listitem--details">
        <ListItem className="addevent__item addevent__item--group addevent__item--block">
          <ListItemAvatar className="addevent__listavatar">
            <AvatarGroup className="addevent__listavatar" max={4}>
              <Avatar
                className="addevent__imgavatar"
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
              <Avatar
                className="addevent__imgavatar"
                alt="Trevor Henderson"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
            </AvatarGroup>
          </ListItemAvatar>
          <Button variant="contained" href="/invitefriend" className="followblue">
            Mời
          </Button>
        </ListItem>
      </List>
      <Box className="addevent__note">
        <Typography variant="h3" component="h3">
          About Event
        </Typography>
        <Typography variant="p" component="p">
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks..
        </Typography>
      </Box>
    </Container>
  );
};
export default EventBlockDetails;
