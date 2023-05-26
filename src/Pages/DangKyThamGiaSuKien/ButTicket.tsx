import React, { useState } from "react";
import { Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";

import Typography from "@mui/material/Typography";
import { Tabs, Tab } from "@mui/material";

import Box from "@mui/material/Box";

import { Button } from "@mui/material";

import ButtonGroup from "@mui/material/ButtonGroup";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import WestIcon from "@mui/icons-material/West";
import Link from "@mui/material/Link";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

const ButTicket = () => {
  const [value, setValue] = useState(0);
  const handleChange = (butticket, newValue) => {
    setValue(newValue);
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Container className="addbutticket butticket" maxWidth="sm">
      <Box className="layouttextbutton">
        <Box className="layouttextbutton__text">
          <WestIcon></WestIcon>Vé tham dự
        </Box>
        <Box className="layouttextbutton__button">
          <Link href="#">
            <MoreVertIcon></MoreVertIcon>
          </Link>
        </Box>
      </Box>

      <Box className="selectinterest__form">
        <Box className="butticket__tickettype">Loại vé</Box>

        <Tabs
          className="butticket__tabsname"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="VIP" />
          <Tab label="Thường" />
        </Tabs>

        <TabPanel className="butticket__tabpanel" value={value} index={0}>
          <Box className="butticket__place">Chỗ</Box>
          <Box className="butticket__plusminus">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button
                className="butticket__plus"
                size="large"
                aria-label="small button group"
                onClick={handleDecrement}
              >
                <RemoveIcon />
              </Button>
              <Button
                className="butticket__number"
                size="large"
                aria-label="large button group"
              >
                {count}
              </Button>

              <Button
                className="butticket__minus"
                size="large"
                aria-label="small button group"
                onClick={handleIncrement}
              >
                <AddIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </TabPanel>
        <TabPanel className="butticket__tabpanel" value={value} index={1}>
          <Box className="butticket__place">Chỗ</Box>

          <Box className="butticket__plusminus">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button
                className="butticket__plus"
                size="large"
                aria-label="small button group"
                onClick={handleDecrement}
              >
                <RemoveIcon />
              </Button>
              <Button
                className="butticket__number"
                size="large"
                aria-label="large button group"
              >
                {count}
              </Button>

              <Button
                className="butticket__minus"
                size="large"
                aria-label="small button group"
                onClick={handleIncrement}
              >
                <AddIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </TabPanel>

        <FormControl className="selectinterest__submit">
                     
                     <Box className="butticket__money">Tổng: 1.200.000 VNĐ</Box>
          <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
              Continue
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
export default ButTicket;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </Box>
  );
}
