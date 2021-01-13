import {breadcrumbscomp} from '../blocks/breadcrumbs.js'

export const productscomp = {
	components: {
		breadcrumbscomp
	},
	template: `
		<div>
			<breadcrumbscomp></breadcrumbscomp>
			<main class=" product-main center">
				<aside class="aside-menu">
					<details class="aside__details">
						<summary class="aside__summary">Category <i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></summary>
						<ul class="aside__list">
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Bags</a></li>
							<li><a href="#">Denim</a></li>
							<li><a href="#">Hoodies & Sweatshirt</a>s</li>
							<li><a href="#">Jackets & Coats</a></li>
							<li><a href="#">Pants</a></li>
							<li><a href="#">Polos</a></li>
							<li><a href="#">Shirts</a></li>
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Shorts</a></li>
							<li><a href="#">Sweaters & Knits</a></li>
							<li><a href="#">T-Shirts</a></li>
							<li><a href="#">Tanks</a></li>
						</ul>
					</details>
					<details class="aside__details">
						<summary class="aside__summary">BRAND <i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></summary>
						<ul class="aside__list">
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Bags</a></li>
							<li><a href="#">Denim</a></li>
							<li><a href="#">Hoodies & Sweatshirt</a>s</li>
							<li><a href="#">Jackets & Coats</a></li>
							<li><a href="#">Pants</a></li>
							<li><a href="#">Polos</a></li>
							<li><a href="#">Shirts</a></li>
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Shorts</a></li>
							<li><a href="#">Sweaters & Knits</a></li>
							<li><a href="#">T-Shirts</a></li>
							<li><a href="#">Tanks</a></li>
						</ul>
					</details>
					<details class="aside__details">
						<summary class="aside__summary">DESIGNER <i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></summary>
						<ul class="aside__list">
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Bags</a></li>
							<li><a href="#">Denim</a></li>
							<li><a href="#">Hoodies & Sweatshirt</a>s</li>
							<li><a href="#">Jackets & Coats</a></li>
							<li><a href="#">Pants</a></li>
							<li><a href="#">Polos</a></li>
							<li><a href="#">Shirts</a></li>
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Shorts</a></li>
							<li><a href="#">Sweaters & Knits</a></li>
							<li><a href="#">T-Shirts</a></li>
							<li><a href="#">Tanks</a></li>
						</ul>
					</details>
				</aside>
				<section class="products-container">
					<div class="products__filter">
						<div class="filter__col">
							<h4 class="filter__h4">Trending now</h4>
							<div class="filter__trending">
								<div class="filter__trending__row">
									<a href="#">
										<p>Bohemian</p>
									</a>
									<span>|</span>
									<a href="#">
										<p>Floral</p>
									</a>
									<span>|</span>
									<a href="#">
										<p>Lace</p>
									</a>
								</div>
								<div class="filter__trending__row">
									<a href="#">
										<p>Floral</p>
									</a>
									<span>|</span>
									<a href="#">
										<p>Lace</p>
									</a>
									<span>|</span>
									<a href="#">
										<p>Bohemian</p>
									</a>
								</div>
							</div>
						</div>
						<div class="filter__col">
							<h4 class="filter__h4">Size</h4>
							<div class="filter__size">
								<div><input type="checkbox" id="xxs" name="xxl">
									<label for="xxs">XXS</label></div>
								<div><input type="checkbox" id="xs" name="xs">
									<label for="xs">XS</label></div>
								<div><input type="checkbox" id="s" name="s">
									<label for="s">S</label></div>
								<div><input type="checkbox" id="m" name="m">
									<label for="m">M</label></div>
								<div><input type="checkbox" id="l" name="l">
									<label for="l">L</label></div>
								<div><input type="checkbox" id="xl" name="xl">
									<label for="xl">XL</label></div>
								<div><input type="checkbox" id="xxl" name="xxl">
									<label for="xxl">XXL</label></div>
							</div>
						</div>
						<div class="filter__col">
							<h4 class="filter__h4">pRICE</h4>
							<div class="filter__price">
								<input type="range" min="52" max="400" step="1">
								<p>$52</p>
								<p>$400</p>
							</div>
						</div>
					</div>
					<div class="products__sort">
						<p class="products__sort__p">Sort By</p>
						<select class="products__sort__sel" name="sort-by" id="sort-by">
							<option value="name">Name</option>
							<option value="price">Price</option>
						</select>
						<p class="products__sort__p">Show</p>
						<select class="products__sort__sel" name="show-num" id="show-num">
							<option value="9">09</option>
							<option value="18">18</option>
						</select>
					</div>
					<div class="products">
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-1.png" alt="Product-1" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-2.png" alt="Product-2" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-3.png" alt="Product-3" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-4.png" alt="Product-4" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-5.png" alt="Product-5" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-6.png" alt="Product-6" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-7.png" alt="Product-7" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-8.png" alt="Product-8" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
						<div class="products__item">
							<div class="products__hover">
								<a href="#"><img src="img/Product/Product-9.png" alt="Product-9" class="products__img"></a>
								<a href="#" class="products__cart-btn"><img src="img/cart-white.png" alt="cart">Add to Cart</a>
							</div>
							<a href="#">
								<p class="products__name">Mango People T-shirt</p>
							</a>
							<p class="products__price">$52.00</p>
						</div>
					</div>
					<div class="products__pages">
						<div class="products__pages__left">
							<a class="products__pages__link" href="#"><i class="fas fa-chevron-left"></i></a>
							<a class="products__pages__link products__pages__link-active" href="#">
								<p>1</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>2</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>3</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>4</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>5</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>6</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>.....</p>
							</a>
							<a class="products__pages__link" href="#">
								<p>20</p>
							</a>
							<a class="products__pages__link products__pages__link-active" href="#"><i class="fas fa-chevron-right"></i></a>
						</div>
						<button class="products__pages__button">View All</button>
					</div>
				</section>
			</main>
			<section class="states center">
				<div class="states__col">
					<img src="img/Cargo_truck.png" alt="cargo_truck" class="states__logo">
					<h4 class="states_h4">Free Delivery</h4>
					<p class="states_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
				</div>
				<div class="states__col">
					<img src="img/Percent.png" alt="discounts" class="states__logo">
					<h4 class="states_h4">Sales & discounts</h4>
					<p class="states_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
				</div>
				<div class="states__col">
					<img src="img/Crown.png" alt="quality" class="states__logo">
					<h4 class="states_h4">Quality assurance</h4>
					<p class="states_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
				</div>
			</section>
		</div>		
	`
}