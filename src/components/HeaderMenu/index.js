import { HeaderContainer } from "./styles"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaGripLines } from "react-icons/fa"
import Carrinho from "../../components/Carrinho/index.js"
import axios from "axios"
import { Context } from "../../context/AuthContext"
import { useContext, useEffect, useState } from "react"

export default ({compras, setCompras, atualizaCompras}) => {
  const [carrinho, setCarrinho] = useState(false)
  const { userLS } = useContext(Context)

  useEffect(() => {
    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
    requisicao.then((res) => setCompras(res.data));
    requisicao.catch((res) => alert(res.response.data));  
}, [setCompras, userLS.id])

  return (
    <>
      <Carrinho compras={compras} carrinho={carrinho} setCarrinho={setCarrinho} atualizaCompras={atualizaCompras}/>
      <HeaderContainer>
        <FaGripLines />
        <h1>GLFashion</h1>
        <div onClick={() => setCarrinho(!carrinho)}>
          <AiOutlineShoppingCart />
          <p>{compras.length}</p>
        </div>
      </HeaderContainer>
    </>
  )
}