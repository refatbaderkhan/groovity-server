const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');


const spotifyGetTrack = async (req,res) => {

  const token = localStorageAction('token');
  const track_id = req.params.track_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/tracks/${track_id}`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  try {
    const response = await axios(request);
    res.json(response.data);
  }

  catch (error) {
    console.log(error);
  }
}


const spotifyGetSeveralTracks = async (req,res) => {

  const token = localStorageAction('token');
  const track_ids = req.params.track_ids;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/tracks?ids=${track_ids}`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  try {
    const response = await axios(request);
    res.json(response.data);
  }
  
  catch (error) {
    console.log(error);
  }
}


const SpotifygetTrackAudioFeatures = async (req,res) => {

  const token = localStorageAction('token');
  const track_id = req.params.track_id; 

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/audio-features/${track_id}`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  try {
    const response = await axios(request);
    res.json(response.data);
  }
  
  catch (error) {
    console.log(error);
  }
}


const spotifyGetTrackAudioAnalysis = async (req,res) => {

  const token = localStorageAction('token');
  const track_id = req.params.track_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/audio-analysis/${track_id}`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  try {
    const response = await axios(request);
    res.json(response.data);
  }

  catch (error) {
    console.log(error);
  }
}


const spotifyGetTracksRecommendations = async (req,res) => {

  const token = localStorageAction('token');
  const seed_artists = req.params.seed_artists;
  const seed_genres = req.params.seed_genres;
  const seed_tracks = req.params.seed_tracks;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/recommendations?seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  try {
    const response = await axios(request);
    res.json(response.data);
  }

  catch (error) {
    console.log(error);
  }
}


module.exports = {spotifyGetTrack,
                  spotifyGetSeveralTracks,
                  SpotifygetTrackAudioFeatures,
                  spotifyGetTrackAudioAnalysis,
                  spotifyGetTracksRecommendations
                }