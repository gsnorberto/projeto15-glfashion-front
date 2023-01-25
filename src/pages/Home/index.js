import CardProduto from "../../components/CardProduto/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
import { CardsContainer, Container } from "./styles.js"

export default () => {
    const PRODUTOS = [
        {
            nome: "Camiseta slim fit para treino",
            url_imagem: "https://www.calitta.com/3429-large_default/camiseta-slim-fit-treino-fitness-academia-masculina-esportiva.jpg",
            valor: "150,00",
            valor_com_desconto: "97,50"
        }
    ]

    return (
        <Container>
            <HeaderMenu />
            <CardsContainer>
                {PRODUTOS.map(item => <CardProduto nome={item.nome} imagem={item.url_imagem} valor={item.valor} desconto={item.valor_com_desconto}/>)}
            </CardsContainer>
        </Container>
    )
}