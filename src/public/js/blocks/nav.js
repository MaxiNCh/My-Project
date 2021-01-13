export const navcomp = {
	template: `
		<nav class="nav center">
			<ul class="menu">
				<li class="menu__list"><router-link to="/" class="menu__link">Home</router-link></li>
				<li class="menu__list"><router-link to="/products" class="menu__link">Products</router-link></li>
					<div class="drop drop_flex">
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
						</div>
						<div class="drop__col">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="#" class="drop__link">Dresses</a></li>
								<li><a href="#" class="drop__link">Tops</a></li>
								<li><a href="#" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="#" class="drop__link">Jackets/Coats</a></li>
							</ul>
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="#" class="drop__link">Dresses</a></li>
								<li><a href="#" class="drop__link">Tops</a></li>
								<li><a href="#" class="drop__link">Sweaters/Knits</a></li>
							</ul>
						</div>
						<div class="drop__col">
							<h3 class="drop__h3">Women</h3>
							<ul class="drop__ul">
								<li><a href="#" class="drop__link">Dresses</a></li>
								<li><a href="#" class="drop__link">Tops</a></li>
								<li><a href="#" class="drop__link">Sweaters/Knits</a></li>
								<li><a href="#" class="drop__link">Jackets/Coats</a></li>
							</ul>
							<img class="drop__img" src="img/drop-img.png" alt="drop-img">
						</div>
					</div>
				</li>
				<li class="menu__list"><router-link to="/newarrivals" class="menu__link">New arrivals</router-link></li>
				<!-- <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
				<li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
				<li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
				<li class="menu__list"><a href="#" class="menu__link">Hot Deals</a></li> -->
			</ul>
		</nav>
	`
};