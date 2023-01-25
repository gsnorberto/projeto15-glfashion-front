import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #000000;
  display: flex;
  color: #FFFFFF;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  h1 {
    font-size: 25px;
    font-weight: 700;
  }
  div {
    display: flex;
    gap: 5px
  }
`