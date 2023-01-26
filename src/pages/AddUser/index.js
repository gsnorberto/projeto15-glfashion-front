import { SignUpArea, Logo, Form, Input, Button, Link } from "./styles"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios"

export default () => {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const addUser = (e) => {
        e.preventDefault()
        console.log(process.env.REACT_APP_API_URL);
        setLoading(true)

        if (!name || !email || !password || !confirmPassword) {
            return alert("Preencha todos os campos! ")
        }
        if (password !== confirmPassword) {
            return alert("As senhas não conferem! ")
        }

        let data = { name, email, password, confirmPassword }
        axios.post(process.env.REACT_APP_API_URL + "/auth/sign-up", data)
            .then((res) => {
                setLoading(false)
                navigate("/")
            }).catch((error) => {
                setLoading(false)
                alert("Error: " + error.response.data)
            })
    }

    return (
        <SignUpArea>
            <Logo>
                <div className="logo-1">GL</div>
                <div>Fashion</div>
            </Logo>
            <Form onSubmit={addUser}>
                <Input
                    data-test="name"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    data-test="email"
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    data-test="password"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    data-test="conf-password"
                    placeholder="Confirme a Senha"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button data-test="sign-up-submit" type="submit">
                    <ThreeDots
                        height="30"
                        width="40"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={loading}
                    />
                    {loading ? '' : 'Cadastrar'}
                </Button>
            </Form>
            <Link> <NavLink to="/">Já tem uma conta? Entre agora!</NavLink></Link>
        </SignUpArea>
    )
}