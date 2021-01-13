export const breadcrumbscomp = {
	template: `
		<section class="breadcrumbs center">
		   <h2 class="breadcrumbs__h2">{{this.$route.name}} </h2>
		   <nav class="breadcrumbs__links">
		      <router-link to="/" class="breadcrumbs__link">Home</router-link>
		      <router-link to="/products" class="breadcrumbs__link"> Products</router-link>
		      <router-link to="/newarrivals" class="breadcrumbs__link"> New Arrivals</router-link>
		   </nav>
		</section>
	`
}