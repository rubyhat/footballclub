import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(6, "Проверьте корректность введеного номера")
    .max(20, "Проверьте корректность введеного номера"),
  password: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(6, "Пароль не может быть меньше 6 символов")
    .max(50, "Максимум 50 символов"),
});

export default validationSchema;
