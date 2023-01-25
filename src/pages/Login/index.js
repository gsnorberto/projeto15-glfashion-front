import { LoginArea, Logo, Form, Input, Button, Link } from "./styles"
import { NavLink } from "react-router-dom"
import { useState } from "react";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginArea>
            <Logo>
                <div className="logo-1">GL</div>
                <div>Fashion</div>
            </Logo>
            <Form onSubmit="">
                <Input
                    data-test="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    data-test="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button data-test="sign-in-submit" type="submit">Entrar</Button>
            </Form>
            <Link> <NavLink to="/cadastro">Primeira vez? Cadastre-se!</NavLink></Link>
        </LoginArea>
    )
}