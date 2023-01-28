import { HeaderContainer, Logo, UserArea, Button } from "./styles"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaGripLines } from "react-icons/fa"
import Carrinho from "../../components/Carrinho/index.js"
import axios from "axios"
import { Context } from "../../context/AuthContext"
import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { clearStorage } from "../../localStorage"

export default ({ compras, setCompras, atualizaCompras }) => {
   let navigate = useNavigate()
   const [carrinho, setCarrinho] = useState(false)
   const { userLS, setUserLS } = useContext(Context)

   useEffect(() => {
      const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
      requisicao.then((res) => setCompras(res.data));
      requisicao.catch((res) => alert(res.response.data));
   }, [setCompras, userLS.id])

   const logout = () => {
      clearStorage()
      setUserLS(undefined)
      navigate("/")
   }

   return (
      <>
         <Carrinho compras={compras} carrinho={carrinho} setCarrinho={setCarrinho} atualizaCompras={atualizaCompras} />

         <HeaderContainer>
            {/* <FaGripLines /> */}
            <UserArea>
               <div className="user-name">Olá, {userLS.name.split(' ')[0]}</div>
               <Button onClick={logout}>Sair</Button>
            </UserArea>
            <NavLink to="/home">
               <Logo>
                  <div className="logo-1">GL</div>
                  <div>Fashion</div>
               </Logo>
            </NavLink>
            <div onClick={() => setCarrinho(!carrinho)}>
               <AiOutlineShoppingCart />
               <p>{compras.length}</p>
            </div>
         </HeaderContainer>
      </>
   )
}