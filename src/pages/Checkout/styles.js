import styled from "styled-components"

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
export const ContainerChecout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 50px;
`
export const DadosComprador = styled.form`
    width: 500px;
    height: 400px;
    border: 1px solid #CCC;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    button{
        width: 250px;
        height: 40px;
        border: none;
        background-color: #000;
        color: #fff;
        border-radius: 5px;
        opacity: ${props => props.clicado ? "0.7" : "1"};
    }
    input{
        width: 250px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #CCC;
        padding-left: 10px;
    }
    h1{
        align-self: flex-start;
        margin-left: 115px;
    }
`

export const DadosPedido = styled.form`
    width: 500px;
    height: 400px;
    border: 1px solid #CCC;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    h1{
      padding: 5px 0px 10px 50px;
      align-self: flex-start;
    }
`
export const InputDesabilitado = styled.input`
  background-color: #F2F2F2;
  color: #AFAFAF;
`
export const InputHabilitado = styled.input`
  background-color: ${props => props.clicado ? "#F2F2F2" : "#FFFFFF"};
  color: ${props => props.clicado ? "#AFAFAF" : "#000000"};
`
export const Produtos = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    overflow-y: scroll;
    width: 100%;
    padding: 0 50px;
`

export const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`

export const Pagamento = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 70px;
  div{
    width: 70px;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }
`
export const ButtonPix = styled.div`
  border: ${props => props.selecionado ? "2px solid #0f0": "none"};
`
export const ButtonBoleto = styled.div`
  border: ${props => props.selecionado ? "2px solid #0f0": "none"};
`
export const ButtonCartao = styled.div`
  border: ${props => props.selecionado ? "2px solid #0f0": "none"};
`