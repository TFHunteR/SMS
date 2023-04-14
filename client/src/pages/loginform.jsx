import React from 'react';
import image1 from "../pictures/cedarhills.png";
import styled from "styled-components";
const Container = styled.div`
    padding: 0;
    max-width: 62.5em;
    min-height: 37.5em;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #EBC137;
    transform: translate(-50%,-50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);
    -webkit-box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);
    -moz-box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);   
`
const Body = styled.body`
    background-color: #FEFAE1;
    min-height:100vh;
`
const Left = styled.div`
height: 100%;
`
const About = styled.div`
    flex-direction: column;
    margin-top: 30%;
    justify-content: center;
    align-items:center; 
    display: flex;
`
const Header = styled.h1`
    color: #fff;
    font-size: 2.1875em;
    text-align: center;
`
const Logo = styled.img`
    position: relative;
    background-repeat: none;
    width: 9.375em;
    height: 9.375em;
    margin-bottom: 1.25em;
`
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #2A5B84;
`
const LoginBox = styled.div`
    box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);
    -webkit-box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);
    -moz-box-shadow: 9px 10px 27px -8px rgba(0,0,0,0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 40%;
    border-radius: 10px;

`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 12.5em;
    width: 100%;
`
const Input = styled.input`
    background-color: rgba(221, 222, 238, 0.5);
    border-radius: 5px;
    display: flex;
    margin: 10px 0;
    width: 90%;
    height: 2.5em;
    padding: 10px;
    font-size: 20px;
    border-style: none;
    &:focus{
        border: 1px solid #EBC137;
        box-shadow: 0 0 3px #EBC137;
        outline-offset: 0px;
        outline: none;
    }
`
const Button = styled.button`
    font-weight: bold;
    font-size: 20px;
    background-color: #EBC137 ;
    border-radius: 5px;
    margin: 10px 0;
    width: 90%;
    height: 55px;
    text-align: center;
    border-style: none;
    &:focus{
        border: 1px solid #EBC137;
        box-shadow: 0 0 3px #EBC137;
        outline-offset: 0px;
        outline: none;
    }
    &:hover{
        background-color: #FEFAE1;
    }
`
const Forgot = styled.a`
    margin-top: 10px;

`

function loginform() {

    return (
        <Body>
            <Container>
                <Left>
                    <div className="cover">
                        <About>
                            <Logo src={image1}/>
                            <Header>CEDAR HILLS CHRISTIAN ACADEMY</Header>
                        </About>
                    </div>
                </Left>
                <Right>
                    <LoginBox>
                        <Form>
                            <Input placeholder="Enter your Email" />
                            <Input placeholder="Enter your Password"/>
                            <Button>SIGN IN</Button>
                            <a href="#">Forget/Reset Password?</a>
                        </Form>
                    </LoginBox>
                </Right>
            </Container>
        </Body>
  )
}

export default loginform;