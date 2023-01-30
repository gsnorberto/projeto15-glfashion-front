import { Container } from "./styles"
import { useState, useEffect, useContext } from "react"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import { Context } from "../../context/AuthContext"
import axios from 'axios'

export default () => {
    let { userLS } = useContext(Context)
    const [compras, setCompras] = useState([])

    function atualizaCompras() {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }

    return (
        <Container>
            <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras} />

            <div className="nav">Minha conta {">"} Meus pedidos</div>
        </Container>
    )
}