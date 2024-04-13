import { FormControl } from "@mui/base";
import { Label } from "../components/input/Label";
import { Box, keyframes, styled } from "@mui/system";
import ButtonStyled from "../components/buttons/buttonStyled";
import {
  FormHelperText,
  Input,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterSchema } from "../schemas/register-schema";
import { useState } from "react";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
const StyledInput = styled(Input)(
  ({ theme }) => `
    .MuiInput-input {
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      box-shadow: 0px 2px 2px ${
        theme.palette.mode === "dark" ? grey[900] : grey[50]
      };
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
    }
  `
);

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

  console.log(formik.values.image);
  return (
    <div className="flex justify-center flex-col h-max items-center w-[80%] mt-3 mb-12 mx-auto font-sans">
      <ToastContainer />
      <h1 className="text-4xl w-full">Registrarse</h1>

      {urlImage && (
        <div className="flex gap-5 items-center">
          <img alt="image" src={urlImage} className="w-24 h-24 rounded-full" />
          <button
            type="button"
            className="py-1 px-2 flex justify-center items-center size-[30px] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
            <img src="./svg/delete.svg" alt="delete" />
          </button>
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleImage} />
      <FormControl>
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "20px",
            borderRadius: "10px",
            maxHeight: "640.88px",
            overflowY: "auto",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            animation: `${fadeInDown} 0.5s ease-out`,
          }}>
          <span className="w-fit inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Usuario
          </span>
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            name="username"
            id="username"
            placeholder="Usuario"
          />
          {formik.errors.username && (
            <p
              className="text-center text-red-500"
              id="username-error"
             >
              {formik.errors.username}
            </p>
          )}
          <Label>Nombre</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.first_name}
            name="first_name"
            id="first_name"
            placeholder="Nombre"
          />{" "}
          {formik.errors.first_name && (
            <FormHelperText
              error
              id="first_name-error"
              sx={{
                textAlign: "center",
              }}>
              {formik.errors.first_name}
            </FormHelperText>
          )}
          <Label>Apellido</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.last_name}
            name="last_name"
            id="last_name"
            placeholder="Apellido"
          />{" "}
          {formik.errors.last_name && (
            <FormHelperText
              error
              id="last_name-error"
              sx={{
                textAlign: "center",
              }}>
              {formik.errors.last_name}
            </FormHelperText>
          )}
          <Label>Email</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            id="email"
            placeholder="Email"
          />{" "}
          {formik.errors.email && (
            <FormHelperText
              error
              id="email-error"
              sx={{
                textAlign: "center",
              }}>
              {formik.errors.email}
            </FormHelperText>
          )}
          <Label>Contraseña</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            id="password"
            placeholder="Contraseña"
            type="password"
          />{" "}
          {formik.errors.password && (
            <FormHelperText
              error
              id="password-error"
              sx={{
                textAlign: "center",
                maxWidth: "346px",
              }}>
              {formik.errors.password}
            </FormHelperText>
          )}
          <Label>País</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.country}
            name="country"
            id="country"
            placeholder="País"
          />{" "}
          {formik.errors.country && (
            <FormHelperText
              error
              id="country-error"
              sx={{
                textAlign: "center",
              }}>
              {formik.errors.country}
            </FormHelperText>
          )}
          <Label>Ciudad</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
            name="city"
            id="city"
            placeholder="Ciudad"
          />{" "}
          {formik.errors.city && (
            <FormHelperText
              error
              id="city-error"
              sx={{
                textAlign: "center",
              }}>
              {formik.errors.city}
            </FormHelperText>
          )}
          <ButtonStyled
            disabled={!(formik.dirty && formik.isValid)}
            type="submit">
            Registrarse
          </ButtonStyled>
        </Box>
      </FormControl>
    </div>
  );
}

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -5%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export default Register;
