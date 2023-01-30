import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import AddUser from "./pages/AddUser"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import NotFound from "./pages/NotFound"
import Orders from "./pages/Orders"


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<AddUser />} />
                <Route path="/home" element={<Home />} />
                <Route path="/produto/:ID_DO_PRODUTO" element={<ProductDetail />} />
                <Route path="/pagamento" element={<Checkout />} />
                <Route path="/sucesso" element={<Success />} />
                <Route path="/minha-conta/pedidos" element={<Orders />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}