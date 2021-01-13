import {breadcrumbscomp} from '../blocks/breadcrumbs.js'

export const newarrivalscomp = {
	components: {
		breadcrumbscomp
	},
	data: function () {
		return {
		}
	},
	props: ["products"],
	computed: {
		newProducts: 
			function () {
			return this.products.filter(item => (item.id > 12 && item.id < 17))
		}
	},
	template: `
		<div>
			<breadcrumbscomp></breadcrumbscomp>
			<section class="single-jumbotron">
				<button class="single-jumbotron__btn"><i class="fas fa-chevron-left"></i></button>
				<img src="img/Single-page/Jumbotron-img.png" alt="Single-page">
				<button class="single-jumbotron__btn"><i class="fas fa-chevron-right"></i></button>
			</section>
			<main class="single-main center">
				<section class="single-product">
					<h4 class="single__h4 orange-color">WOMEN COLLECTION </h4>
					<p class="bottom-line"></p>
					<h3 class="single__h3">Moschino Cheap And Chic</h3>
					<p class="single__description">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>
					<div class="single__features">
						<h4 class="single__h4"><span class="single__span">MATERIAL:</span> COTTON</h4>
						<h4 class="single__h4"><span class="single__span">DESIGNER:</span> BINBURHAN</h4>
					</div>
					<h2 class="single__price">$561</h2>
					<div class="single__params">
						<div class="single__params__col">
							<h4 class="h4 single__h4">CHOOSE COLOR</h4>
							<select class="single__select" name="color" id="color-sel">
								<option value="red">Red</option>
								<option value="blue">Blue</option>
							</select>
						</div>
						<div class="single__params__col">
							<h4 class="h4 single__h4">CHOOSE SIZE</h4>
							<select class="single__select" name="size" id="size-sel">
								<option value="xxl">XXL</option>
								<option value="xl">XL</option>
								<option value="l">L</option>
								<option value="m">M</option>
								<option value="s">S</option>
								<option value="xs">XS</option>
								<option value="xxs">XXS</option>
							</select>
						</div>
						<div class="single__params__col">
							<h4 class="h4 single__h4">QUANTITY</h4>
							<input class="single__input" type="number">
						</div>
					</div>
				<!--	<button class="single__btn"><i class="fas fa-shopping-cart"></i>Add To Chart</button> -->
				</section>
				<section class="single__products">
					<h2 class="single__products__h2">you may like also</h2>
					<div class="products">
						<div v-for="item in newProducts" :key="item.id" class="products__item">
							<div class="products__hover">
								<a href="#"><img :src="item.image_url" alt="single-1" class="products__img"></a>
								<a href="#" @click.prevent="$emit('add-to-cart',item.id)" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">{{item.name}}</p>
							</a>
							<p class="products__price">$ {{item.price}}</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	`
}