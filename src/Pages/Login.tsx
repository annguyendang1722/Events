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
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function Login() {



  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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

          <FormControl className="profileedit__itemform loginform__itemform" variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              
              />
        </FormControl>



     

      

          <FormControl className="profileedit__itemform loginform__button">
            <Button className="button" variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
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
