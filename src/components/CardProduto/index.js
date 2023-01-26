import { CardContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export default ({id, nome, imagem, valor, desconto}) => {
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => navigate(`/produto/${id}`)}>
      <img src={imagem} alt={nome}/>
      <h1>{nome}</h1>
      <div>
        <p>R${desconto}</p>
        <p>R${valor}</p>
      </div>
      <h4>Envio nacional</h4>
    </CardContainer>
  )
}