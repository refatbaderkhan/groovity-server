const express = require('express');
const router = express.Router();
const spotifyGenres = require('../controllers/spotifyGenres.controller')

router.get('/genres', spotifyGenres);

module.exports = router;