import { HeaderContainer, Logo, UserArea, Button, Dropdown } from "./styles"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoPersonOutline } from "react-icons/io5";
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
   const [showDropDown, setShowDropDown] = useState(false);

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
            <Dropdown onClick={() => setShowDropDown(!showDropDown)} showDropDown={showDropDown}>
               <div className="profile"> 
                  <IoPersonOutline className="person-icon" />
                  <span>Minha Conta</span>
               </div>
               <div className="dropdown-content">
                  <span>Olá, {userLS.name}</span>
                  <div onClick={() => navigate("/minha-conta/pedidos")} className="menu-item">Meus Pedidos</div>
                  <Button onClick={logout}>Sair</Button>
               </div>
            </Dropdown>
            <NavLink to="/home">
               <Logo>
                  <div className="logo-1">GL</div>
                  <div>Fashion</div>
               </Logo>
            </NavLink>
            <div className="cart" onClick={() => setCarrinho(!carrinho)}>
               <AiOutlineShoppingCart />
               <p>{compras.length}</p>
            </div>
         </HeaderContainer>
      </>
   )
}
