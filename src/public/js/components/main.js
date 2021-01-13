import headercomp from '../blocks/header.js';
import {navcomp} from '../blocks/nav.js';
import {footercomp} from '../blocks/footer.js';
import {router} from './router.js';
import {bodycomp} from './bodycomp.js';

const app = {
	el: '#app',
	components: {
		headercomp,
		navcomp,
		bodycomp,
		footercomp
	},
	router,
	data: {
		allProducts: [],
		products: [],
		cart: [],
		featured: []
	},
	methods: {
		// Методы обращения к серверу
		getJSON(url) {
			return fetch(url)
				.then(response => response.json())
				.catch(err => console.log(err));
		},
		postJSON(url, data) {
			return fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => response.json())
				.catch(err => console.log(err))
		},
		putJSON(url, data) {
			return fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => response.json())
				.catch(err => console.log(err))
		},
		delJSON(url, data) {
			return fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(response => response.json())
				.catch(err => console.log(err))
		},
		// Добавление нового товара в корзину по ID
		addToCart(id) {
			const item = this.allProducts.filter(item => item.id == id);
			this.postJSON('/db/cart', item[0])
				.then((data) => {
					this.cart = data;
				})
		},
		// Удаление товара из корзины по ID или очищение корзины
		delFromCart(id) {
			const cart = this.cart;
			const productIndex = cart.findIndex(item => item.id == id)
			if (productIndex != -1) {
				cart.splice(productIndex, 1)
			} else if (id == 'all') {
				cart.splice(0, cart.length)
			}
			this.delJSON('/db/cart', {id})

		},
		// Обновление корзины на
		updateCart(cart) {
			this.putJSON('/db/cart', cart)
		},
	},
	mounted(){
		this.getJSON('/db/products')
			.then((data) => {
				this.allProducts = data;
			})
			.then(() => {
				this.products = this.allProducts.filter((item) => item.featured == "false");
				this.featured = this.allProducts.filter((item) => item.featured == "true");
			});
		this.getJSON('/db/cart')
			.then((data) => {
				this.cart = data.goods;
			});
	},

};

export default app;

