import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import validationSchema from "./validationSchema";

type FormValues = {
  email: string;
  phone: string;
  password: string;
  repassword: string;
  userName: string;
  companyName: string;
  companyAddress: string;
};

// @todo: input phone mask
// @todo: input password show/hide icon
// вынести инпуты в отдельный компонент

const RegisterForm = () => {
  const cn = classNames.bind(styles);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit((data) => console.log(data));
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <form className={cn(["form"])} onSubmit={onSubmit}>
      <Typography sx={{ mb: "0.5rem" }} variant="h5">
        Регистрация
      </Typography>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.phone}
          {...register("phone")}
          helperText={errors?.phone && `${errors.phone.message}`}
          id="phone"
          label="Телефон"
          variant="outlined"
          className={cn(["input"])}
          placeholder="+7 700 123 45 67"
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.password}
          {...register("password")}
          helperText={errors?.password && `${errors.password.message}`}
          id="password"
          label="Пароль"
          variant="outlined"
          className={cn(["input"])}
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.repassword}
          {...register("repassword")}
          helperText={errors?.repassword && `${errors.repassword.message}`}
          id="repassword"
          label="Подтверждение пароля"
          variant="outlined"
          className={cn(["input"])}
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <TextField
          error={!!errors?.userName}
          {...register("userName")}
          helperText={errors?.userName && `${errors.userName.message}`}
          id="userName"
          label="Имя"
          variant="outlined"
          className={cn(["input"])}
        />
      </Box>
      <Box className={cn(["input-field"])}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
          }
          label="Я согласен на сбор, обработку персональных данных и c политикой конфиденциальности"
          componentsProps={{
            typography: {
              sx: { fontSize: "14px", color: "#aaa" },
            },
          }}
        />
      </Box>
      <Button disabled={!isChecked} type="submit" variant="contained">
        Войти
      </Button>
    </form>
  );
};

export default RegisterForm;
