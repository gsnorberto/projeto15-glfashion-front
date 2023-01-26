import { Container, Informations, ProductContainer } from "./styles"
import HeaderMenu from '../../components/HeaderMenu/index.js';
import { useState } from "react";
import {BiMinus, BiPlus} from "react-icons/bi"


export default () => {
    const PRODUCT = {
        nome: "Camiseta slim de treino",
        url_imagem: "https://www.calitta.com/3429-large_default/camiseta-slim-fit-treino-fitness-academia-masculina-esportiva.jpg",
        valor: "97,50",
    }
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(1)

    return (
        <Container>
            <HeaderMenu />
            <ProductContainer>
                <img src={PRODUCT.url_imagem}/>
                <Informations>
                    <h1>{PRODUCT.nome}</h1>
                    <h2>R$ {PRODUCT.valor}</h2>
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
                    <button>Adicionar ao carrinho</button>
                </Informations>
            </ProductContainer>
        </Container>
    )
}