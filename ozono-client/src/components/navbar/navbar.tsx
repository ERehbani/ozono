import { Box } from "@mui/system";
import MenuSimple from "../menu/menuUser";

function Navbar() {
  return (
    <Box component="div">
      <Box sx={{ bgcolor: "#377AE6", color: "white", height: "max-content" }}>
        <Box
          sx={{
            width: "90%",
            padding: "10px",
            mx: "auto",
          }}>
          <MenuSimple>
            <Box
              component={"img"}
              src="./chaweon.jpg"
              sx={{ width: "50px", borderRadius: "100%", bgcolor: 'transparent' }}
            />
          </MenuSimple>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
