import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Login() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };



  return (
    <Container maxWidth="sm">
      <Box>
        <Box className="profileedit__avatar login__avatar">
          <Avatar
            className="profileedit__avatarmain"
            alt="Travis Howard"
            src="/img/tenapp.png"
          />
          <Typography variant="h2" gutterBottom>
            Tên app
          </Typography>
        </Box>
        <Box
          className="profileedit__form loginform__form"
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Typography className="loginform__title" variant="h3" gutterBottom>
            Đăng nhập
          </Typography>
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

     

          <FormControl className="profileedit__itemform loginform__button">
            <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
              Đăng nhập
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
