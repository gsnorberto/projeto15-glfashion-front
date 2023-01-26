import { CarrinhoContainer, Fundo, Topo, Rodape, Produtos } from "./styles.js"
import { IoIosArrowBack } from "react-icons/io"
import ProdutoCarrinho from "../ProdutoCarrinho/index.js"
import { useNavigate } from "react-router-dom";

export default ({compras, carrinho, setCarrinho, atualizaCompras}) => {
    const navigate = useNavigate();
    let subtotal = 0
    for(let i = 0; i < compras.length; i++) subtotal += compras[i].totalValue
    subtotal = subtotal.toFixed(2).split(".").join(",")
    return (
        <>
            <Fundo onClick={() => setCarrinho(!carrinho)} carrinho={carrinho} />
            <CarrinhoContainer carrinho={carrinho}>
                <Topo>
                    <IoIosArrowBack onClick={() => setCarrinho(!carrinho)}/>
                    <p>Seu carrinho <span>({compras.length} itens)</span></p>
                </Topo>
                {compras.length === 0 ? <p>Sem produtos no carrinho</p> : <Produtos>{compras.map((c) => <ProdutoCarrinho key={c._id} compra={c} atualizaCompras={atualizaCompras}/>)}</Produtos>}
                <Rodape>
                    <div><span>Subtotal:</span><span>R${subtotal}</span></div>
                    <button onClick={() => navigate("/pagamento")}>Finalizar compra</button>
                </Rodape>
            </CarrinhoContainer>
        </>   
    )
}