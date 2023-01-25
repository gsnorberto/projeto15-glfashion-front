import { SignUpArea, Logo, Form, Input, Button, Link } from "./styles"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <SignUpArea>
            <Logo>
                <div className="logo-1">GL</div>
                <div>Fashion</div>
            </Logo>
            <Form onSubmit="">
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
                <Button data-test="sign-up-submit" type="submit">Cadastrar</Button>
            </Form>
            <Link> <NavLink to="/">Já tem uma conta? Entre agora!</NavLink></Link>
        </SignUpArea>
    )
}