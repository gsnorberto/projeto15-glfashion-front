import { HeaderContainer, ContainerChecout, DadosComprador, Pagamento, DadosPedido, InputDesabilitado, InputHabilitado, Produtos, SubTotal, ButtonPix, ButtonBoleto, ButtonCartao } from "./styles"
import { FaGripLines } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/AuthContext"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import ProdutoCarrinho from "../../components/ProdutoCarrinho/index.js"
import HeaderMenu from "../../components/HeaderMenu/index.js"
export default () => {
    const navigate = useNavigate();
    let { userLS } = useContext(Context);

    useEffect(() => {
        if (!userLS) {
            navigate("/")
        }
    }, [])
    if (!userLS) return

    const [clicado, setClicado] = useState(false)
    const [compras, setCompras] = useState([])
    const [selecionado, setSelecionado] = useState([false, false, false])
    const [dadosCompra, setDadosCompra] = useState({ pedidos: [], pagamento: "", idUsuario: userLS.id, email: userLS.email, name: userLS.name, cpf: "", address: "" });

    useEffect(() => {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }, [setCompras, userLS]);

    function atualizaCompras() {
        const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/purchases/${userLS.id}`);
        requisicao.then((res) => setCompras(res.data));
        requisicao.catch((res) => alert(res.response.data));
    }

    function confirmarDados(event) {
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post(`${process.env.REACT_APP_API_URL}/orders`, dadosCompra);
        requisicao.then(() => { apagarCarrinho(); navigate("/sucesso"); });
        requisicao.catch((res) => { alert(res.response.data); setClicado(false); });
    }

    function selecionar(b, p) {
        const novoArray = []
        for (let i = 0; i < selecionado.length; i++) {
            novoArray[i] = false
            novoArray[b] = true
        }
        setSelecionado([...novoArray])
        dadosCompra.pagamento = p
    }

    function apagarCarrinho() {
        for (let i = 0; i < compras.length; i++) {
            const requisicao = axios.delete(`${process.env.REACT_APP_API_URL}/purchases`, { data: { idPurchase: compras[i]._id } });
            requisicao.then(() => atualizaCompras())
            requisicao.catch((res) => alert(res.response.data))
        }
    }

    let subtotal = 0
    for (let i = 0; i < compras.length; i++) subtotal += compras[i].totalValue
    subtotal = subtotal.toFixed(2).split(".").join(",")

    let pedidos = []
    for (let i = 0; i < compras.length; i++) pedidos.push({ idProduct: compras[i].idProduct, size: compras[i].size, quantity: compras[i].quantity, valor: compras[i].totalValue, name: compras[i].name, url: compras[i].url})
    dadosCompra.pedidos = pedidos

    return (
        <ContainerChecout>
            <HeaderMenu compras={compras} atualizaCompras={atualizaCompras} setCompras={setCompras} />
            <DadosPedido>
                <Produtos>{compras.map((c) => <ProdutoCarrinho key={c._id} compra={c} atualizaCompras={atualizaCompras} />)}</Produtos>
                <SubTotal><span>Subtotal:</span><span>R${subtotal}</span></SubTotal>
                <h1>Forma de pagamento:</h1>
                <Pagamento>
                    <ButtonPix selecionado={selecionado[0]} onClick={() => selecionar(0, "Pix")}>Pix</ButtonPix>
                    <ButtonBoleto selecionado={selecionado[1]} onClick={() => selecionar(1, "Boleto")}>Boleto</ButtonBoleto>
                    <ButtonCartao selecionado={selecionado[2]} onClick={() => selecionar(2, "Cartao")}>Cartão</ButtonCartao>
                </Pagamento>

            </DadosPedido>
            <DadosComprador onSubmit={confirmarDados} clicado={clicado}>
                <h1>E-mail</h1>
                <InputDesabilitado disabled required type="email" placeholder="Ex: mariasilva@gmail.com" value={dadosCompra.email} ></InputDesabilitado>
                <h1>Nome</h1>
                <InputDesabilitado disabled required type="text" placeholder="Ex: Maria Da Silva" value={dadosCompra.name}></InputDesabilitado>
                <h1>CPF</h1>
                <InputHabilitado disabled={clicado} required type="text" placeholder="Ex: 78945623418" value={dadosCompra.cpf} onChange={e => setDadosCompra({ ...dadosCompra, cpf: e.target.value })} ></InputHabilitado>
                <h1>Endereço</h1>
                <InputHabilitado disabled={clicado} required type="text" placeholder="Ex: Rua 6 nº 4 Setor Sul Goiânia-GO" value={dadosCompra.address} onChange={e => setDadosCompra({ ...dadosCompra, address: e.target.value })} ></InputHabilitado>
                <button disabled={clicado} type="submit">Confirmar Compra</button>
            </DadosComprador>
        </ContainerChecout>
    )
}