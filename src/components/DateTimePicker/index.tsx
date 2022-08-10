import React from "react";

import { Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

import { IDateTimeValue } from "./interfaces";

interface IProps {
  setValue: (value: any) => void;
}

const DateTimePicker = (props: IProps) => {
  const { setValue } = props;
  const cn = classNames.bind(styles);

  const [date, setDate] = React.useState<Date | null>(new Date());
  const [time, setTime] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null, setter: any, key: string) => {
    console.log(newValue);
    setter(newValue);
    setValue((prev: IDateTimeValue) =>
      key === "date" ? { ...prev, date: newValue } : { ...prev, time: newValue }
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DesktopDatePicker
            className={cn("date-input")}
            label="Дата матча"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={(value) => handleChange(value, setDate, "date")}
            renderInput={(params) => <TextField {...params} />}
            disablePast={true}
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            className={cn("date-input")}
            label="Время матча"
            value={time}
            onChange={(value) => handleChange(value, setTime, "time")}
            renderInput={(params) => <TextField {...params} />}
            minutesStep={5}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
