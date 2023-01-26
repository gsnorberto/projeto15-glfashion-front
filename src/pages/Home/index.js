import { useState, useEffect } from "react"
import axios from 'axios'
import CardProduto from "../../components/CardProduto/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import Carrinho from "../../components/Carrinho/index.js"
import { CardsContainer, Container } from "./styles.js"

export default () => {
    const PRODUTOS = [
        {
            nome: "Camiseta slim fit para treino",
            url_imagem: "https://www.calitta.com/3429-large_default/camiseta-slim-fit-treino-fitness-academia-masculina-esportiva.jpg",
            valor: "150,00",
            valor_com_desconto: "97,50"
        }
    ]
    const [carrinho, setCarrinho] = useState(false)
    const [compras, setCompras] = useState([])
    useEffect(() => {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));  
    }, [ setCompras ]);
    function atualizaCompras(){
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));  
    }
    return (
        <Container>
            <HeaderMenu compras={compras} carrinho={carrinho} setCarrinho={setCarrinho}/>
            <Carrinho compras={compras} carrinho={carrinho} setCarrinho={setCarrinho} atualizaCompras={atualizaCompras}/>
            <CardsContainer>
                {PRODUTOS.map(item => <CardProduto nome={item.nome} imagem={item.url_imagem} valor={item.valor} desconto={item.valor_com_desconto}/>)}
            </CardsContainer>
        </Container>
    )
}