import {promocomp} from '../blocks/promo.js';
import {divisioncomp} from '../blocks/division.js';
import {featuredcomp} from '../blocks/featured.js';
import {offercomp} from '../blocks/offer.js';

export const homecomp = {
	components: {
		promocomp,
		divisioncomp,
		featuredcomp,
		offercomp,
	},
	props: ["featured"],
	methods: {
		addToCart(id) {
			this.$emit('add-to-cart', id)
		}
	},
	template: `
		<div>
			<promocomp></promocomp>
			<divisioncomp></divisioncomp>
			<featuredcomp :featured="featured" v-on:add-to-cart="addToCart"></featuredcomp>
			<offercomp></offercomp>
		</div>
	`
};