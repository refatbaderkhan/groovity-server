const express = require('express');
const router = express.Router();

const {spotifyGetAlbum,
       spotifyGetSeveralAlbums, 
       spotifyGetAlbumTracks, 
       spotifyNewReleases
      } = require('../controllers/spotifyAlbums.contoller')

const {spotifyGetArtist,
       spotifyGetSeveralArtists, 
       spotifyGetArtistAlbums, 
       spotifyGetArtistTopTracks,
       spotifyGetArtistRelatedArtists
      } = require('../controllers/spotifyArtists.controller')
      
const {spotifySeveralBrowseCategories, 
       spotifySingleBrowseCategory
      } = require('../controllers/spotifyCategories.controller')

const spotifyAvailableGenreSeeds 
        = require('../controllers/spotifyGenres.controller')

const {spotifyGetPlaylist, 
       spotifyFeaturedPlaylists, 
       spotifyCategoryPlaylists
      } = require('../controllers/spotifyPlaylists.controller')

const {spotifyGetTrack,
       spotifyGetSeveralTracks,
       SpotifygetTrackAudioFeatures,
       spotifyGetTrackAudioAnalysis,
       spotifyGetTracksRecommendations
      } = require('../controllers/spotifyTracks.controller')


router.get('/get-album/:album_id', spotifyGetAlbum);
router.get('/get-several-albums/:album_ids', spotifyGetSeveralAlbums);
router.get('/get-album-tracks/:album_id', spotifyGetAlbumTracks);
router.get('/new-releases', spotifyNewReleases);

router.get('/get-artist/:artist_id', spotifyGetArtist);
router.get('/get-several-artists/:artist_ids', spotifyGetSeveralArtists);
router.get('/get-artist-albums/:artist_id', spotifyGetArtistAlbums);
router.get('/get-artist-top-tracks/:artist_id', spotifyGetArtistTopTracks);
router.get('/get-artist-related-artists/:artist_id', spotifyGetArtistRelatedArtists);

router.get('/several-browse-categories', spotifySeveralBrowseCategories)
router.get('/single-browse-category/:category_id', spotifySingleBrowseCategory)

router.get('/available-genre-seeds', spotifyAvailableGenreSeeds);

router.get('/get-playlist/:playlist_id', spotifyGetPlaylist);
router.get('/featured-playlists', spotifyFeaturedPlaylists);
router.get('/category-playlists/:category_id', spotifyCategoryPlaylists);

router.get('/get-track/:track_id', spotifyGetTrack);
router.get('/get-several-tracks/:track_ids', spotifyGetSeveralTracks);
router.get('/get-track-audio-features/:track_id', SpotifygetTrackAudioFeatures);
router.get('/get-track-audio-analysis/:track_id', spotifyGetTrackAudioAnalysis);
router.get('/get-tracks-recommendations/:seed_artists/:seed_genres/:seed_tracks', spotifyGetTracksRecommendations);


module.exports = router;