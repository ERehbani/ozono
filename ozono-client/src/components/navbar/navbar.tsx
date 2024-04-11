import { Box } from "@mui/system";
import MenuSimple from "../menu/menuUser";
import useUserStore from "../../store/userStore";

function Navbar() {

  const userStore = useUserStore()
  const { user } = userStore
  console.log(user)
  const image = user && user.image ? user.image : "";

  console.log(image)
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
              src={"./chaweon.jpg"}
              sx={{ width: "50px", borderRadius: "100%", bgcolor: 'transparent' }}
            />
          </MenuSimple>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
