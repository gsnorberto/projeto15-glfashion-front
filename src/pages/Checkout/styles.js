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
    font-family: 'Raleway', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 30px;
    padding-top: 150px;
    @media(max-width:1075px){
      flex-direction: column;
    }
`
export const DadosComprador = styled.form`
    width: 45%;
    height: 400px;
    min-height: 400px;
    border: 1px solid #CCC;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 10px 40px;
    button{
        width: 250px;
        height: 40px;
        border: none;
        background-color: #000;
        color: #fff;
        border-radius: 5px;
        opacity: ${props => props.clicado ? "0.7" : "1"};
        cursor: pointer;
        align-self: center;
    }
    input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #CCC;
        padding-left: 10px;
    }
    h1{
        align-self: flex-start;
        
    }
    @media(max-width:1075px){
      width: 95%;
      margin-top: 15px;
    }
`

export const DadosPedido = styled.form`
    width: 50%;
    height: 400px;
    min-height: 400px;
    border: 1px solid #CCC;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 10px 30px;
    h1{
      align-self: flex-start;
    }

    @media(max-width:1075px){
      width: 95%;
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
`

export const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Pagamento = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
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
  margin-right: 5px;
  cursor: pointer;
`
export const ButtonBoleto = styled.div`
  border: ${props => props.selecionado ? "2px solid #0f0": "none"};
  margin-right: 5px;
  cursor: pointer;
`
export const ButtonCartao = styled.div`
  border: ${props => props.selecionado ? "2px solid #0f0": "none"};
  cursor: pointer;
`