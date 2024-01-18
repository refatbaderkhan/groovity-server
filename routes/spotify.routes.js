const express = require('express');
const router = express.Router();
const spotifyNewReleases = require('../controllers/spotifyAlbums.contoller')
const {spotifySeveralBrowseCategories, spotifySingleBrowseCategory} = require('../controllers/spotifyCategories.controller')
const spotifyAvailableGenreSeeds = require('../controllers/spotifyGenres.controller')
const spotifyFeaturedPlaylists = require('../controllers/spotifyPlaylists.controller')

router.get('/new-releases', spotifyNewReleases);
router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)
router.get('/available-genre-seeds', spotifyAvailableGenreSeeds);
router.get('/featured-playlists', spotifyFeaturedPlaylists);

module.exports = router;