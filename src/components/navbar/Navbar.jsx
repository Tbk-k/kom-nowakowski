import React, { memo, useEffect, useState } from "react";
import {
  BtnWrapper,
  ContactBtn,
  RepayBtn,
  StyledBtn,
  StyledNav,
} from "./Navbar.styles";
import { BsMailbox } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import LogoDark from "../../assets/img/logoDark.png";
import LogoWhite from "../../assets/img/logoLight.png";

const Navbar = ({ setMenuIsOpen }) => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = (e) => {
    let scrollY = window.scrollY;
    setIsScroll(scrollY > 30 ? true : false);
  };

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let logo = isScroll ? LogoDark : LogoWhite;

  return (
    <StyledNav isScroll={isScroll}>
      <BtnWrapper>
        <ContactBtn>kontakt z kancelarią</ContactBtn>
        <RepayBtn>spłać zadłużenie</RepayBtn>
      </BtnWrapper>
      <StyledBtn isScroll={isScroll} className="mail-box">
        <BsMailbox />
      </StyledBtn>
      <img src={logo} alt="" />
      <StyledBtn isScroll={isScroll}>
        <CgMenu onClick={handleOpenMenu} />
      </StyledBtn>
    </StyledNav>
  );
};

export default memo(Navbar);
