import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



export default function TestDate() {
  const [value] = React.useState<Dayjs | null>(dayjs('2023-04-17'));


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
            value={value}
          defaultValue={dayjs('2022-04-17T15:30')}
          format="LLL"
        />
     
      </DemoContainer>
    </LocalizationProvider>
  );
}
