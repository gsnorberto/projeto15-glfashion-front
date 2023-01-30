import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 70px;
  background-color: #201e1b;
  display: flex;
  color: #FFFFFF;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  
  div {
    display: flex;
    gap: 5px
  }
  .cart{
    cursor: pointer;
  }
`

export const Logo = styled.div`
  font-family: 'Parisienne', cursive;
  color: #FFFFFF;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .logo-1{
      color: #897F78;
      font-size: 26px;
  }
`
export const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Button = styled.button`
  margin-top: 15px;
  border: 0;
  border-radius: 5px;
  background-color: #897F78;
  color: #FFFFFF;
  width: 100%;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  .profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
  }
  .person-icon{
      width: 25px;
      height: 25px;
    }

  .dropdown-content{
    display: ${props => props.showDropDown ? 'flex': 'none'};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 45px;
    background-color: #f9f9f9;
    color: #000000;
    border-radius: 8px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 999;

    span{
      margin-bottom: 10px;
      color: #897F78;
      font-weight: 700;
    }

    .menu-item{
      color: #201e1b;
      font-size: 14px;
    }
    .menu-item:hover{
      color: #897F78;
      cursor: pointer;
    }
  }

  .showDP{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
