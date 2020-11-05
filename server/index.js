const express = require('express') 
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const server = require('./config/server')

const app = express();

app.use(bodyParser.json());


mongoose
  .connect(server.mongoData)
  .then(() =>
    app.listen(server.port, () =>
      console.log(`started on ${server.port} port`)
    )
  )
  .catch((err) =>
    console.error(`database connect err ${server.mongoData}`, err)
);
  
app.get("/", (req, res) => res.send("back-end"));
