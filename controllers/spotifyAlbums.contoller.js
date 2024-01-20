const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');


const spotifyGetAlbum = async (req,res) => {

  const token = localStorageAction('token');
  const album_id = req.params.album_id;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/albums/${album_id}`,
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


const spotifyGetSeveralAlbums = async (req,res) => {

  const token = localStorageAction('token');
  const album_ids = req.params.album_ids;

  const request = {
    method: 'get',
    url: `https://api.spotify.com/v1/albums?ids=${album_ids}`,
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


const spotifyNewReleases = async (req,res) => {

  const token = localStorageAction('token');

  const request = {
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/new-releases',
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

module.exports = {spotifyGetAlbum, spotifyGetSeveralAlbums, spotifyNewReleases};