const express = require('express');
const router = express.Router();
const spotifyGenres = require('../controllers/spotifyGenres.controller')
const spotifyReleases = require('../controllers/spotifyReleases.contoller')

router.get('/genres', spotifyGenres);
router.get('/releases', spotifyReleases);

module.exports = router;