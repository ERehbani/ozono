import useUserStore from "../../store/userStore";
import chaewon from "../../../public/chaweon.jpg";
import logoutIcon from '../../../public/svg/logout.svg'
import userIcon from '../../../public/svg/user.svg'
import configIcon from '../../../public/svg/username.svg'

function Navbar() {
  const userStore = useUserStore();
  const { user } = userStore;
  return (
    <div>
      <div className="bg-[#377AE6] text-white h-max">
        <div className="w-[90%] mx-auto p-3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-transparent">
              <img src={chaewon} className="w-12 rounded-full" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
              <li>
                <a><img src={userIcon} alt="logout" className="w-5"/>Profile</a>
              </li>
              <li>
                <a><img src={configIcon} alt="logout" className="w-5"/>Configuración</a>
              </li>
              <li className="flex">
               
                <a> <img src={logoutIcon} alt="logout" className="w-5"/> Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
