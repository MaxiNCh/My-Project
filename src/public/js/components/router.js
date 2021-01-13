import {homecomp} from './home.js';
import {productscomp} from './products.js';
import {cartcomp} from './cart.js';
import {checkoutcomp} from './checkout.js';
import {newarrivalscomp} from './newarrivals.js';


const routes = [
	{path: '/', name: 'HOME', component: homecomp},
	{path: '/products', name: 'PRODUCTS', component: productscomp},
	{path: '/cart', name: 'CART', component: cartcomp},
	{path: '/checkout', name: 'CHECKOUT', component: checkoutcomp},
	{path: '/newarrivals', name: 'NEW ARRIVALS', component: newarrivalscomp}
]

// eslint-disable-next-line no-undef
export const router = new VueRouter({
	// mode: 'history',
	routes
})