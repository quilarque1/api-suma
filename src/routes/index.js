const express = require('express');
const router = express.Router();
const SumaService = require('../services/suma');

router.get('/health', (req, res) => {
	const sumaService = new SumaService();
	console.log(sumaService.getSuma('jh'))
	res.json({ status: "api-suma is Up!!" });
});

module.exports = router;
