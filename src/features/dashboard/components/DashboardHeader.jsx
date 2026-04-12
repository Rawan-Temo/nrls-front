import {
  faBarsStaggered,
  faChartLine,
  faMoon,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../../../components/buttons/IconButton";
import { useState } from "react";
import useDarkMode from "./../../../hooks/useDarkMode";
import ConfirmPopUp from "../../../components/popup/ConfirmPopUp";
import { useAuth } from "../../../context/AuthContext";
import Language from "./Language";
import Search from "./Search";

const DashboardHeader = ({ isClosed, toggleClose }) => {
  const { logout } = useAuth();

  const { changeMode } = useDarkMode();

  const [logoutPopup, setLogoutPopup] = useState(false);

  return (
    <>
      <header className={`dashboard-header ${isClosed ? "closed" : ""}`}>
        <div className="sidebar-section">
          <h2>
            <FontAwesomeIcon icon={faChartLine} /> dashboard
          </h2>
          <IconButton onClick={toggleClose}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </IconButton>
        </div>
        <div className="header">
          <Search />

          <div className="icons">
            <IconButton
              color="secondry-color"
              title="mode"
              onClick={changeMode}
            >
              <FontAwesomeIcon icon={faMoon} />
            </IconButton>

            <Language />

            <IconButton
              color="delete"
              title="logout"
              styleType="transparent"
              onClick={() => setLogoutPopup(true)}
              icon={faSignOut}
            />
          </div>
        </div>
      </header>

      <ConfirmPopUp
        isOpen={logoutPopup}
        onClose={() => setLogoutPopup(false)}
        onConfirm={logout}
      />
    </>
  );
};

export default DashboardHeader;
