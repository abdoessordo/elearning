import React from "react";
import styled from "styled-components";
import { VscBell } from "react-icons/vsc";
import { TbSearch } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const handleDropDown = () => {
    const dropDownArrow = document.querySelector(".drop-down-arrow");
    const dropDownMenu = document.querySelector(".drop-down-menu");
    dropDownArrow.classList.toggle("rotate");
    dropDownMenu.classList.toggle("show");
  };
  return (
    <Wrapper>
      <Left>
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
      </Left>
      <Right>
        <IconWrapper>
          <HiOutlineShoppingCart size={30} />
          <Count>2</Count>
        </IconWrapper>
        <IconWrapper>
          <VscBell size={30} />
          <Count>4</Count>
        </IconWrapper>

        <Profile onClick={handleDropDown}>
          <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <h4>Nom Prenom</h4>
          <RiArrowDropDownLine size={30} className="drop-down-arrow" />
          <DropDownMenu className="drop-down-menu">
            <li>Profile</li>
            <li>My purchases</li>
            <li>Settings</li>
            <li>Logout</li>
          </DropDownMenu>
        </Profile>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;
  }

  & > *:first-child {
    margin-left: 0;
  }
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0.2rem;
`;

const Count = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  background-color: #ff0000;
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
`;

const DropDownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  display: none;
  z-index: 10;

  &.show {
    display: block;
  }

  li {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #f5f5f5;
    }
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  margin-left: 1rem;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }

  svg {
    margin-left: 0.5rem;

    &.drop-down-arrow {
      transition: all 0.3s ease;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }
`;



