import React from "react";
import { Container } from "@mui/material";



import Box from "@mui/material/Box";


import WestIcon from "@mui/icons-material/West";


import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";


const ScanCard = () => {
  return (
    <Container className="addevent scancard ticket" maxWidth="sm">
      <Box className="layouttextbutton">
        <Box className="layouttextbutton__text">
          <WestIcon></WestIcon>Scan Card
        </Box>
      
      </Box>

      <Box className="scancard__text">Please hold the card inside the frame
to start scaning</Box>
<Box className="scancard__img"> <img src="img/image-41.png" /></Box>

      <FormControl className="selectinterest__submit">
        <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
        Scaning
        </Button>
      </FormControl>

      
    </Container>
  );
};
export default ScanCard;
