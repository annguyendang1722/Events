import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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

import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Formik } from "formik";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Box className="event--tablist profiletitle">
          <Box className="layouttextbutton">
            <Box className="layouttextbutton__text">
              <Link href="/login"><WestIcon></WestIcon></Link>
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

          <Formik
            initialValues={{ email: "", password: "", name: "", resetpassword: ""}}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Vui lòng nhập Email ";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email nhập sai định dạng";
              }

              if (!values.password) {
                errors.password = 'Vui lòng nhập Mật khẩu';
              }

              if (!values.name) {
                errors.name = 'Vui lòng nhập Họ và tên';
              }

              if (!values.resetpassword) {
                errors.resetpassword = 'Vui lòng nhập lại Mật khẩu';
              }

             
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
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
                   {errors.name && touched.name && <Box className="profileedit__errors"> {errors.name} </Box>}
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

                  {errors.email && touched.email && <Box className="profileedit__errors"> {errors.email} </Box>}
                </FormControl>

                <FormControl
                  className="profileedit__itemform loginform__itemform"
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Mật khẩu"
                    type={showPassword ? "text" : "password"}
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

                  {errors.password && touched.password && <Box className="profileedit__errors"> {errors.password} </Box>}
                </FormControl>

                <FormControl
                  className="profileedit__itemform loginform__itemform"
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Nhập lại mật khẩu"
                    type={showPassword ? "text" : "password"}
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
                   {errors.resetpassword && touched.resetpassword && <Box className="profileedit__errors"> {errors.resetpassword} </Box>}
                </FormControl>

                <FormControl className="profileedit__itemform loginform__button">
                  <Button
                    className="button"
                 

                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    endIcon={<ArrowForwardTwoToneIcon />}
                  >
                    Sign up
                  </Button>
                </FormControl>
              </form>
            )}
          </Formik>
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
        Chưa có tài khoản ? <Link href="/signup">Đăng ký ngay</Link>
      </Box>
    </Container>
  );
}
