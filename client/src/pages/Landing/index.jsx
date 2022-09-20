import Navbar from "../../components/Navbar";
import Content from "./components/content";
import styled from "styled-components";
import bg from "./BG.svg";

export default function landing() {
  return (
    <Background>
      <Navbar />
      <Content />
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    overflow-x: unset;
    overflow-y: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
