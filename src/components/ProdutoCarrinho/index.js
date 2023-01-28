import { Produto, Nome, Valor, Quantidade } from "./styles.js"
import {TiDeleteOutline} from "react-icons/ti"
import axios from 'axios'
export default ({compra, atualizaCompras}) => {
    
    function menos(){
        if(compra.quantity > 1) {
            const requisicao = axios.put(`${process.env.REACT_APP_API_URL}/purchases`, {idPurchase: compra._id, quantity: compra.quantity-1, idProduct: compra.idProduct });
            requisicao.then(() => atualizaCompras())
            requisicao.catch((res) => alert(res.response.data))
        }
    }
    function mais(){
        const requisicao = axios.put(`${process.env.REACT_APP_API_URL}/purchases`, {idPurchase: compra._id, quantity: compra.quantity+1, idProduct: compra.idProduct });
        requisicao.then(() => atualizaCompras())
        requisicao.catch((res) => alert(res.response.data))
    }
    function deleta(){
        const requisicao = axios.delete(`${process.env.REACT_APP_API_URL}/purchases`, { data: { idPurchase: compra._id } } );
        requisicao.then(() => atualizaCompras())
        requisicao.catch((res) => alert(res.response.data))
    }
    return (
        <Produto>
            <div>
                <img src={compra.url} alt={compra.name}></img>
                <Nome>
                    <span>{compra.name}</span>
                    <h6>Tamanho: {compra.size}</h6>
                    <Quantidade><div onClick={menos}>-</div><span>{compra.quantity}</span><div onClick={mais}>+</div></Quantidade>
                </Nome>
            </div>
            <Valor>
                <span>R${compra.totalValue.toFixed(2).split(".").join(",")}</span>
                <TiDeleteOutline onClick={deleta}/>
            </Valor>
        </Produto>
    )
}