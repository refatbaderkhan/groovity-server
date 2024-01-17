const express = require('express');
const app = express();
const cors = require('cors');
const spotifyToken = require('./controllers/spotifyToken.controller')

app.use(cors());


const spotifyRouter = require("./routes/spotify.routes")
app.use("/spotify", spotifyRouter)

app.listen(8000, (err) => {
  if (err) {
    throw err;
  }
  spotifyToken();
  setInterval(spotifyToken, 3600000);
  console.log('Server started on port 8000');
});



