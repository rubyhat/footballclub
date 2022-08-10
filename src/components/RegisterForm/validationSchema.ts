import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Такой почты не существует")
    .required("Поле обязательно для заполнения"),
  phone: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(6, "Проверьте корректность введеного номера")
    .max(20, "Проверьте корректность введеного номера"),
  password: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(6, "Пароль не может быть меньше 6 символов")
    .max(50, "Максимум 50 символов"),
  repassword: Yup.string()
    .required("Поле обязательно для заполнения")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
  userName: Yup.string()
    .required("Поле обязательно для заполнения")
    .min(3, "Слишком короткое имя")
    .max(99, "Слишком длинное имя"),
});

export default validationSchema;
