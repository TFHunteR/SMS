import React from 'react'
import { createRef } from 'react'
import styled from 'styled-components'
import { useStateContext } from '../context/ContextProvider'
import { useState } from 'react'
import axiosClient from '../AxiosClient'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: #F0F1F3;
`

const SignUpContainer = styled.div`
    width: 30vw;
    height: 70vh;
    background-color: white;
`
export const SignUp = () => {
    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()
    const {token , setToken, setUser} = useStateContext();
    const [errors, setErrors] = useState(null)

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        console.log(payload)
        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err=> {
            const response = err.response;
            if (response && response.status === 422){
                console.log(response.data.errors)
            }
        })
        
    }
  return (
    <Container>
        <SignUpContainer>
            <form onSubmit={onSubmit}>
                <input ref={nameRef} type="text" id='name' name='name' placeholder='Full Name' />
                <input ref={emailRef} type="text" id='email' name='email' placeholder='Email Address' />
                <input ref={passwordRef} type="password" id="password" name="password" placeholder='Password' />
                <input ref={passwordConfirmationRef} type="password" id="repeatPassword" name="repeatPassword" placeholder='Repeat Password' />
                <button>Sign Up</button>
            </form>
        </SignUpContainer>
    </Container>
  )
}
