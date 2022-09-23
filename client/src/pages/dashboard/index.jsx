import styled from "styled-components";
import DataTable from "../../components/DataTable";
import Logo from "../../components/Logo";
import SidebarMenu from "../../components/SidebarMenu";
import Header from "./components/header";
import NewCourses from "./components/NewCourses";
import { TbLogout } from "react-icons/tb";
import MenuItem from "../../components/SidebarMenu/MenuItem";
import GetPremium from "./components/GetPremium";

export default function Dashboard() {
  return (
    <Wrapper>
      <Left>
        <Logo />
        <Sidebar>
          <SidebarMenu />
          <Down>
            <GetPremium />
            <MenuItem title="Logout" path="/logout" icon={<TbLogout />} />
          </Down>
        </Sidebar>
      </Left>
      <div style={{ padding: "0 2rem" }}>
        <Header />
        <Context>
          <Mid>
            <NewCourses />
            <DataTable title="My Courses" />
          </Mid>
          <Right></Right>
        </Context>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1.5fr 5.5fr 2.5fr; */
  grid-template-columns: 1.5fr 8.5fr;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #f5f5f5;
`;

const Context = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 3.5fr;
`;

const Left = styled.div`
  padding: 0 2rem;
  height: 100%;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

const Down = styled.div`
  margin-top: auto;
`;

const Mid = styled.div`
  /* background-color: #fff; */
  padding-right: 2rem;
`;

const Right = styled.div`
  background-color: blue;
`;
