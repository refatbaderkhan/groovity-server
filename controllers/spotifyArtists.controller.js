const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');


const spotifyGetArtist = async (req,res) => {

  const token = localStorageAction('token');
  const artist_id = req.params.artist_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artist_id}`,
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


const spotifyGetSeveralArtists = async (req,res) => {

  const token = localStorageAction('token');
  const artist_ids = req.params.artist_ids;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists?ids=${artist_ids}`,
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


const spotifyGetArtistAlbums = async (req,res) => {

  const token = localStorageAction('token');
  const artist_id = req.params.artist_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artist_id}/albums`,
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

//take care of auto detect country later
const spotifyGetArtistTopTracks = async (req,res) => {

  const token = localStorageAction('token');
  const artist_id = req.params.artist_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${artist_id}/top-tracks?country=EG`,
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

module.exports = {spotifyGetArtist, 
                  spotifyGetSeveralArtists,
                  spotifyGetArtistAlbums,
                  spotifyGetArtistTopTracks
                };