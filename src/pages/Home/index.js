import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import CardProduto from "../../components/CardProduto/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import { CardsContainer, Container } from "./styles.js"
import { Context } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import Footer from "../../components/Footer/index.js"

export default () => {
  let navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [compras, setCompras] = useState([])
  let { userLS } = useContext(Context)

  useEffect(() => {
    if (!userLS) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/all-products`;
    const promise = axios.get(URL);
    promise.then(res => setProducts(res.data));
    promise.catch(err => console.log(err.response.data))
  }, [setProducts]);

  function atualizaCompras() {
    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
    requisicao.then((res) => setCompras(res.data));
    requisicao.catch((res) => alert(res.response.data));
  }

  if (!userLS) return

  return (
    <Container>
      <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras} />
      <img src={logo} />
      <div className="desc">Moda Feminina</div>
      <CardsContainer>
        {products.map(item => <CardProduto key={item._id} id={item._id} nome={item.name} imagem={item.url} valor={item.value} desconto={item.valor_com_desconto} />)}
      </CardsContainer>
      <Footer />
    </Container>
  )
};
