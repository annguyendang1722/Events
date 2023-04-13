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
                <SearchIcon />
              </IconButton>
              <Divider className="line" sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
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