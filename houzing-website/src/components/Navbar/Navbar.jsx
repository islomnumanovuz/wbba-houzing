import React from "react";
import {
  Wrapper,
  Container,
  NavWrapper,
  Logo,
  NavItems,
  NavItem,
  Link,
} from "./Navbar.styled";
import { ReactComponent as LogoImg } from "../../assets/svg/logo.svg";
import { navbar } from "../../utils/navbar";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "../../pages/Generic/Button";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Container>
          <NavWrapper>
            <Logo onClick={() => navigate("/home")}>
              <LogoImg />
              <Logo.Title>Houzing</Logo.Title>
            </Logo>
            <NavItems>
              {navbar.map(({ id, path, title }) => {
                return (
                  <NavItem>
                    <Link key={id} to={path}>
                      {title.slice(0, 1).toUpperCase() + title.slice(1)}
                    </Link>
                  </NavItem>
                );
              })}
            </NavItems>
            <Button
              color={"#fff"}
              pt={12}
              pb={12}
              pr={40}
              pl={40}
              type={"secondary"}
            >
              Login
            </Button>
          </NavWrapper>
        </Container>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
