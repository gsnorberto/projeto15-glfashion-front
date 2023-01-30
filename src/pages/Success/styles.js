import styled from "styled-components";

export const SuccessArea = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .check-icon{
        width: 120px;
        height: 120px;
        color: #6BC259;
        margin-bottom: 40px;
    }

    .subtitle{
        
    }
`
export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`

export const Subtitle = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin: 25px 0; 
`

export const Button = styled.button`
    margin-top: 40px;
    padding: 15px 30px;
    border: 0;
    background-color: #201e1b;
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`