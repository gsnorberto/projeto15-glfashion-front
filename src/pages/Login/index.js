import { LoginArea, Logo, Form, Input, Button, Link } from "./styles"
import { NavLink, useNavigate  } from "react-router-dom"
import { useState, useContext } from "react"
import { Context } from "../../context/AuthContext"
import { addLocalStorage } from "../../localStorage"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios"

export default () => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let { setUserLS } = useContext(Context)
    const [loading, setLoading] = useState(false);

    const Login = (e) => {
        e.preventDefault()
        setLoading(true)
        
        if (!email || !password) {
            return
        }

        let data = { email, password }
        axios.post(process.env.REACT_APP_API_URL + "/auth/login", data)
            .then((res) => {
                let userData = { token: res.data.token, id: res.data._id, name: res.data.name }
                addLocalStorage(userData)
                setUserLS(userData)
                setLoading(false)
                navigate("/home")
            }).catch((error) => {
                setLoading(false)
                alert("Error: " + error.response.data)
            })
    }

    return (
        <LoginArea>
            <Logo>
                <div className="logo-1">GL</div>
                <div>Fashion</div>
            </Logo>
            <Form onSubmit={Login}>
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
                <Button data-test="sign-in-submit" type="submit">
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
                    {loading ? '' : 'Entrar'}
                </Button>
            </Form>
            <Link> <NavLink to="/cadastro">Primeira vez? Cadastre-se!</NavLink></Link>
        </LoginArea>
    )
}