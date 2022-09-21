import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  /* background: #000; */
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  padding: 0 4rem;
  z-index: 10;
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  & > * {
    padding: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;
