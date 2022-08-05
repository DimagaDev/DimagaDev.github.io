require('dotenv').config();
var express = require('express');
var router = express.Router();
var cors = require('cors');

const products = [];

router.post('/send', (req) => {
	try {
		console.log(req.body);
		products.push(req.body);
	} catch (error) {
		console.log(error);
		return res.status(500).send('Server error');
	}
});

router.get('/', async (req, res) => {
	try {
		res.json(products);
	} catch (error) {
		console.log(error);
		return res.status(500).send('Server error');
	}
});

// router.delete('/del', async (req, res) => {
// 	try {
// 		console.log(req.body);
// 		products.splice(req.body.index, 1);
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).send('Server error');
// 	}
// });

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
