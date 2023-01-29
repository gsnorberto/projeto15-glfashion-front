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
    cursor: pointer;
    display: flex;
    gap: 5px
  }
`

export const Logo = styled.div`
  font-family: 'Parisienne', cursive;
  color: #FFFFFF;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .logo-1{
      color: #A0445D;
      font-size: 46px;
  }
`
export const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Button = styled.button`
  margin-top: 5px;
  border: 0;
  border-radius: 5px;
  background-color: #A0445D;
  color: #FFFFFF;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`