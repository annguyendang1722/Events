import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";

const HeaderMenu = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
   
        <Drawer className="header__menu"
          variant={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        >

            <Box className="header__menutop">
              <Card className="header__avatar">
                <Box>
                    <Avatar className="header__imgavatar" variant="rounded" src="img/avavtar.png" />
                    <Typography className="header__name">Đức đẹp trai</Typography>
                    
                   
                
                </Box>
                
                
                </Card>
          <List className="header__menulist">


            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/"
                >
                  <HomeIcon/> Profile của tôi
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Tin nhắn
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Lịch
                </ListItem>
              </ListItemIcon>
            </ListItem>

            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/"
                >
                  <HomeIcon/> Đã lưu
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Liên hệ với chúng tôi
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Cài đặt
                </ListItem>
              </ListItemIcon>
            </ListItem>

            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Trợ giúp & FAQs
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Đăng xuất
                </ListItem>
              </ListItemIcon>
            </ListItem>
          </List>
          </Box>
          <Box className="header__menubottom">
          <Button variant="contained" startIcon={<DeleteIcon />}>
          Upgrade Pro
          </Button>
          </Box>
      
        </Drawer>
     

    
        <Button className="header__menuclick" onClick={() => setOpen(!open)}>
            <span> {open ? "Hide" : "Show"}</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.2C0 0.537258 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2C24 1.86274 23.4627 2.4 22.8 2.4H1.2C0.537258 2.4 0 1.86274 0 1.2ZM0 9.59992C0 8.93718 0.537259 8.39992 1.2 8.39992H16.8C17.4627 8.39992 18 8.93718 18 9.59992C18 10.2627 17.4627 10.7999 16.8 10.7999H1.2C0.537259 10.7999 0 10.2627 0 9.59992ZM1.2 16.8C0.537258 16.8 0 17.3373 0 18C0 18.6628 0.537258 19.2 1.2 19.2H22.8C23.4627 19.2 24 18.6628 24 18C24 17.3373 23.4627 16.8 22.8 16.8H1.2Z" fill="white"/>
              </svg>
        </Button>
    
    </Grid>
  ); 
};

export default HeaderMenu;