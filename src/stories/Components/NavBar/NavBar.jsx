import cntl from "cntl";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ESLogo from "../../assets/images/es-logo.png";
import searchIcon from "../../assets/images/searchIcon.svg";
import question from "../../assets/images/question.svg";
import bell from "../../assets/images/bell.svg";
import cog from "../../assets/images/cog.svg";
import Avatar from "../../assets/images/avatar.png";
import Chevron from "../Chevron/Chevron";
import Input from "../Input/Input";

const containerCN = cntl`
  flex
  width-full
  bg-gray-500
  items-center
  justify-between
  px-3
`;

const logoContainerCN = cntl`
  m-3
  ml-0
  flex
  items-center
  cursor-pointer
`;

const logoCN = cntl`
  rounded
  h-12
`;

const iconCN = cntl`
rounded
h-10
filter-green
`;

const estatespaceTextCN = cntl`
  font-semibold
  ml-2
`;

const avatarCN = cntl`
  bg-brandGreen
  rounded
  w-10
  h-10
  flex
  items-center
  justify-center
`;
const menuButtonCN = cntl`
  pr-10
  pl-2
  py-2
`;

const NavBar = ({ onLogoutClick, onLogoClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onLogoKeyDown = (event) => {
    if (event.key === "Enter") {
      // on enter
      onLogoClick();
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.removeEventListener("click", closeMenu);
  };

  const onShowMenuClick = () => {
    setShowMenu(true);
    document.addEventListener("click", closeMenu);
  };

  return (
    <div className={containerCN}>
      <div
        className={logoContainerCN}
        onClick={onLogoClick}
        onKeyDown={onLogoKeyDown}
        role="button"
        tabIndex={0}
      >
        <img className={logoCN} alt="ESLogo" src={ESLogo} />
        <p className={estatespaceTextCN}>ESTATESPACE</p>
        <Chevron className="w-2 transform rotate-90 ml-2" />
      </div>
      <Input placeholder="Search EstateSpace" icon={searchIcon} />
      <button onClick={onShowMenuClick} type="button">
        <div className="flex items-center mr-2">
          <img className={iconCN} alt="question" src={question} />
          <img className={logoCN} alt="bell" src={bell} />
          <img className={logoCN} alt="cogwheel" src={cog} />
          <div className={avatarCN}>
            <img className={logoCN} alt="ESLogo" src={Avatar} />
          </div>
          <Chevron className="w-2 transform rotate-90 ml-2" />
        </div>
      </button>
      {showMenu && (
        <div className="absolute top-16 right-2 z-50 bg-gray-300 flex flex-col">
          <button
            className={menuButtonCN}
            type="button"
            onClick={onLogoutClick}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

NavBar.propTypes = {
  /**
   * temp way to logout during dev
   */
  onLogoutClick: PropTypes.func,
  /**
   * function called when the estatespace logo is clicked
   */
  onLogoClick: PropTypes.func,
  /**
   * object containing avatar image or initials
   */
  avatar: PropTypes.shape({
    image: PropTypes.string,
    initials: PropTypes.string,
  }),
};

NavBar.defaultProps = {
  onLogoutClick: null,
  onLogoClick: null,
  avatar: undefined,
};

export default NavBar;
