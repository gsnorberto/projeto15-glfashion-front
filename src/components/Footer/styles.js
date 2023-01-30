import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-top: 30px;
    width: 100%;
    height: 110px;
    background-color: #201e1b;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;

    .icons{
        display: flex;
        gap: 20px;
        margin-bottom: 15px;

        .icon{
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
    }

    .description{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .copyright{
        width: 200px;
    }
`