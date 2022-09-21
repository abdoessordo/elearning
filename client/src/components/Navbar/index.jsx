import StyledButton from "../StyledButton";
import Logo from "../Logo";
import { Nav, NavLink, Bars, NavMenu } from "./navbarComponents";

export default function navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo />
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
