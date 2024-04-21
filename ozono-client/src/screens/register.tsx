import { FormControl } from "@mui/base";

import { Box, keyframes } from "@mui/system";
import ButtonStyled from "../components/buttons/buttonStyled";

import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterSchema } from "../schemas/register-schema";
import { useState } from "react";
import Label from "../components/form/label";
import StyledInput from "../components/form/styledInput";
import PasswordInput from "../components/form/passwordInput";
import CountrySelect from "../components/form/countrySelect";

function Register() {
  const navigate = useNavigate();
  const [urlImage, setUrlImage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      country: "",
      city: "",
      image: urlImage || "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        const result = await axios.post(
          "http://localhost:3001/user/register",
          values
        );
        console.log(result);
        navigate("/login");
      } catch (error) {
        console.log(error);
        toast.error("Error al crear usuario", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  });

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "Preset_Ozono");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dmnb6cfzj/image/upload",
      data
    );
    console.log(response.data);
    const newUrlImage = response.data.secure_url;
    setUrlImage(newUrlImage);
    formik.setFieldValue("image", newUrlImage);
  };

  console.log(formik.values);
  return (
    <div className="flex justify-center flex-col h-max items-center w-[80%] mt-3 mb-12 mx-auto font-sans">
      <ToastContainer />
      <h1 className="text-4xl w-full">Registrarse</h1>

      {urlImage && (
        <div className="flex gap-5 items-center">
          <img alt="image" src={urlImage} className="w-24 h-24 rounded-full" />
          <button
            type="button"
            onClick={() => setUrlImage("")}
            className="btn btn-circle w-3 h-3 flex justify-center items-center text-sm font-semibold border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
            <img src="./svg/delete.svg" alt="delete" />
          </button>
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleImage} className="file-input" />
      <FormControl>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 p-5 bg-white rounded-xl max-h-[640.88px] overflow-y-auto shadow-md w-[446px] max-w-[446px] animate-fade-in-down">
          <Label>Usuario</Label>
          <StyledInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.username}
            name="username"
            id="username"
            placeholder="Usuario"
            img="./svg/username.svg"
          />
          {formik.errors.username && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.username}</span>
            </div>
          )}
          <Label>Nombre</Label>
          <StyledInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.first_name}
            name="first_name"
            id="first_name"
            placeholder="Nombre"
            img="./svg/user.svg"
          />
          {formik.errors.first_name && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.first_name}</span>
            </div>
          )}
          <Label>Apellido</Label>
          <StyledInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.last_name}
            name="last_name"
            id="last_name"
            placeholder="Apellido"
            img="./svg/user.svg"
          />
          {formik.errors.last_name && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.last_name}</span>
            </div>
          )}
          <Label>Email</Label>
          <StyledInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.email}
            name="email"
            id="email"
            placeholder="email@gmail.com"
            img="./svg/email.svg"
          />
          {formik.errors.email && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.email}</span>
            </div>
          )}
          <Label>Contraseña</Label>
          <PasswordInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.password}
            name="password"
            id="password"
            placeholder="Password"
            img="./svg/password.svg"
          />
          {formik.errors.password && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.password}</span>
            </div>
          )}
          <Label>País</Label>
          <CountrySelect
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            values={formik.values.country}
            name="country"
            id="country"
          />
          {formik.errors.country && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.country}</span>
            </div>
          )}
          <Label>Ciudad</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
            name="city"
            id="city"
            placeholder="Ciudad"
            img="./svg/map-pin.svg"
          />
          {formik.errors.city && (
            <div
              role="alert"
              className="alert alert-error max-w-full max-h-14 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">{formik.errors.city}</span>
            </div>
          )}
          <ButtonStyled
            disabled={!(formik.dirty && formik.isValid)}
            type="submit">
            Registrarse
          </ButtonStyled>
        </form>
      </FormControl>
    </div>
  );
}

export default Register;
