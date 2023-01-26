import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import CardProduto from "../../components/CardProduto/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import Carrinho from "../../components/Carrinho/index.js"
import { CardsContainer, Container } from "./styles.js"
import { Context } from "../../context/AuthContext"

export default () => {
	const [products, setProducts] = useState([]);
  const [carrinho, setCarrinho] = useState(false)
  const [compras, setCompras] = useState([])
  let { userLS } = useContext(Context)

	useEffect(() => {
		const URL = `${process.env.REACT_APP_API_URL}/all-products`;
		const promise = axios.get(URL);
		promise.then(res => setProducts(res.data));
    promise.catch(err => console.log(err.response.data))

    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
    requisicao.then((res) => setCompras(res.data));
    requisicao.catch((res) => alert(res.response.data));  
	}, [setCompras]);

	function atualizaCompras(){
    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
    requisicao.then((res) => setCompras(res.data));
    requisicao.catch((res) => alert(res.response.data));
  }
  return (
    <Container>
      <HeaderMenu compras={compras} carrinho={carrinho} setCarrinho={setCarrinho}/>
      <Carrinho compras={compras} carrinho={carrinho} setCarrinho={setCarrinho} atualizaCompras={atualizaCompras}/>
      <CardsContainer>
        {products.map(item => <CardProduto nome={item.nome} imagem={item.url_imagem} valor={item.valor} desconto={item.valor_com_desconto}/>)}
      </CardsContainer>
    </Container>
  )
};