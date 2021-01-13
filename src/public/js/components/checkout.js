export const checkoutcomp = {
	template: `
		<main class="accordion center">
			<div class="accordion__item ">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="address" checked>
				<label class="accordion__heading-label" for="address">01. Shipping address</label>
				<div class="accordion__content accordion__big accordion__flex">
					<div class="accordion__left">
						<form action="#">
							<h4 class="accordion__h4">Check as a guest or register</h4>
							<p class="accordion__p mt">Register with us for future convenience</p>
							<input name="register-status" type="radio" id="guest">
							<label class="accordion__label" for="guest">checkout as guest</label>
							<br>
							<input name="register-status" type="radio" id="registered">
							<label class="accordion__label mb" for="registered">register</label>
							<h4 class="accordion__h4 ">register and save time!</h4>
							<p class="accordion__p mt mb">Register with us for future convenience</p>
							<p class="accordion__p"><i class="fas fa-angle-double-right"></i> Fast and easy checkout</p>
							<p class="accordion__p mt"><i class="fas fa-angle-double-right"></i> Easy access to your order history and status</p>
							<button class="accordion__button" type="button">Continue</button>
						</form>
					</div>
					<div class="accordion__right">
						<form action="#">
							<h4 class="accordion__h4">Already registed?</h4>
							<p class="accordion__p mt">Please log in below</p>
							<label class="accordion__label" for="email-address">EMAIL ADDRESS</label>
							<br>
							<input class="mt" type="email" id="email-address">
							<br>
							<label class="accordion__label" for="password">PASSWORD</label>
							<br>
							<input class="mt" type="password" id="password">
							<h4 class="accordion__p orange-color">* Required Fileds</h4>
							<button class="accordion__button" type="button">Log In</button>
							<h4 class="accordion__h4">Forgot Password ?</h4>
						</form>
					</div>
				</div>
			</div>
			<div class="accordion__item">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="billing">
				<label class="accordion__heading-label" for="billing">02. BILLING INFORMATION</label>
				<div class="accordion__content accordion__medium">
					<h4>Content Title </h4>
					<br>
					<p>Some content.... </p>
				</div>
			</div>
			<div class="accordion__item">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="3">
				<label class="accordion__heading-label" for="3">03. SHIPPING INFORMATION</label>
				<div class="accordion__content accordion__medium">
					<h4>Content Title </h4>
					<br>
					<p>Some content.... </p>
				</div>
			</div>
			<div class="accordion__item">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="4">
				<label class="accordion__heading-label" for="4">04. SHIPPING METHOD</label>
				<div class="accordion__content accordion__medium">
					<h4>Content Title </h4>
					<br>
					<p>Some content.... </p>
				</div>
			</div>
			<div class="accordion__item">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="5">
				<label class="accordion__heading-label" for="5">05. PAYMENT METHOD</label>
				<div class="accordion__content accordion__medium">
					<h4>Content Title </h4>
					<br>
					<p>Some content.... </p>
				</div>
			</div>
			<div class="accordion__item">
				<input class="accordion__hidden-radio" type="radio" name="accordion" id="6">
				<label class="accordion__heading-label" for="6">06. ORDER REVIEW</label>
				<div class="accordion__content accordion__medium">
					<h4>Content Title </h4>
					<br>
					<p>Some content.... </p>
				</div>
			</div>
		</main>
	`
}