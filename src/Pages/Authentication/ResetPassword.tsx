import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

import { Formik } from "formik";

export default function ResetPassword() {
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
            Đặt lại mật khẩu
          </Typography>

          <Typography className="loginform__subtitle" variant="p" gutterBottom>
            Vui lòng nhập địa chỉ email của bạn để yêu cầu đặt lại mật khẩu
          </Typography>

          <Formik
            initialValues={{ email: "", password: "", name: "", resetpassword: ""}}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Vui lòng nhập Email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email nhập sai định dạng";
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
                    placeholder="abc@email.com"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    }
                  />

                  {errors.email && touched.email && (
                    <Box className="profileedit__errors"> {errors.email} </Box>
                  )}
                </FormControl>

                <FormControl className="profileedit__itemform loginform__button">
                  <Button
                    className="button"
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    endIcon={<ArrowForwardTwoToneIcon />}
                   
                  >
                    Gửi
                  </Button>
                </FormControl>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}
