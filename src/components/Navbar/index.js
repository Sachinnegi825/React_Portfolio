import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  Button,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Span style={{ margin: "0.5rem" }}>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen && <FaBars />}
          {isOpen && <IoCloseSharp />}
        </MobileIcon>
        <NavItems>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <Button href={Bio.github} target="_blank">
            Github
          </Button>
          <Button href={Bio.linkedin} target="_blank">
            LinkedIn
          </Button>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <Button
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
            </Button>
            <Button
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
