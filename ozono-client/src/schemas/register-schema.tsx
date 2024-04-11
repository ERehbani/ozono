/* eslint-disable no-useless-escape */
import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/;

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "El nombre de usuario debe contener mas de 5 caracteres")
    .max(20, "El nombre de usuario es demasiado largo"),
  first_name: yup
    .string()
    .min(4, "El nombre debe ser de al menos 4 letras")
    .max(25, "El nombre es demasiado largo"),
  last_name: yup
    .string()
    .min(3, "El apellido debe contener al menos 3 caracteres")
    .max(25, "El apellido es demasiado largo"),
  email: yup
    .string()
    .min(5, "El mail es demasiado corto")
    .required("Requerido, por favor ingrese su correo electronico completo")
    .matches(
      /^[^@]+@[^@]+\.[^@]+$/,
      "El correo electrónico debe contener '@' antes de '.'"
    ),
  password: yup
    .string()
    .required("Por favor, ingrese su contraseña")
    .matches(
      passwordRules,
      "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial: ! @ # . * % & @"
    ),
  country: yup
    .string()
    .min(4, "El país escrito no es aceptado")
    .max(30, "El país escrito no es aceptado"),
  city: yup
    .string()
    .min(4, "La ciudad escrita no es aceptada")
    .max(25, "La ciudad escrita no es aceptada"),
});

export const LoginSchema = yup.object().shape({
  email: yup
  .string()
  .min(5, "El mail es demasiado corto")
  .required("Requerido, por favor ingrese su correo electronico completo")
  .matches(
    /^[^@]+@[^@]+\.[^@]+$/,
    "El correo electrónico debe contener '@' antes de '.'"
  ),
password: yup
  .string()
  .required("Por favor, ingrese su contraseña")
  .matches(
    passwordRules,
    "Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial: ! @ # . * % & @"
  ),
})