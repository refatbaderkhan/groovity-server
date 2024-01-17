const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)


app.listen(8000, (err) => {
  if (err) {
    throw err;
  }
  console.log('Server started on port 8000');
});



