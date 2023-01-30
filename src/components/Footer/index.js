import { Container } from "./styles"
import { IoLogoInstagram, IoLogoWhatsapp, IoMailOutline, IoLogoTwitter } from "react-icons/io5";

export default () => {
    return (
        <Container>
            <div className="icons">
                <IoLogoInstagram className="icon" />
                <IoLogoWhatsapp className="icon" />
                <IoMailOutline className="icon" />
                <IoLogoTwitter className="icon" />
            </div>

            <div className="description">
                <div className="copyright">© 2022 - GLFashion</div>
                <div>Desenvolvido por: Fábio Garrote, Gabriel Norberto e Laura Souza</div>
            </div>
        </Container>
    )
}