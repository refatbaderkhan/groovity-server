const express = require('express');
const router = express.Router();
const {spotifyGetAlbum, spotifyGetSeveralAlbums, spotifyGetAlbumTracks, spotifyNewReleases} = require('../controllers/spotifyAlbums.contoller')
const {spotifyGetArtist, spotifyGetSeveralArtists, spotifyGetArtistAlbums} = require('../controllers/spotifyArtists.controller')
const {spotifySeveralBrowseCategories, spotifySingleBrowseCategory} = require('../controllers/spotifyCategories.controller')
const spotifyAvailableGenreSeeds = require('../controllers/spotifyGenres.controller')
const {spotifyGetPlaylist, spotifyFeaturedPlaylists, spotifyCategoryPlaylists} = require('../controllers/spotifyPlaylists.controller')

router.get('/get-album/:album_id', spotifyGetAlbum);
router.get('/get-several-albums/:album_ids', spotifyGetSeveralAlbums);
router.get('/get-album-tracks/:album_id', spotifyGetAlbumTracks);
router.get('/new-releases', spotifyNewReleases);

router.get('/get-artist/:artist_id', spotifyGetArtist);
router.get('/get-several-artists/:artist_ids', spotifyGetSeveralArtists);
router.get('/get-artist-albums/:artist_id', spotifyGetArtistAlbums);

router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)

router.get('/available-genre-seeds', spotifyAvailableGenreSeeds);

router.get('/get-playlist/:playlist_id', spotifyGetPlaylist);
router.get('/featured-playlists', spotifyFeaturedPlaylists);
router.get('/category-playlists/:category_id', spotifyCategoryPlaylists);

module.exports = router;