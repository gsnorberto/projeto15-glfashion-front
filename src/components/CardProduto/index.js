import { CardContainer } from "./styles"

export default ({nome, imagem, valor, desconto}) => {
  return (
    <CardContainer>
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