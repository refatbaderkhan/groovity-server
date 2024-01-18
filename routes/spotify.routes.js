const express = require('express');
const router = express.Router();
const spotifyNewReleases = require('../controllers/spotifyAlbums.contoller')
const {spotifySeveralBrowseCategories, spotifySingleBrowseCategory} = require('../controllers/spotifyCategories.controller')
const spotifyAvailableGenreSeeds = require('../controllers/spotifyGenres.controller')
const {spotifyFeaturedPlaylists, spotifyCategoryPlaylists} = require('../controllers/spotifyPlaylists.controller')

router.get('/new-releases', spotifyNewReleases);
router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)
router.get('/available-genre-seeds', spotifyAvailableGenreSeeds);
router.get('/featured-playlists', spotifyFeaturedPlaylists);
router.get('/category-playlists/:category_id', spotifyCategoryPlaylists);

module.exports = router;