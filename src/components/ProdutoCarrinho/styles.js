import styled from "styled-components";

export const Produto = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    margin: 5px 0px;
    margin-bottom: 30px;
    justify-content: space-between;
    img{
        width: 70px;
        border-radius: 5px;
    }
    div{
        display: flex;
    }
`

export const Valor = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #000000;
    padding: 10px;
    justify-content: space-between;
    align-items: flex-end;

    .delete-button{
        cursor: pointer;
    }
`

export const Nome = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #000000;
    padding: 5px 10px;
    justify-content: space-between;
    max-width: 250px;
    span{
        font-weight: bold;
    }
    h6{
        align-self: flex-start;
        margin: 5px 0px;
    }
`
export const Quantidade = styled.div`
    border: solid 1.8px #aaaaaa;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60px;
    min-width: 60px;
    span{
        border-left: solid 1px #aaaaaa;
        border-right: solid 1px #aaaaaa;
        padding: 5px;
        font-weight: normal;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
    }
`