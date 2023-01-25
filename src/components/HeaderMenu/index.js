import { HeaderContainer } from "./styles"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FaGripLines} from "react-icons/fa"

export default () => {
  return (
    <HeaderContainer>
      <FaGripLines />
      <h1>GLFashion</h1>
      <div>
        <AiOutlineShoppingCart />
        <p>0</p>
      </div>
    </HeaderContainer>
  )
}