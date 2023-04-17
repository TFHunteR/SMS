import { TableContainer } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-width: 500px;
    height: 700px;
    border-radius: 10px;
    box-shadow: 0 0 7px lightgray;
    background-color:white;
    padding: 40px;
    `
const Title = styled.h1`
    margin-bottom: 40px;`

const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    grid-template-rows: 75px;
    gap: 60px;`

const InputName = styled.input`
    background-color: #F0F1F3;
    border: none;
    border-radius: 10px;
    color: gray;
    padding: 10px;
    font-size: 1.25rem;
    `
const ClassSelection = styled.select`
    background-color: #F0F1F3;
    border: none;
    border-radius: 10px;
    color: gray;
    padding: 10px;
    padding-right: 20px;
    font-size: 1.25rem;`

const SelectionItem = styled.option``

const ButtonSearch = styled.button`
    font-size: 1.25rem;
    color:white;
    background-color:red;
    border:none;
    border-radius: 10px;
    
    &:hover {
        background-color: #D00000;
    }`




const AllStudent = () => {
  return (
    <Container>
        <Title>All Students</Title>
        <SearchContainer>
            <InputName placeholder='Search by Name'/>
            <ClassSelection placeholder='Select Class'>
                <SelectionItem>Select Class</SelectionItem>
                <SelectionItem>Foo</SelectionItem>
                <SelectionItem>Foo</SelectionItem>
                <SelectionItem>Foo</SelectionItem>
                <SelectionItem>Foo</SelectionItem>
            </ClassSelection>
            <ButtonSearch>Search</ButtonSearch>
        </SearchContainer>
        <TableContainer>
            
        </TableContainer>
    </Container>
  )
}

export default AllStudent