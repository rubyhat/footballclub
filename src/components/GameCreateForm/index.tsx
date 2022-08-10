import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@mui/material";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import validationSchema from "./validationSchema";
import DateTimePicker from "../DateTimePicker";
import { IDateTimeValue } from "../DateTimePicker/interfaces";

type FormValues = {
  address: string;
  addressLink: string;
  date: string;
  time: string;
  description: string;
  playersCount: number;
};

const GameCreateForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });

  const cn = classNames.bind(styles);

  const onSubmit = handleSubmit((data) => console.log(data));

  const [dateTimeValue, setDateTimeValue] = React.useState<IDateTimeValue>({
    date: new Date(),
    time: new Date(),
  });

  useEffect(() => {
    console.log(dateTimeValue);
  }, [dateTimeValue]);

  return (
    <form className={cn(["form"])} onSubmit={onSubmit}>
      <Typography sx={{ mb: "0.5rem" }} variant="h5">
        Создание сбора на матч
      </Typography>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.address}
          {...register("address")}
          helperText={errors?.address && `${errors.address.message}`}
          id="address"
          label="Адрес поля"
          variant="outlined"
          className={cn(["input"])}
          placeholder="Во дворе Гоголя 47 (муз. комедия)"
        />
      </Box>
      <DateTimePicker setValue={setDateTimeValue} />
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.playersCount}
          {...register("address")}
          helperText={errors?.playersCount && `${errors.playersCount.message}`}
          id="playersCount"
          label="Количество игроков"
          variant="outlined"
          className={cn(["input"])}
          placeholder="Например: 10"
          type="number"
          inputProps={{ min: 1, max: 100 }}
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.addressLink}
          {...register("address")}
          helperText={errors?.addressLink && `${errors.addressLink.message}`}
          id="addressLink"
          label="Ссылка на 2gis (необязательно)"
          variant="outlined"
          className={cn(["input"])}
          placeholder="https://2gis.ru"
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.description}
          {...register("description")}
          helperText={errors?.description && `${errors.description.message}`}
          id="description"
          label="Описание к сбору (необязательно)"
          variant="outlined"
          className={cn(["input"])}
          placeholder="Играем в мини футбол на сальце"
          rows={4}
          multiline={true}
        />
      </Box>
      <Button type="submit" variant="contained">
        Создать сбор
      </Button>
    </form>
  );
};

export default GameCreateForm;
