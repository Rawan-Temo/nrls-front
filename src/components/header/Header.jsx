import "./style.css";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronDown,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import Tooltip from "../tooltip/Tooltip";
import useDarkMode from "./../../hooks/useDarkMode";
import { homeRoutes } from "../../constant/pageRoutes";
import Search from "./Search";
import { useAuth } from "../../context/AuthContext";
import { mediaTyps, publicationTyps, topicTyps } from "../../constant/enums";
import NestedMenu from "./NestedMenu";

const Header = () => {
  const { user } = useAuth();
  const currentDate = useMemo(
    () =>
      new Date().toLocaleDateString("ar-SY", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        numberingSystem: "latn",
      }),
    [],
  );

  const { changeMode } = useDarkMode();

  return (
    <>
      <div className="top-header container">
        <div>
          <div className="date">
            {currentDate}
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div className="language">
            <Tooltip text={"language"} placement="bottom">
              <span className="current-language">
                AR <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Tooltip>
          </div>

          <Tooltip text={"mode"} placement="bottom" onClick={changeMode}>
            <FontAwesomeIcon icon={faMoon} className="mode" />
          </Tooltip>
        </div>

        <Link className="logo" to={"/"}>
          مركز روجافا للدراسات الاستراتيجية
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="bottom-header container">
        <nav>
          <NavLink to={"/"} className="link">
            home
          </NavLink>

          <NestedMenu name={"topics"} values={topicTyps} />
          <NestedMenu name={"media"} values={mediaTyps} />
          <NestedMenu name={"publication"} values={publicationTyps} />

          <NavLink to={"/event"} className="link">
            event
          </NavLink>

          <NavLink to={"/survey"} className="link">
            survey
          </NavLink>

          <NavLink to={homeRoutes.about} className="link">
            about
          </NavLink>

          <NavLink to={homeRoutes.contact} className="link">
            contact us
          </NavLink>

          {user ? (
            <NavLink to={homeRoutes.dashboard} className="link">
              dashboard
            </NavLink>
          ) : (
            <NavLink to={homeRoutes.login} className="link">
              login
            </NavLink>
          )}
        </nav>

        <Search />
      </div>
    </>
  );
};

export default Header;
