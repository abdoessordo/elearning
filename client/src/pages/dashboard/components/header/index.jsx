import React from "react";
import styled from "styled-components";
import { VscBellDot } from "react-icons/vsc";
import { TbSearch } from "react-icons/tb";

export default function Header() {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <SearchBar>
          <div
            style={{
              padding: "0 0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TbSearch size={30} />
          </div>
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </SearchBar>
        <IconWrapper>
          <VscBellDot size={30} />
        </IconWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1.8rem 1rem;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color: #333;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0 1rem;
`;
