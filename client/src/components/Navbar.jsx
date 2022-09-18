import styled from "styled-components";

export default function navbar() {
  return (
    <Navbar>
      <h1>My Portfolio</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: #fff;
`;
