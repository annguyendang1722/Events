import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeaderMenu from "../Menu/menu";
import SelectAddress from "../SelectAddress/selectaddress";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { Typography } from "@mui/material";

import { Link } from "react-router-dom";

export default function HeaderEventReminder() {
  return (
    <div className="header__home header__eventreminder">
      <Box className="header__eventreminderinner">
        <Box className="header__topleft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.15" />
            <path
              d="M23.3843 10.6851C23.8839 11.1848 23.8839 11.9947 23.3843 12.4942L14.803 21.0757C14.3033 21.5751 13.4936 21.5751 12.9939 21.0757L8.90887 16.9904C8.4092 16.491 8.4092 15.681 8.90887 15.1816C9.40829 14.682 10.2182 14.682 10.7177 15.1816C12.4743 16.9382 15.3223 16.9382 17.0789 15.1816L21.5752 10.6851C22.0749 10.1857 22.8848 10.1857 23.3843 10.6851Z"
              fill="#FDFDFD"
            />
          </svg>
        </Box>
        <Box className="header__topcenter">
          <Typography variant="p" component="p">
            Bạn có một chương trình sự kiện
          </Typography>
          <Typography variant="span" component="span">
            Ngày mai , 08:00am - 10:00am
          </Typography>
          <Box className="header__link">
          <Link component="button" variant="body2">
            Xem chi tiết
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="9"
              viewBox="0 0 4 9"
              fill="none"
            >
              <path
                d="M1.5 7.5V7.5C3.15685 5.84315 3.15685 3.15685 1.5 1.5V1.5"
                stroke="#00F8FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </Box>
        </Box>


        <Box className="header__searchright">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g filter="url(#filter0_d_595_30145)">
              <circle cx="22" cy="19" r="12" fill="white" fill-opacity="0.06" />
            </g>
            <path
              d="M25.4264 21.5037C23.8865 19.9631 23.887 17.4656 25.4268 15.9251C25.4875 15.8644 25.5357 15.7924 25.5685 15.7131C25.6013 15.6338 25.6182 15.5488 25.6182 15.463C25.6182 15.3772 25.6013 15.2923 25.5685 15.213C25.5357 15.1337 25.4875 15.0617 25.4268 15.001C25.3662 14.9403 25.2941 14.8922 25.2149 14.8594C25.1356 14.8265 25.0506 14.8096 24.9648 14.8096C24.879 14.8096 24.794 14.8265 24.7148 14.8594C24.6355 14.8922 24.5634 14.9403 24.5028 15.001C22.963 16.5413 20.4658 16.5412 18.9258 15.001C18.8657 14.9381 18.7936 14.8878 18.7137 14.8531C18.6338 14.8184 18.5478 14.8001 18.4608 14.7991C18.3737 14.7981 18.2874 14.8146 18.2067 14.8475C18.1261 14.8804 18.0529 14.929 17.9914 14.9906C17.9298 15.0522 17.8812 15.1255 17.8484 15.2061C17.8156 15.2868 17.7992 15.3732 17.8003 15.4602C17.8013 15.5473 17.8198 15.6332 17.8545 15.7131C17.8892 15.7929 17.9396 15.865 18.0026 15.9251C19.5426 17.4656 19.5426 19.9627 18.0026 21.5032C17.8819 21.6261 17.8146 21.7916 17.8152 21.9638C17.8159 22.136 17.8846 22.301 18.0063 22.4228C18.128 22.5447 18.2928 22.6135 18.465 22.6145C18.6372 22.6154 18.8029 22.5483 18.9258 22.4277C20.4656 20.8875 22.9626 20.8875 24.5024 22.4277C24.563 22.4884 24.6351 22.5365 24.7143 22.5694C24.7936 22.6022 24.8786 22.6191 24.9644 22.6191C25.0502 22.6191 25.1352 22.6022 25.2145 22.5694C25.2937 22.5365 25.3658 22.4884 25.4264 22.4277C25.4871 22.3671 25.5352 22.295 25.5681 22.2157C25.6009 22.1365 25.6178 22.0515 25.6178 21.9657C25.6178 21.8799 25.6009 21.7949 25.5681 21.7156C25.5352 21.6364 25.4871 21.5643 25.4264 21.5037Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_595_30145"
                x="0"
                y="0"
                width="44"
                height="44"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.22834 0 0 0 0 0.260144 0 0 0 0 0.341927 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_595_30145"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_595_30145"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Box>
      </Box>

  
    </div>
  );
}
