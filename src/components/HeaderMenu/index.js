import { HeaderContainer } from "./styles"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaGripLines } from "react-icons/fa"

export default ({ compras, carrinho, setCarrinho }) => {
  return (
    <HeaderContainer>
      <FaGripLines />
      <h1>GLFashion</h1>
      <div onClick={() => setCarrinho(!carrinho)}>
        <AiOutlineShoppingCart />
        <p>{compras.length}</p>
      </div>
    </HeaderContainer>
  )
}