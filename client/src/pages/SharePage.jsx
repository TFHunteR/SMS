import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../compenents/ReactSideNav.jsx";
import styled from "styled-components";
import SideNavbar from "../compenents/SideNavBar.jsx";
import Navbar from "../compenents/Navbar.jsx";

const Container = styled.div`
  display: flex;
  height: auto;
  min-width: 1080px;
`;

const Left = styled.div`
  height: inherit;
  width: auto;
  background-color: red;
`;

const Right = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const NavBarContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #245B84;
`;

const SharePage = () => {
  return (
    <>
      <Container>
        <Left>
          <SideNavbar />
        </Left>

        <Right>
          <NavBarContainer><Navbar /></NavBarContainer>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Right>
      </Container>
    </>
  );
};

export default SharePage;
