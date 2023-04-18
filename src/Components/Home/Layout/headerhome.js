import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeaderMenu from "../Menu/menu";
import SelectAddress from "../SelectAddress/selectaddress";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';






export default function Headerhome() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (



    <div className="header__home">




      <Box className="header__top">
      <Box className="header__topleft">
        <HeaderMenu />
        </Box>
        <Box className="header__topcenter">
            <SelectAddress/>
        </Box>
        <Box className="header__topright">
        <NotificationsNoneOutlinedIcon/> </Box>
      </Box>
      <Box className="header__search">
      <Box className="header__searchleft">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
              
              }}
            >
              <IconButton className="iconsearch" type="button" sx={{ p: "10px" }} aria-label="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M20.9999 20.9999L16.6499 16.6499" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </IconButton>
              <Divider className="line" sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase className="header__inputsearch"
             
                placeholder="Tìm kiếm..."
                inputProps={{ "aria-label": "search google maps" }}
              />

              
            </Paper>
            </Box> 
            <Box className="header__searchright">

              <span><img src="img/boloc.png" /></span> <span>Bộ lọc</span>

            </Box>
      </Box>
    </div>
  );
}