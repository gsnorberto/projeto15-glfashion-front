import { SuccessArea, Button, Subtitle, Title } from "./styles"
import { IoCheckmarkCircle } from "react-icons/io5"
import { NavLink } from "react-router-dom"

export default () => {
    return (
        <SuccessArea>
            <IoCheckmarkCircle className="check-icon" />
            <Title>Pedido Efetuado com Sucesso</Title>
            <Subtitle>Você receberá a confirmação do pedido em seu e-mail</Subtitle>
            <Button>
                <NavLink className="button-home" to="/home">Voltar para Página Inicial</NavLink>
            </Button>

        </SuccessArea>
    )
}