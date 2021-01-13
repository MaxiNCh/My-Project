// import {breadcrumbscomp} from './breadcrumbs.js'

export const cartcomp = {
	props: ["cart"],
	data() {
		return {

		}
	},
	computed: {
		cartSum: {
			get: function() {
				if (this.cart[0]) {
					const sum = this.cart.map(el => el.price * el.qty).reduce((acc, cur) => acc + cur, 0);
					return Math.round(sum * 100) / 100;
				}
			}
		},
		isEmpty: {
			get: function () {
				if (this.cart[0]) return false
				else return true
			} 
		}
	},
	mounted() {
	},
	beforeDestroy() {
		this.$emit('update-cart', this.cart);
	},
	template: `
		<div>
			<main class="cart center">
			   <div class="cart__heading">
			      <h5 class="cart__h5">Product Details</h5>
			      <h5 class="cart__h5">unite Price</h5>
			      <h5 class="cart__h5">Quantity</h5>
			      <h5 class="cart__h5">shipping</h5>
			      <h5 class="cart__h5">Subtotal</h5>
			      <h5 class="cart__h5">ACTION</h5>
			   </div>
			   <div class="cart__items">
			      <div v-for="item in cart" :key="item.id" class="cart__row">
			         <div class="cart__item">
			            <img :src="item.image_url" alt="item-1">
			            <div class="cart__item__body">
			               <a class="cart__h5-link" href="#">
			                  <h5 class="cart__h5">{{ item.name }}</h5>
			               </a>
			               <p class="cart__item__p">Color: <span>Red</span></p>
			               <p class="cart__item__p">Size: <span>XL</span></p>
			            </div>
			         </div>
			         <p>&dollar; {{ item.price }}</p>
			         <div><input class="cart__inputQty" v-model="item.qty" type="number" min="0"></div>
			         <p>FREE</p>
			         <p>&dollar; {{Math.round(item.price * item.qty * 100) / 100}}</p>
			         <button class="remove-btn" @click="$emit('del-from-cart', item.id)"><i class="fas fa-times-circle"></i></button>
			      </div>
				   <div v-if="isEmpty" class="cart__row cart__h5">
				   	<div></div>
				   	<div>Cart is empty</div>
				   	<div></div>
				   </div>
			   </div>
			   <div class="cart__buttons">
			      <button @click.prevent="$emit('del-from-cart', 'all')" class="cart__button cart__button_bg">cLEAR SHOPPING CART</button>
			      <router-link to="/products" class="cart__button cart__button_bg">cONTINUE sHOPPING</router-link>
			   </div>
			   <div class="cart__bottom">
			      <div class="cart__address">
			         <h3 class="cart__h3">Shipping Adress</h3>
			         <form action="#">
			            <select class="cart__select" name="country" id="country">
			               <option value="RF">Russiona Federation</option>
			               <option value="GB">Great Britain</option>
			               <option value="JP">Japan</option>
			            </select>
			            <br>
			            <input class="cart__input" type="text" placeholder="State">
			            <br>
			            <input class="cart__input" type="text" placeholder="Postcode / Zip">
			            <br>
			            <button type="submit" class="cart__button cart__button_sm">get a quote</button>
			         </form>
			      </div>
			      <div class="cart__coupon">
			         <h3 class="cart__h3">coupon discount</h3>
			         <p class="cart__p">Enter your coupon code if you have one</p>
			         <input class="cart__input" type="text" placeholder="Coupon #">
			         <br>
			         <button class="cart__button cart__button_sm">Apply coupon</button>
			      </div>
			      <div class="cart__total">
			         <p class="cart__p">Sub total<span>$ {{cartSum}}</span></p>
			         <h3 class="cart__h3">GRAND TOTAL<span class="orange-color">$ {{cartSum}}</span></h3>
			         <div class="cart__line"></div>
			         <router-link to="/checkout"><button class="cart__button cart__button_bg orange-bg-color"> proceed to checkout</button></router-link>
			      </div>
			   </div>
			</main>
		</div>		
	`
}