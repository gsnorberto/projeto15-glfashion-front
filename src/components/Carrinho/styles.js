import styled from "styled-components";

export const Fundo = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: ${props => props.carrinho ? "flex" : "none"};
`

export const CarrinhoContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 40%;
    height: 100vh;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    display: ${props => props.carrinho ? "flex" : "none"};
    flex-direction: column;
    padding: 0px 20px;
    p{
        align-self: center;
        color: #555555;
    }

    @media(max-width: 920px){
        width: 60%;
    }
    @media(max-width: 620px){
        width: 80%;
    }
`

export const Topo = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 20px 0px;
    font-size: 20px;
    p{
        padding: 0px 10px;
    }
    span{
        color: red;
        padding: 0px 5px;
    }
`
export const Rodape = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #FFFFFF;
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        border: none;
        width: 300px;
        height: 40px;
        margin-top: 20px;
        border-radius: 5px;
        color: #FFFFFF;
        background-color: #000000;
        font-size: 17px;
        cursor: pointer;
    }
`
export const Produtos = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    overflow-y: scroll;
`