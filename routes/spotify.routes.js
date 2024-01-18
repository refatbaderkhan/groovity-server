const express = require('express');
const router = express.Router();
const spotifyGenres = require('../controllers/spotifyGenres.controller')
const spotifyReleases = require('../controllers/spotifyReleases.contoller')
const {spotifySeveralBrowseCategories, spotifySingleBrowseCategory} = require('../controllers/spotifyCategories.controller')

router.get('/genres', spotifyGenres);
router.get('/releases', spotifyReleases);
router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)


module.exports = router;