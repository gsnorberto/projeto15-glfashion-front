import { Container, Informations, ProductContainer } from "./styles"
import HeaderMenu from '../../components/HeaderMenu/index.js';
import { useContext, useEffect, useState } from "react";
import {BiMinus, BiPlus} from "react-icons/bi"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/AuthContext";


export default () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const {ID_DO_PRODUTO} = useParams()
    let { userLS } = useContext(Context)

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/product/${ID_DO_PRODUTO}`
        const promise = axios.get(URL)
        promise.then(res => setProduct(res.data))
        promise.catch(err => alert(err.response.data))
    }, [])

    function addInCart() {
        const URL = `${process.env.REACT_APP_API_URL}/purchases`
        const body = {
            idUsuario: userLS.id,
            idProduct: ID_DO_PRODUTO,
            size,
            quantity
        }

        if (quantity < 1) return alert('Coloque uma quantidade válida (de 1 para cima)')
        if (size !== "PP" && size !== "P" && size !== "M" && size !== "G" && size !== "GG") return alert('Escolha um tamanho')

        const promise = axios.post(URL, body)
        promise.then(() => navigate('/home'))
        promise.catch(err => alert(err.response.data))
    }

    return (
        <Container>
            <HeaderMenu />
            <ProductContainer>
                <img src={product.url} alt={product.name}/>
                <Informations>
                    <h1>{product.name}</h1>
                    <h2>R$ {product.value}</h2>
                    <h3>DESCRIÇÃO</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Tamanho:</h3>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option>Selecione o tamanho</option>
                        <option>PP</option>
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                    </select>
                    <h3>Quantidade:</h3>
                    <div>
                        <BiMinus onClick={() => setQuantity(quantity - 1)}/>
                        <p>{quantity}</p>
                        <BiPlus onClick={() => setQuantity(quantity + 1)}/>
                    </div>
                    <button onClick={addInCart}>Adicionar ao carrinho</button>
                </Informations>
            </ProductContainer>
        </Container>
    )
}