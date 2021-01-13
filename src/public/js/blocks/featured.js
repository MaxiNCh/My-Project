export const featuredcomp = {
	props: ["featured"],
	template: `
		<section class="featured center">
			<h3 class="featured_h3">Fetured Items</h3>
			<p class="featured__text">Shop for items based on what we featured in this week</p>
			<div class="products">
				<div v-for="item in featured" :key="item.id" class="products__item">
					<div class="products__hover">
						<a href="#"><img :src="item.image_url" alt="Featured_item_1" class="products__img"></a>
						<a href="#" v-on:click.prevent="$emit('add-to-cart', item.id)" class="products__cart-btn"><img src="./img/cart-white.png" alt="cart">Add to Cart</a>
					</div>
					<a href="#">
						<p class="products__name">{{ item.name }}</p>
					</a>
					<p class="products__price">&dollar;{{ item.price }}</p>
				</div>
			</div>
			<router-link to="/products" class="button featured__button">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></router-link>
		</section>
	`
}