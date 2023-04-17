import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px
`;

const PageHeader = styled.h1`
  width: 100%;
  margin: 20px;
`;

const LinkContainer = styled.ul`
  width: 100%;
  display: flex;
`;

const LinkItem = styled.li`
  list-style-type: none;
  margin: 0 10px;
`;

const NLink = styled.a``;

const AllStudent = () => {
  return (
    <Container>
      <PageHeader>Students</PageHeader>

      <LinkContainer>
        <LinkItem>
          <NLink href="#">Home</NLink>
        </LinkItem>
        {">"}
        <LinkItem>
          <NLink href="#">Students</NLink>
        </LinkItem>
      </LinkContainer>

      <div
        style={{
          height: "300px",
          width: "70%",
          border: "1px solid black",
        }}
      ></div>
    </Container>
  );
};

export default AllStudent;
