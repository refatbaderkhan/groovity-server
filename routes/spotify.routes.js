const express = require('express');
const router = express.Router();
const spotifyGenres = require('../controllers/spotifyGenres.controller')
const spotifyReleases = require('../controllers/spotifyReleases.contoller')
const spotifySeveralBrowseCategories = require('../controllers/spotifyCategories.controller')

router.get('/genres', spotifyGenres);
router.get('/releases', spotifyReleases);
router.get('/several-browse-categories', spotifySeveralBrowseCategories);


module.exports = router;