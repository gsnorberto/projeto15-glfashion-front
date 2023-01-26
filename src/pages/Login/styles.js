import styled from "styled-components";

export const LoginArea = styled.div`
    font-family: 'Raleway', sans-serif;
    background-color: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.div`
    font-family: 'Parisienne', cursive;
    color: #FFFFFF;
    font-size: 32px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-1{
        color: #A0445D;
        font-size: 106px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 320px;
`
export const Input = styled.input`
    font-family: 'Raleway', sans-serif;
    margin-bottom: 15px;
    font-size: 20px;
    border: 0;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
    width: 100%;
`
export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    height: 46px;
    border: 0;
    border-radius: 5px;
    background-color: #A0445D;
    color: #FFFFFF;
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`
export const Link = styled.div`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
`