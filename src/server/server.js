const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const cart = require('./cart.js')

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public/')));
app.use('/db/cart', cart)


const pathesDB = {
	products: {
		path: '/db/products',
		filePath: 'db/products.json'	
	},
	cart: {
		path: '/db/cart',
		filePath: 'db/cart.json'	
	},
	featured: {
		path: '/db/featured',
		filePath: 'db/featured.json'	
	}
}

const getFromDb = function (pathDB) {
	return app.get(pathDB.path, (req, res) => {
		fs.readFile(path.resolve(__dirname, pathDB.filePath), 'utf-8', (err, data) => {
			if (err) {
				app.send(JSON.stringify({error: err}))
			} else {
				res.send(data);
			}
		})
	})
}



getFromDb(pathesDB.products);
getFromDb(pathesDB.cart);
getFromDb(pathesDB.featured);


const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening port ${port}`)
})