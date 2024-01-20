const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');
const { clientId, clientSecret} = require('../spotifyClient');


const spotifyToken = async (req,res) => {

  const client_id = clientId;
  const client_secret = clientSecret;

  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');

  const request = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  try {
    const response = await axios(request);
    localStorageAction('token', response.data.access_token);
  }

  catch (error) {
    console.log(error);
  }
}


module.exports = spotifyToken;