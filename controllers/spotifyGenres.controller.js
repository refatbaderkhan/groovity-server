const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');
const spotifyToken = require('./spotifyToken.controller');

const spotifyGenres = async (req,res) => {

  const token = localStorageAction('token');

  if (!token) {
    spotifyToken();
  }

  const request = {
    method: 'get',
    url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
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

module.exports = spotifyGenres;