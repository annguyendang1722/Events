import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormControl from "@mui/material/FormControl";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

import Link from "@mui/material/Link";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Typography from "@mui/material/Typography";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
}));

export default function ProfileEdit() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <Container maxWidth="sm">
      <Box className="event--tablist profiletitle">
        <Box className="layouttextbutton">
          <Box className="layouttextbutton__text">
            <Link href="/profile"><WestIcon></WestIcon>Sửa Profile </Link>
          </Box>
          <Box className="layouttextbutton__button">
            <Link href="#">
              <MoreVertIcon></MoreVertIcon>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="profileedit__avatar">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<SmallAvatar alt="Remy Sharp" src="/img/img3.png" />}
          >
            <Avatar
              className="profileedit__avatarmain"
              alt="Travis Howard"
              src="/img/avavtar.png"
            />
          </Badge>
        </Box>
        <Box className="profileedit__form" sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl className="profileedit__itemform">
            <InputLabel>
              <em>Họ và tên</em>
            </InputLabel>
            <TextField id="outlined-basic" variant="outlined" />
          </FormControl>
          <FormControl className="profileedit__itemform">
            <InputLabel>
              <em>Ngày sinh</em>
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  value={value}
                  defaultValue={dayjs("2022-04-17T15:30")}
                  format="LLL"
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>

          <FormControl className="profileedit__itemform">
            <InputLabel>
              <em> Địa chỉ </em>
            </InputLabel>

            <TextField id="outlined-basic" variant="outlined" />
          </FormControl>
          <FormControl className="profileedit__itemform">
            <InputLabel>
              <em>Mô tả bản thân</em>
            </InputLabel>

            <TextField id="outlined-basic" variant="outlined" />
          </FormControl>
          <FormControl className="profileedit__itemform">
            <Button href="/profile" className="button" variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
              Lưu
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
}