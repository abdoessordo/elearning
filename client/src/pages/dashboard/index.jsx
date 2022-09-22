import styled from "styled-components";
import Logo from "../../components/Logo";
import Sidebar from "../../components/Sidebar";
import Header from "./components/header";
import NewCourses from "./components/NewCourses";

export default function Dashboard() {
  return (
    <Wrapper>
      <Left>
        <Logo />
        <Sidebar />
      </Left>
      <Mid>
        <Header />
        <NewCourses />
      </Mid>
      <Right></Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5.5fr 2.5fr;
  min-height: 100vh;
  padding-top: 2rem;
  background-color: #f5f5f5;
`;

const Left = styled.div`
  padding: 0 2rem;
`;

const Mid = styled.div`
  /* background-color: #fff; */
`;

const Right = styled.div`
  background-color: blue;
`;
