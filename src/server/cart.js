const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()


// Полное обновление товаров в корзине на сервере.
router.put('/', (req, res) => {
	const newCart = req.body;

	fs.readFile(path.resolve(__dirname, 'db/cart.json'), 'utf-8', (err, data) => {
		if (err) {
			res.send(JSON.stringify({error: err}));
			console.log(err);
		} else {
			const cart = JSON.parse(data);
			cart.goods = [...newCart];
			fs.writeFile(path.resolve(__dirname, 'db/cart.json'), JSON.stringify(cart, null, 4), (err) => {
				if (err) console.log(err);
			});
			res.send(JSON.stringify({response: "cart updated"}))
		}
	})
})

// Добавление нового товара в корзину или увеличение количества, если товар уже есть в корзину
router.post('/', (req, res) => {
	const newItem = {
		"id": req.body.id,
		"name": req.body.name,
		"price": req.body.price,
		"image_url": req.body.image_url,
		"qty": 1
	};
	fs.readFile(path.resolve(__dirname, 'db/cart.json'), 'utf-8', (err, data) => {
		if (err) {
			res.send(JSON.stringify({error: err}))
		} else {
			let cart = JSON.parse(data);
			let isPresent = cart.goods.some(item => item.id == newItem.id);
			if (isPresent == true) {
				cart.goods.forEach(item => {
					if (item.id == newItem.id) {
						item.qty++;
					}
				})
			} else {
				cart.goods = [...cart.goods, newItem]
			}

			fs.writeFile(path.resolve(__dirname, 'db/cart.json'), JSON.stringify(cart, null, 4), (err) => {
				if (err) console.log(err);
			});
			res.send(JSON.stringify(cart.goods, null, 4))
		}
	})
})

// Удаление товара из корзины по ID или очищение всей корзины
router.delete('/', (req, res) => {
	const productId = req.body.id;
	fs.readFile(path.resolve(__dirname, 'db/cart.json'), 'utf-8', (err, data) => {
		if (err) {
			res.send(JSON.stringify({error: err}))
		} else {
			const cart = JSON.parse(data);
			const delIndex = cart.goods.findIndex(item => item.id == productId);
			if (delIndex != -1) {
				cart.goods.splice(delIndex, 1);
			} else if (productId == 'all') {
				cart.goods.splice(0, cart.goods.length)
			}
			fs.writeFile(path.resolve(__dirname, 'db/cart.json'), JSON.stringify(cart, null, 4), (err) => {
				if (err) console.log(err);
			})
			res.send(JSON.stringify({response: 'deleted'}))
		}
	})
})

module.exports = router;