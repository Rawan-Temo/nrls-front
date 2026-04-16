import "./style.css";
import { NavLink } from "react-router";
import { homeRoutes } from "../../constant/pageRoutes";
import Search from "./Search";
import { useAuth } from "../../context/AuthContext";
import { mediaTyps, publicationTyps, topicTyps } from "../../constant/enums";
import NestedMenu from "./NestedMenu";
import TopHeader from "./TopHeader";
import IconButton from "./../buttons/IconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { isOpen, ref, toggleOpen } = useClickOutside();

  return (
    <>
      <TopHeader />

      <div className="bottom-header container" ref={ref}>
        <IconButton icon={faBars} className="menu" onClick={toggleOpen} />

        <nav className={isOpen ? "open" : ""}>
          <NavLink to={"/"} className="link">
            {t("header.home")}
          </NavLink>

          <NestedMenu name={"topics"} values={topicTyps} t={t} />
          <NestedMenu name={"media"} values={mediaTyps} t={t} />
          <NestedMenu name={"publication"} values={publicationTyps} t={t} />

          <NavLink to={"/event"} className="link">
            {t("header.events")}
          </NavLink>

          <NavLink to={"/survey"} className="link">
            {t("header.surveys")}
          </NavLink>

          <NavLink to={homeRoutes.about} className="link">
            {t("header.about")}
          </NavLink>

          <NavLink to={homeRoutes.contact} className="link">
            {t("header.contact")}
          </NavLink>

          {user ? (
            <NavLink to={homeRoutes.dashboard} className="link">
              {t("header.dashboard")}
            </NavLink>
          ) : (
            <NavLink to={homeRoutes.login} className="link">
              {t("header.login")}
            </NavLink>
          )}
        </nav>

        <Search />
      </div>
    </>
  );
};

export default Header;
