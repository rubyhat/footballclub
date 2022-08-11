import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, TextField, Typography } from "@mui/material";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import validationSchema from "./validationSchema";
import { useUser } from "../../store/user";
import { useNavigate } from "react-router-dom";

type FormValues = {
  phone: string;
  password: string;
};

// @todo: input phone mask
// @todo: input password show/hide icon

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });
  const navigate = useNavigate();

  const cn = classNames.bind(styles);

  const setIsAuth = useUser((state) => state.setIsAuth);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setIsAuth(true);
    navigate("/", { replace: true });
  });

  return (
    <form className={cn(["form"])} onSubmit={onSubmit}>
      <Typography sx={{ mb: "0.5rem" }} variant="h5">
        Вход в систему
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
          type="tel"
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
          type="password"
        />
      </Box>
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
