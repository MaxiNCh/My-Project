// import {breadcrumbscomp} from './breadcrumbs.js'

export const cartcomp = {
	// components: {
	// 	breadcrumbscomp
	// },
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
			      <div class="cart__row">
			         <div class="cart__item">
			            <img src="img/cart/item-1.png" alt="item-1">
			            <div class="cart__item__body">
			               <a class="cart__h5-link" href="#">
			                  <h5 class="cart__h5">Mango People T-shirt</h5>
			               </a>
			               <p class="cart__item__p">Color: <span>Red</span></p>
			               <p class="cart__item__p">Size: <span>XL</span></p>
			            </div>
			         </div>
			         <p>$150</p>
			         <div><input class="cart__inputQty" type="number"></div>
			         <p>FREE</p>
			         <p>$300</p>
			         <button class="remove-btn"><i class="fas fa-times-circle"></i></button>
			      </div>
			      <div class="cart__row">
			         <div class="cart__item">
			            <img src="img/cart/item-2.png" alt="item-2">
			            <div class="cart__item__body">
			               <a href="#">
			                  <h5 class="cart__h5">Mango People T-shirt</h5>
			               </a>
			               <p class="cart__item__p">Color: <span>Red</span></p>
			               <p class="cart__item__p">Size: <span>XL</span></p>
			            </div>
			         </div>
			         <p>$150</p>
			         <div><input class="cart__inputQty" type="number"></div>
			         <p>FREE</p>
			         <p>$300</p>
			         <button class="remove-btn"><i class="fas fa-times-circle"></i></button>
			      </div>
			      <div class="cart__row">
			         <div class="cart__item">
			            <img src="img/cart/item-3.png" alt="item-3">
			            <div class="cart__item__body">
			               <a href="#">
			                  <h5 class="cart__h5">Mango People T-shirt</h5>
			               </a>
			               <p class="cart__item__p">Color: <span>Red</span></p>
			               <p class="cart__item__p">Size: <span>XL</span></p>
			            </div>
			         </div>
			         <p>$150</p>
			         <div><input class="cart__inputQty" type="number"></div>
			         <p>FREE</p>
			         <p>$300</p>
			         <button class="remove-btn"><i class="fas fa-times-circle"></i></button>
			      </div>
			   </div>
			   <div class="cart__buttons">
			      <button class="cart__button cart__button_bg">cLEAR SHOPPING CART</button>
			      <button class="cart__button cart__button_bg">cONTINUE sHOPPING</button>
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
			         <p class="cart__p">Sub total<span>$900</span></p>
			         <h3 class="cart__h3">GRAND TOTAL<span class="orange-color">$900</span></h3>
			         <div class="cart__line"></div>
			         <router-link to=/checkout"><button class="cart__button cart__button_bg orange-bg-color">proceed to checkout</button></router-link>
			      </div>
			   </div>
			</main>
		</div>		
	`
}