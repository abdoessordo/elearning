import StyledButton from "../StyledButton";
import { Nav, NavLink, Bars, NavMenu, Logo } from "./navbarComponents";

export default function navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo>LOGO</Logo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/Pricing" activeStyle>
            Pricing
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <StyledButton label="Login" route="/signin" size="mediun" />
        </NavMenu>
      </Nav>
    </>
  );
}
