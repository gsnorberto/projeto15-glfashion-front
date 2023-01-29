import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductContainer = styled.div`
  margin: 0 40px;
  display: flex;
  margin-top: 250px;
  margin-bottom: 20px;
  gap: 20px;
  
  img {
    max-width: 400px;
    //height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media(max-width: 820px){
    flex-direction: column;
  }
  @media(max-width: 420px){
    flex-direction: column;
    img{
      max-width: 300px;
    }
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  gap: 20px;
  margin-right: 20px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #292929;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    color: #767676;
  }
  p {
    font-size: 15px;
    color: #767676;
    line-height: 20px;
  }
  select {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    font-size: 15px;
    background-color: #FFF;
    outline: none;
    padding-left: 10px;
    border: 1px solid #767676;
    cursor: pointer;
  }
  div {
    display: flex;
    width: 100px;
    gap: 5px;
    align-items: center;
    p {
      border: 1px solid #767676;
      width: 40px;
      text-align: center;
      border-radius: 5px;
      font-size: 15px;
    }
    svg {
      color: #000;
      cursor: pointer;
    }
  }
  button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #FFF;
    background-color: #292929;
    font-size: 17px;
  }

  @media(max-width: 820px){
    h1{
      font-size: 28px;
    }
  }
`