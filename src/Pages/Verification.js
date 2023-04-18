import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Verification() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Box className="event--tablist profiletitle">
          <Box className="layouttextbutton">
            <Box className="layouttextbutton__text">
              <WestIcon></WestIcon>
            </Box>
          </Box>
        </Box>

        <Box
          className="profileedit__form loginform__form"
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Typography className="loginform__title" variant="h3" gutterBottom>
            Xác thực
          </Typography>
          <Typography className="loginform__subtitle" variant="p" gutterBottom>
            Chúng tôi đã gửi cho bạn mã xác minh qua số +1 2620 0323 7631
          </Typography>
          <FormControl className="profileedit__itemform loginform__itemform loginform__number">
            <Box className="loginform__numberinput">
              <Input  placeholder="-" type="number" slotProps={{ input: { min: 0, max: 9, step: 1 } }} />
            </Box>
            <Box className="loginform__numberinput">
              <Input  placeholder="-" type="number" slotProps={{ input: { min: 0, max: 9, step: 1 } }} />
            </Box>
            <Box className="loginform__numberinput">
              <Input  placeholder="-" type="number" slotProps={{ input: { min: 0, max: 9, step: 1 } }} />
            </Box>
            <Box className="loginform__numberinput">
              <Input  placeholder="-" type="number" slotProps={{ input: { min: 0, max: 9, step: 1 } }} />
            </Box>
          </FormControl>

          <FormControl className="profileedit__itemform loginform__button">
            <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
              Tiếp tục
            </Button>
          </FormControl>
        </Box>
      </Box>

      <Box className="login__footer">
        gửi lại mã xác thực trong <Link href="#">0:20</Link>
      </Box>
    </Container>
  );
}
