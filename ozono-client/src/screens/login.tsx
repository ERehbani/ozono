import { FormControl, FormHelperText, Input, Typography } from "@mui/material";
import { Box, keyframes, styled } from "@mui/system";
import ButtonStyled from "../components/buttons/buttonStyled";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/register-schema";
import { useNavigate } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../store/userStore";
import Label from "../components/form/label";

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

function Login() {
  const userStore = useUserStore()

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const result = await userStore.login(values)
        console.log(result);
        navigate("/");
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "80vh",
        alignItems: "center",
        width: "80%",
        m: "10px auto 50px auto",
        fontFamily: "sans-serif",
      }}>
      <ToastContainer />
      <Typography component={"h1"} sx={{ fontSize: "40px", width: "100%" }}>
        Iniciar Sesión
      </Typography>
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
        <FormControl>
          <Label>Email</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            id="email"
            placeholder="Email"
          />
          {formik.errors.email && (
            <FormHelperText
              error
              id="email-error"
              sx={{
                textAlign: "center",
                maxWidth: "300px",
              }}>
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <Label>Contraseña</Label>
          <StyledInput
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            id="password"
            placeholder="Contraseña"
            type="password"
          />
          {formik.errors.password && (
            <FormHelperText
              error
              id="password-error"
              sx={{
                textAlign: "center",
                maxWidth: "300px",
              }}>
              {formik.errors.password}
            </FormHelperText>
          )}
        </FormControl>
        <ButtonStyled
          disabled={!(formik.dirty && formik.isValid)}
          type="submit">
          Iniciar Sesión
        </ButtonStyled>
      </Box>
    </Box>
  );
}

export default Login;
