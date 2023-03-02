import React from "react";
import {
  MenuWrapper,
  StyledMenu,
  LogoWrapper,
  MapWrapper,
  ExitBtn,
} from "./HideMenu.styles";
import LogoDark from "../../assets/img/logoDark.png";
import Backdrop from "../backdrop/Backdrop";
import { IoClose } from "react-icons/io5";
import { BsFillDoorClosedFill } from "react-icons/bs";
import Map from "../map/Map";

const HideMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  const links = [
    { id: 0, name: "wnioski do pobrania" },
    { id: 1, name: "kontakt z kancelarią" },
    { id: 2, name: "rewir komorniczy" },
    { id: 3, name: "spłać zadłużenie" },
  ];

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <MenuWrapper menuIsOpen={menuIsOpen}>
        <LogoWrapper>
          <img src={LogoDark} alt="" />
          <IoClose onClick={handleCloseMenu} />
        </LogoWrapper>
        <StyledMenu>
          {links.map(({ id, name }) => (
            <li key={id}>
              <a href="/">{name}</a>
            </li>
          ))}
        </StyledMenu>
        <MapWrapper>
          <Map />
        </MapWrapper>
        <ExitBtn>
          <button onClick={handleCloseMenu}>
            <BsFillDoorClosedFill />
            zamknij
          </button>
        </ExitBtn>
      </MenuWrapper>
      {menuIsOpen && <Backdrop />}
    </>
  );
};

export default HideMenu;
