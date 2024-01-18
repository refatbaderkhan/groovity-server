const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');

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

module.exports = spotifyFeaturedPlaylists;