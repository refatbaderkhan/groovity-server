const axios = require('axios');

const spotifyToken = async (req,res) => {

  const client_id = 'f1a7e67eeb814f1289f25caae9ed44a7';
  const client_secret = '31c7635953b14e1db09d4cde9a058901';

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
    res.json(response.data);
  }

  catch (error) {
    console.log(error);
  }
}

module.exports = spotifyToken;