import React from "react";
import "../assets/css/Dashboard.css";
import Sidebar from "../compenents/ReactSideNav.jsx";
import SideNavbar from "../compenents/SideNavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SideBarContainer = styled.div`
  width: auto;
  position: relative;
  top: 0;
  height: inherit;
`;

const TestBox = styled.div`
  background-color: blue
  height: 100px;
  width: 100px;
  top: 0;
  position: sticky;
  z-index: 2;`;

function Dashboard() {
  return (
    <>
      <Container>
        <SideNavbar />

        <div style={{ zIndex: "2" }}>
          <h1>admin</h1>
          <div className="container">
            <div className="item item1">1</div>
            <div className="item item2">2</div>
            <div className="item item3">3</div>
            <div className="item item4">4</div>
            <div className="item item5">5</div>
            <div className="item item6">6</div>
            <div className="item item7">7</div>
            <div className="item item8">8</div>
            <div className="item item9">9</div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
