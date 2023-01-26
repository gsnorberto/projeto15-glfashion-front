import axios from 'axios';
import { useEffect, useState } from 'react';
import CardProduto from '../../components/CardProduto/index.js';
import HeaderMenu from '../../components/HeaderMenu/index.js';
import { CardsContainer, Container } from './styles.js';

export default () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const URL = `${process.env.REACT_APP_API_URL}/all-products`;
		const promise = axios.get(URL);
		promise.then(res => setProducts(res.data));
        promise.catch(err => console.log(err.response.data))
	}, []);

	return (
		<Container>
			<HeaderMenu />
			<CardsContainer>
				{products.map((item) => (
					<CardProduto
						id={item._id}
						nome={item.nome}
						imagem={item.url_imagem}
						valor={item.valor}
						desconto={item.valor_com_desconto}
					/>
				))}
			</CardsContainer>
		</Container>
	);
};
