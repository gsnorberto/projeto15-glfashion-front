import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  img {
    width: 250px;
    border-radius: 8px;
  }
  h1 {
    color: #767676;
    font-size: 14px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    p:nth-child(1) {
      font-size: 16px;
      color: #000000;
      font-weight: 700;
    }
    p:nth-child(2) {
      font-size: 14px;
      color: #959595;
      text-decoration: line-through;
    }
  }
  h4 {
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: rgb(245, 252, 251);
    border-radius: 5px;
    color: green;
  }
`