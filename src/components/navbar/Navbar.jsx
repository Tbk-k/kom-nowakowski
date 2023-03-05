import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Navbar = ({ setMenuIsOpen }) => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback((e) => {
    let scrollY = window.scrollY;
    setIsScroll(scrollY > 30);
  }, []);

  const handleOpenMenu = useCallback(() => {
    setMenuIsOpen(true);
  }, [setMenuIsOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navigate = useNavigate();

  const logo = useMemo(() => (isScroll ? LogoDark : LogoWhite), [isScroll]);

  return (
    <StyledNav isScroll={isScroll}>
      <BtnWrapper>
        <ContactBtn
          onClick={() => {
            navigate("/kontakt");
          }}
        >
          kontakt z kancelarią
        </ContactBtn>
        <RepayBtn>spłać zadłużenie</RepayBtn>
      </BtnWrapper>
      <StyledBtn isScroll={isScroll} className="mail-box">
        <BsMailbox
          onClick={() => {
            navigate("/kontakt");
          }}
        />
      </StyledBtn>
      <img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <StyledBtn isScroll={isScroll}>
        <CgMenu onClick={handleOpenMenu} />
      </StyledBtn>
    </StyledNav>
  );
};

export default memo(Navbar);
