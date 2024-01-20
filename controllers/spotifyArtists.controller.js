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


module.exports = {spotifyGetArtist};