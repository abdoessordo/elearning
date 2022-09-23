import { SidebarData } from "./SidebarData";
import MenuItem from "./MenuItem";
import styled from "styled-components";

export default function SidebarMenu() {
  return (
    <Wrapper>
      {SidebarData.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;





