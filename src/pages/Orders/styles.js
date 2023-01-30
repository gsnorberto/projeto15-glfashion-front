import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    margin-left: 35px;
    margin-right: 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .nav{
        margin-top: 100px;
    }
    .title{
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .line{
        width: 100%;
        border-top: 1px solid #DDDDDD;
        margin-bottom: 15px;
    }
`
export const OrdersArea = styled.div`
    display: flex;
    flex-direction: column;
`
export const Order = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 25px;
    
    img{
        width: 70px;
        height: auto;
        background-size: cover;
        border-radius: 5px;
        margin-right: 15px;
    }
    .content{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        gap: 3px;
        .order-name{
            margin-bottom: 10px;
            font-weight: 700;
        }
        .order-size{

        }
        .order-price{

        }
    }
`