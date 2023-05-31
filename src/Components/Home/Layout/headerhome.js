import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeaderMenu from "../Menu/menu";
import SelectAddress from "../SelectAddress/selectaddress";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Link from "@mui/material/Link";





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
          <Link href="/notification">
            <NotificationsNoneOutlinedIcon/>  
          </Link>
        </Box>
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
             
              <img src="img/search.svg"/>
              </IconButton>
              <Divider className="line" sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase className="header__inputsearch"
             
                placeholder="Tìm kiếm..."
                inputProps={{ "aria-label": "search google maps" }}
              />

              
            </Paper>
            </Box> 
            <Box className="header__searchright">
                <Link href="/searchpage">
                    <span><img src="img/boloc.png" /></span> <span>Bộ lọc</span>
                </Link>
            </Box>
      </Box>
    </div>
  );
}