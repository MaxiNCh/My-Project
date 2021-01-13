export default {
	props: ["cart"],
	computed: {
		cartSum: {
			get: function() {
				if (this.cart[0]) {
					const sum = this.cart.map(el => el.price * el.qty).reduce((acc, cur) => acc + cur, 0);
					return Math.round(sum * 100) / 100;
				}
			}
		},
		notEmpty: {
			get: function () {
				if (this.cart[0]) return true
			}
		}
	},
	mounted() {

	},
	template: `
		<header class="header center">
			<div class="header__left">
				<router-link to='/' class="logo"><img class="logo__img" alt="logo" src="img/logo.png">BRAN<span class="logo__span">D</span></router-link>
				<form class="header__form" action="#">
					<div class="header__browse">Browse <i class="arrow-down"></i>
						<div class="drop drop_browse drop_block">
							<div class="drop__col">
								<h3 class="drop__h3">Women</h3>
								<ul class="drop__ul">
									<li><a href="#" class="drop__link">Dresses</a></li>
									<li><a href="#" class="drop__link">Tops</a></li>
									<li><a href="#" class="drop__link">Sweaters/Knits</a></li>
									<li><a href="#" class="drop__link">Jackets/Coats</a></li>
									<li><a href="#" class="drop__link">Blazers</a></li>
									<li><a href="#" class="drop__link">Denim</a></li>
									<li><a href="#" class="drop__link">Leggings/Pants</a></li>
									<li><a href="#" class="drop__link">Skirts/Shorts</a></li>
									<li><a href="#" class="drop__link">Accessories</a></li>
								</ul>
								<h3 class="drop__h3">Men</h3>
								<ul class="drop__ul">
									<li><a href="#" class="drop__link">Tees/Tank tops</a></li>
									<li><a href="#" class="drop__link">Shirts/Polos</a></li>
									<li><a href="#" class="drop__link">Sweaters</a></li>
									<li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
									<li><a href="#" class="drop__link">Blazers</a></li>
									<li><a href="#" class="drop__link">Jackets/vests</a></li>
								</ul>
							</div>
						</div>
					</div>
					<input class="header__input" type="text">
					<button type="button" class="header__search"><img src="img/search.png" alt="search"></button>
				</form>
			</div>
			<div class="header__right">
				<div class="header__drop"><router-link to="/cart"><img class="header__cart" src="img/cart.png" alt="cart"></router-link>
					<div class="drop drop_block drop__cart drop_sm-pad">
						<div class="drop__col">
							<div v-for="item in cart" :key="item.id" class="drop__row">
								<a href="#"><img :src="item.image_url" alt="cart-item"></a>
								<div class="drop__body">
									<a href="#">
										<h4 class="drop__h4">{{ item.name }}</h4>
									</a>
									<p class="drop__cart-p">{{ item.qty}} &#xa0;x &#xa0;&dollar;{{ item.price }}</p>
								</div>
								<button class="remove-btn" @click="$emit('del-from-cart', item.id)" ><i class="fas fa-times-circle"></i></button>
							</div>
							<div v-if="notEmpty" class="drop__price">
								<h2 class="drop__h2">total</h2>
								<h2 class="drop__h2">$ {{cartSum}}</h2>
							</div>
							<div v-else class="drop__price">
								<h2 class="drop__h2">Cart is empty</h2>
							</div>
							<router-link to="/cart" class="drop__btn">Go to cart</router-link>
							<router-link to="/checkout" class="drop__btn drop__btn_orange">Checkout</router-link>
						</div>
					</div>
				</div>
				<!-- <a href="#" class="button">My Account <i class="arrow-down"></i></a> -->
			</div>
		</header>
	`
};

