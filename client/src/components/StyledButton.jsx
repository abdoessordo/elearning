import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const themeColor = "#785983";

export default function StyledButton({ label, route, size, hide }) {
  return (
    <NavBtn>
      <NavBtnLink to={route} size={size} hide={hide}>
        {label}
      </NavBtnLink>
    </NavBtn>
  );
}

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return "0.5rem 1rem";
    case "medium":
      return "0.8rem 1.9rem";
    case "large":
      return "1.5rem 3rem";
    default:
      return "0.8rem 1.9rem";
  }
};

const handleHide = ({ children }) => {
  const { hide } = children.props;
  switch (hide) {
    case true:
      return "none";
    default:
      return "block";
  }
};

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${(props) => handleHide(props)};
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10rem;
  background: ${themeColor};
  padding: ${(props) => getSize(props)};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
  }
`;
