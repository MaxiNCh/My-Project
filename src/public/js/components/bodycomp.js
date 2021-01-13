import {homecomp} from './home.js';
import {productscomp} from './products.js';
import {cartcomp} from './cart.js';
import {checkoutcomp} from './checkout.js';
import {newarrivalscomp} from './newarrivals.js';

export const bodycomp = {
	components: {
		homecomp,
		productscomp,
		cartcomp,
		checkoutcomp,
		newarrivalscomp
	},
	data() {
		return {
		}
	},
	methods: {
		addToCart(id) {
			this.$emit('add-to-cart', id)
		},
		updateCart(cart) {
			this.$emit('update-cart', cart)
		}, 
		delFromCart(id) {
			this.$emit('del-from-cart', id)
		}
	},
	props: ["products", "featured", "cart"],
	template: `
		<router-view :products="products" :featured="featured" :cart="cart" @del-from-cart="delFromCart" v-on:add-to-cart="addToCart" v-on:update-cart="updateCart"></router-view>
	`
}; 
