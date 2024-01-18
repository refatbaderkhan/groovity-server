const express = require('express');
const router = express.Router();
const spotifyAvailableGenreSeeds = require('../controllers/spotifyGenres.controller')
const spotifyNewReleases = require('../controllers/spotifyAlbums.contoller')
const {spotifySeveralBrowseCategories, spotifySingleBrowseCategory} = require('../controllers/spotifyCategories.controller')

router.get('/available-genre-seeds', spotifyAvailableGenreSeeds);
router.get('/new-releases', spotifyNewReleases);
router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)


module.exports = router;