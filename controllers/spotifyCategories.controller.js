const axios = require('axios');
const localStorageAction = require('../config/localStorageAction');

const spotifySeveralBrowseCategories = async (req,res) => {

  const token = localStorageAction('token');

  const request = {
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/categories',
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

const spotifySingleBrowseCategory = async (req,res) => {
  
    const token = localStorageAction('token');
  
    const request = {
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/categories/' + req.params.category_id,
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


module.exports = {spotifySeveralBrowseCategories, spotifySingleBrowseCategory};