import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { studentList, studentList2 } from "../../data";
import "./style.css";
import ViewProfile from "../../compenents/ViewProfile";

const columnsHead = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "gender", label: "Gender", minWidth: 150 },
  { id: "c_name", label: "Class", minWidth: 150 },
  { id: "parent_name", label: "Parent", minWidth: 150 },
  { id: "addr", label: "Address", minWidth: 150 },
  { id: "dob", label: "Date of Birth", minWidth: 150 },
  { id: "phone_no", label: "Phone", minWidth: 150 },
];

const columnsHead2 = [
  { id: "std_id", label: "ID", minWidth: 50 },
  { id: "std_name", label: "Name", minWidth: 150 },
  { id: "std_gender", label: "Gender", minWidth: 75 },
  { id: "std_c_name", label: "Class", minWidth: 100 },
  { id: "std_parent_name", label: "Parent", minWidth: 120 },
  { id: "std_address", label: "Address", minWidth: 100 },
  { id: "std_dob", label: "Date of Birth", minWidth: 100 },
  { id: "std_phone_no", label: "Phone", minWidth: 100 },
];

const Container = styled.div`
  width: 100%;
  min-width: 500px;
  height: 1000px;
  border-radius: 10px;
  box-shadow: 0 0 7px lightgray;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  width: 100%;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-template-rows: 75px;
  gap: 60px;
  margin-bottom: 50px;
`;

const InputName = styled.input`
  background-color: #f0f1f3;
  border: none;
  border-radius: 10px;
  color: gray;
  padding: 10px;
  font-size: 1.25rem;
`;
const ClassSelection = styled.select`
  background-color: #f0f1f3;
  border: none;
  border-radius: 10px;
  color: gray;
  padding: 10px;
  padding-right: 20px;
  font-size: 1.25rem;
`;

const SelectionItem = styled.option``;

const ButtonSearch = styled.button`
  font-size: 1.25rem;
  color: white;
  background-color: red;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #d00000;
  }
`;

const PagerContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StudentTabRow = styled.tr``;

const AllStudent = () => {
  const column = columnsHead2;
  const [data, setData] = useState(studentList2);
  const [searchName, setSearchName] = useState("");
  const [className, setClassName] = useState("");
  const [classList, setClassList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    setClassList(studentList2.map((student) => student.std_c_name));
  }, []);

  const handleOnPageChange = useCallback(
    (event, newPage) => {
      setPage(newPage);
    },
    [rowPerPage, page]
  );

  const handleOnRowsPerChange = (e) => {
    console.log(e.targe.value);
  };

  const handlerSearch = async () => {
    if(searchName === '' && className === ''){
      setData(studentList2);
    }else if(searchName === '' && className !== ''){
      setData(studentList2.filter(student => {
        return className === student.std_c_name
      }))
    }else if(searchName !== '' && className === ''){
      setData(studentList2.filter(student => {
        return student.std_name.match(`.*${searchName}.*`)
      }))
    }else{
      setData(data.filter(student => {
        return (studentList2.std_name.match(`.*${searchName}.*`) &&
          className === student.std_c_name)
      }))
    }
    setSearchName('')
    setClassName('')
  };

  const handlerSearchName = (e) => {
    setSearchName(e.target.value);
    console.log(e.target.value);
  };

  const handleClassName = (e) => {
    setClassName(e.target.value);
    console.log(e.target.value);
  };

  const handlerTableRow = (event, student) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const handlerCloseDialog = () => {
    setOpen(false);
    setSelectedStudent(null);
    console.log('close')
  };

  return (
    <Container>
      <Title>All Students</Title>
      <SearchContainer>
        <InputName
          placeholder="Search by Name"
          onInput={handlerSearchName}
        />
        <ClassSelection
          placeholder="Select Class"
          onInput={handleClassName}
        >
          <SelectionItem value={""}>Select Class</SelectionItem>
          {classList.map((item) => (
            <SelectionItem value={item}>{item}</SelectionItem>
          ))}
        </ClassSelection>
        <ButtonSearch onClick={handlerSearch}>Search</ButtonSearch>
      </SearchContainer>
      <TableContainer
        component={Paper}
        sx={{
          border: "1px solid black",
          width: "100%",
        }}
      >
        <Table size="medium">
          <TableHead>
            {column.map((col) => {
              return (
                <TableCell
                  key={col.id}
                  style={{ minWidth: col.minWidth }}
                >
                  {col.label}
                </TableCell>
              );
            })}
          </TableHead>
          <TableBody>
            {data
              .slice(
                page * rowPerPage,
                page * rowPerPage + rowPerPage
              )
              .map((student) => (
                <TableRow
                  className="table-body-row"
                  hover
                  onClick={(event) => {
                    handlerTableRow(event, student);
                  }}
                  key={student.id}
                  style={{ cursor: "pointer" }}
                >
                  {column.map((col) => {
                    const value = student[col.id];
                    return (
                      <TableCell size="medium">
                        {value || "N/A"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PagerContainer>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={handleOnPageChange}
          onRowsPerPageChange={handleOnRowsPerChange}
          style={{ display: "flex", alignItems: "center" }}
        />
      </PagerContainer>

      <ViewProfile
        open={open}
        onClose={handlerCloseDialog}
        {...selectedStudent}
      />
    </Container>
  );
};

export default AllStudent;
