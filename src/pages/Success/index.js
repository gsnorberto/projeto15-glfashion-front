import { SuccessArea, Button, Subtitle, Title } from "./styles"
import { useContext, useEffect } from "react"
import { IoCheckmarkCircle } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/AuthContext"

export default () => {
    let navigate = useNavigate()
    const { userLS } = useContext(Context)

    useEffect(() => {
        if (!userLS) {
            navigate("/")
        }
    }, [])
    if (!userLS) return

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