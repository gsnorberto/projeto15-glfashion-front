import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import CardProduto from "../../components/CardProduto/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import { CardsContainer, Container } from "./styles.js"
import { Context } from "../../context/AuthContext"

export default () => {
	const [products, setProducts] = useState([])
  const [compras, setCompras] = useState([])
  let { userLS } = useContext(Context)

	useEffect(() => {
		const URL = `${process.env.REACT_APP_API_URL}/all-products`;
		const promise = axios.get(URL);
		promise.then(res => setProducts(res.data));
    promise.catch(err => console.log(err.response.data)) 
	}, [setProducts]);

	function atualizaCompras(){
    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
    requisicao.then((res) => setCompras(res.data));
    requisicao.catch((res) => alert(res.response.data));
  }
  return (
    <Container>
      <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras}/>
      <CardsContainer>
        {products.map(item => <CardProduto key={item._id} id={item._id} nome={item.name} imagem={item.url} valor={item.value} desconto={item.valor_com_desconto}/>)}
      </CardsContainer>
    </Container>
  )
};