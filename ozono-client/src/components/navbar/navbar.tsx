import { Box } from "@mui/system";
import MenuSimple from "../menu/menuUser";
import useUserStore from "../../store/userStore";

function Navbar() {

  const userStore = useUserStore()
  const { user } = userStore
  
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
              src={user.image|| './chaewon.jpg'}
              sx={{ width: "50px", borderRadius: "100%", bgcolor: 'transparent' }}
            />
          </MenuSimple>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
