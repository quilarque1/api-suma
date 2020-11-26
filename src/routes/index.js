const express = require('express');
const router = express.Router();
const SumaService = require('../services/suma');

router.get('/health', (req, res) => {
	res.json({ status: "api-suma is Up!!" });
});

router.get('/suma/:operacion', (req, res, next) => {
	console.log('Operacion a resolver: ', req.params)

	try {
		const sumaService = new SumaService();

		res.status(200).json({
			suma: sumaService.getSuma(req.params.operacion)
		});

	} catch (e) {
		next(e);
	}
});

module.exports = router;
