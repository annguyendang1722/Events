import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function SignUp() {
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
            Đăng ký
          </Typography>

          <FormControl className="profileedit__itemform loginform__itemform">
            <Input
              id="input-with-icon-adornment"
              placeholder="Họ và tên"
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">
                  <PermIdentityIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className="profileedit__itemform loginform__itemform">
            <Input
              id="input-with-icon-adornment"
              placeholder="abc@email.com"
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="profileedit__itemform loginform__itemform">
            <Input
              id="input-with-icon-adornment-1"
              placeholder="Mật khẩu"
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <VisibilityOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className="profileedit__itemform loginform__itemform">
            <Input
              id="input-with-icon-adornment-1"
              placeholder="Nhập lại mật khẩu"
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <VisibilityOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className="profileedit__itemform loginform__button">
            <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
              Sign up
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Box className="login__signwithgg">
        <Box className="login__text">Hoặc</Box>
        <Button
          className="login__google"
          variant="outlined"
          href="#contained-buttons"
        >
          Đăng nhập với Google
        </Button>
        <Button
          className="login__facebook"
          variant="outlined"
          href="#contained-buttons"
        >
          Đăng nhập với Facebook
        </Button>
      </Box>

      <Box className="login__footer">
        Chưa có tài khoản ? <Link href="#">Đăng ký ngay</Link>
      </Box>
    </Container>
  );
}
