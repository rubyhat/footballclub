import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  address: Yup.string()
    .min(10, "Слишком короткий адрес")
    .max(255, "Слишком длинный адрес")
    .required("Пожалуйста, введите адрес, где будет проходить игра"),
  addressLink: Yup.string()
    .url()
    .max(255, "Слишком длинная ссылка")
    .notRequired(),
  date: Yup.string().required(),
  time: Yup.string().required(),
  description: Yup.string().max(255, "Слишком длинное описание").notRequired(),
  playersCount: Yup.number()
    .min(2, "Минимум 2 игрока")
    .max(100, "Слишком много игроков")
    .required("Введите количество игроков"),
});

export default validationSchema;
