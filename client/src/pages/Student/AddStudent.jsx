import React, { createRef, useState } from "react";
import styled from "styled-components";
import DefaultImg from '../../assets/profile_default.svg'
import axiosClient from "../../AxiosClient";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
const Reminder = styled.p`
  font-size: 0.75rem;
  color: gray;`
const Form = styled.form``;
const InputContainer = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;
const InputItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;
const Input = styled.input`
  height: 30px;
  padding: 5px;`;
const InputRow = styled.div`
  display:flex;
  gap: 20px;`;
const Selection = styled.select`
  height: 30px;`;
const Option = styled.option``;
const StudentImage = styled.div`
  display:flex;
  align-items:center;
  padding: 0px 10px;`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  `;
const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-align:center;
  border:none;
  border-radius: 5px;
  color:white;
  background-color: red;
  background-color: #${props=>props.type === 'reset' && '2A5B84'};
  margin-right: 20px;`;

function AddStudent() {
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const genderRef = createRef();
  const dateOfBirthRef = createRef();
  const parentsGuardianRef = createRef();
  const cpNumberRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const classRef = createRef();

  const [studentImage, setStudentImage] = useState('')
  const handlerForm = (e) => {
    e.preventDefault();
    const payload = {
      std_first_name: firstNameRef.current.value,
      std_last_name: lastNameRef.current.value,
      std_gender: genderRef.current.value,
      std_date_of_birth: dateOfBirthRef.current.value,
      std_parents_guardian: parentsGuardianRef.current.value,
      std_cp_number: cpNumberRef.current.value,
      std_Email: emailRef.current.value,
      std_Password: passwordRef.current.value,
      std_Password_confirmation: passwordConfirmationRef.current.value,
      std_class: classRef.current.value,
      std_photo:null
    }

    axiosClient.post('/add_student', payload)
    .then(data=>{
      console.log(data)
    }).catch(err=> {
      
    })
  }

  const handlerSelectImg = (e) => {
    setStudentImage(e.target.value)
  }

  return (
    <Container>
      <Form onSubmit={handlerForm} method="post">
        <Title>Add Student</Title>
        <Reminder>Required(*)</Reminder>
        <InputContainer>
          <InputItem>
            <Label for="std_FirstN">First Name*:</Label>
            <Input
              ref={firstNameRef}
              type="text"
              id="std_FirstN"
              name="std_FirstN"
              //required
            />
          </InputItem>
          <InputItem>
            <Label for="std_LastN">Last Name*:</Label>
            <Input
              ref={lastNameRef}
              type="text"
              id="std_LastN"
              name="std_LastN"
              //required
            />
          </InputItem>
          <InputRow>
            <InputItem>
              <Label for="std_gender">Gender*:</Label>
              <Selection ref={genderRef} id="std_gender" name="std_gender" required>
                <Option value={""}>--Select Gender--</Option>
                <Option value={"male"}>Male</Option>
                <Option value={"female"}>Female</Option>
              </Selection>
            </InputItem>

            <InputItem>
              <Label for="std_Date-of-Birth">Date of Birth</Label>
              <Input
              ref={dateOfBirthRef}
                type="date"
                id="std_Date-of-Birth"
                name="std_Date-of-Birth"
                //required
              />
            </InputItem>
          </InputRow>
          <InputItem>
            <Label for="std_cp_number">
              Phone Number*:
            </Label>
            <Input
              ref={cpNumberRef}
              type="number"
              name="std_cp_number"
              id="std_cp_number"
              //required
            />
            </InputItem>
          <InputItem>
            <Label for="std_Parents/Guardian">
              Parents/Guardian*:
            </Label>
            <Input
              ref={parentsGuardianRef}
              type="text"
              name="std_Parents/Guardian"
              id="std_Parents/Guardian"
              //required
            />
          </InputItem>
          <InputItem>
            <Label for="std_Email">Email*:</Label>
            <Input
              ref={emailRef}
              type="email"
              id="std_Email"
              name="std_Email"
              //required
            />
          </InputItem>
          <InputItem>
            <Label for="std_Password">Password*:</Label>
            <Input
              ref={passwordRef}
              type="password"
              id="std_Password"
              name="std_Password"
              minLength={6}
              //required
            />
          </InputItem>
          <InputItem>
            <Label for="std_Confirm-Password">Confirm Password*:</Label>
            <Input
              ref={passwordConfirmationRef}
              type="password"
              id="std_Confirm-Password"
              name="std_Confirm-Password"
              //required
            />
          </InputItem>
          <InputItem>
            <Label for="std_c_name">Class*:</Label>
            <Selection 
            ref={classRef}
            id="std_Class" name="std_Class"
             //required
             >
              <Option value={""}>--Select Class--</Option>
              <Option value={1}>I</Option>
              <Option value={2}>II</Option>
              <Option value={3}>III</Option>
            </Selection>
          </InputItem>
          <StudentImage>
            <Image src={studentImage || DefaultImg } alt="student_img" />

            <InputItem>
              <Label for="std_Image">Upload Student Photo</Label>
              <Input type="file" id="std_Image" name="std_Image" onInput={handlerSelectImg} accept="image/jpeg" />
            </InputItem>
          </StudentImage>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Save</Button>
          <Button type="reset">Reset</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default AddStudent;
