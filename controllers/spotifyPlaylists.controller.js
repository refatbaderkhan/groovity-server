const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');


const spotifyGetPlaylist = async (req,res) => {

  const token = localStorageAction('token');
  const playlist_id = req.params.playlist_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${playlist_id}`,
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


const spotifyFeaturedPlaylists = async (req,res) => {

  const token = localStorageAction('token');

  const request = {
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/featured-playlists',
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


const spotifyCategoryPlaylists = async (req,res) => {

  const token = localStorageAction('token');
  const category_id = req.params.category_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,
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


module.exports = {spotifyGetPlaylist,
                  spotifyFeaturedPlaylists, 
                  spotifyCategoryPlaylists
                }