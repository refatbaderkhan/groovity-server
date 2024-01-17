const express = require('express');
const router = express.Router();
const spotifyToken = require('../controllers/spotifyToken.controller')

router.get('/', spotifyToken);

module.exports = router;
