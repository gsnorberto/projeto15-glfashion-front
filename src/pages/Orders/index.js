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
    const [pedidosUsuario, setPedidosUsuario] = useState([])
 
    useEffect(() => {
        if (!userLS) {
            navigate("/")
        }
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/orders/${userLS.id}`);
        requisicao.then((res) => setPedidosUsuario(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }, [])
    if (!userLS) return

    function atualizaCompras() {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }
    console.log(pedidosUsuario)
    return (
        <Container>
            <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras} />
            <div className="nav">Minha conta {">"} Meus pedidos</div>
            <div className="title">Pedidos</div>
            <div className="line"></div>
            <OrdersArea>
                {pedidosUsuario.map((pU) => {
                    let id = 0
                    return(
                        <div key={pU._id}>
                        {pU.pedidos.map((p)=>{
                            id++
                            return(
                                <Order key={id}>
                                    <img src={p.url} alt={p.name} />
                                    <div className="content">
                                        <div className="order-name">{p.name}</div>
                                        <div className="order-size">Tamanho: {p.size}</div>
                                        <div className="order-amount">Quantidade: {p.quantity}</div>
                                        <div className="order-price">Valor: R${p.valor.toFixed(2).split(".").join(",")}</div>
                                        <div className="order-price">Método de pagamento: {pU.pagamento}</div>
                                    </div>
                                </Order>
                            )
                        })}
                        </div>
                    )
                })}
            </OrdersArea>
        </Container>
    )
}