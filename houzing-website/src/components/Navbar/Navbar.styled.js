import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
`;

const Container = styled.div`
  /* max-width: 1440px; */
  max-width: 1336px;
  /* width: 1180px; */
  width: 1076px;
  padding: 0 130px;
  margin: 0 auto;
`;
const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  .active {
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid;
  }
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Title = styled.span`
  display: inline-block;
  text-transform: capitalize;
  margin-left: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 16px;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li:not(:first-child) {
    margin-left: 64px;
  }
`;

const NavItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
const Link = styled(NavLink)`
  color: var(--white-color);
`;

export { Wrapper, Container, NavWrapper, Logo, NavItems, NavItem, Link };
