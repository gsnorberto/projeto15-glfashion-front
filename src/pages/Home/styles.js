import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo{
    width: 100%;
    margin-top: 70px;
  }

  .desc{
    font-family: 'Raleway', sans-serif;
    margin-top: 60px;
    margin-bottom: 30px;
    cursor: pointer;
  }
`

export const CardsContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`