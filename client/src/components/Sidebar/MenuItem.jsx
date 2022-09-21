import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export default function MenuItem({ title, path, icon }) {
  return (
    <MenueButton to={path} activeStyle>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </MenueButton>
  );
}

const Title = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenueButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 0.7rem;
  transition: all 0.2s ease-in-out;

  &.active {
    background-color: #e9e3fd;
    ${Title} {
      color: #000;
      font-weight: 500;
    }

    ${Icon} {
      path,
      polyline,
      rect,
      line,
      circle {
        color: black;
      }
    }
  }

  &:not(.active):hover {
    background-color: #e9e3fda6;
  }
`;
