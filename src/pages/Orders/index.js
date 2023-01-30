import { Container, OrdersArea, Order } from "./styles"
import { useState, useEffect, useContext } from "react"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import { Context } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default () => {
    let navigate = useNavigate()
    let { userLS } = useContext(Context)
    const [compras, setCompras] = useState([])

    useEffect(() => {
        if (!userLS) {
            navigate("/")
        }
    }, [])
    if (!userLS) return

    function atualizaCompras() {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }

    return (
        <Container>
            <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras} />
            <div className="nav">Minha conta {">"} Meus pedidos</div>
            <div className="title">Pedidos</div>
            <div className="line"></div>
            <OrdersArea>
                <Order>
                    <img src="https://img.ltwebstatic.com/images3_pi/2021/05/04/16201072816d3f4eca6ca1ffb66aeb932799c237b7.webp" alt="" />
                    <div className="content">
                        <div className="order-name">Pedido teste</div>
                        <div className="order-size">Tamanho: M</div>
                        <div className="order-amount">Quantidade: 2</div>
                        <div className="order-price">Valor: R$32.50</div>
                        <div className="order-price">Método de pagamento: Cartão</div>
                    </div>
                </Order>
                <Order>
                    <img src="https://img.ltwebstatic.com/images3_pi/2021/05/04/16201072816d3f4eca6ca1ffb66aeb932799c237b7.webp" alt="" />
                    <div className="content">
                        <div className="order-name">Pedido teste</div>
                        <div className="order-size">Tamanho: M</div>
                        <div className="order-amount">Quantidade: 2</div>
                        <div className="order-price">Valor: R$32.50</div>
                        <div className="order-price">Método de pagamento: Cartão</div>
                    </div>
                </Order>
            </OrdersArea>
        </Container>
    )
}