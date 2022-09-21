import { SidebarData } from "./SidebarData";
import MenuItem from "./MenuItem";
import styled from "styled-components";

export default function Sidebar() {
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
  margin-top: 2rem;
`;
