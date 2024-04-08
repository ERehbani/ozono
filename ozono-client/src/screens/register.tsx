import { FormControl } from "@mui/base";
import { StyledInput } from "../components/input/FormInput";
import { Label } from "../components/input/Label";
import { Box, keyframes } from "@mui/system";
import ButtonStyled from "../components/buttons/buttonStyled";
import { Typography } from "@mui/material";


function Register() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        height: 'max-content',
        alignItems: "center",
        width: "max-content",
        m: "50px auto",
        fontFamily: 'sans-serif',
      }}>
        <Typography component={"h1"} sx={{fontSize: "40px"}}>Registrarse</Typography>
      <FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            animation: `${fadeInDown} 0.5s ease-out`,
          }}>
          <Box>
            <Label>Usuario</Label>
            <StyledInput placeholder="Usuario" />
          </Box>
          <Box>
            <Label>Nombre</Label>
            <StyledInput placeholder="Nombre" />
          </Box>
          <Box>
            <Label>Apellido</Label>
            <StyledInput placeholder="Apellido" />
          </Box>
          <Box>
            <Label>Email</Label>
            <StyledInput placeholder="Email" />
          </Box>
          <Box>
            <Label>Contraseña</Label>
            <StyledInput placeholder="Contraseña" type="password" />
          </Box>
          <Box>
            <Label>País</Label>
            <StyledInput placeholder="Nombre" />
          </Box>
          <Box>
            <Label>Ciudad</Label>
            <StyledInput placeholder="Nombre" />
          </Box>
          <ButtonStyled>Registrarse</ButtonStyled>
        </Box>
      </FormControl>
    </Box>
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
