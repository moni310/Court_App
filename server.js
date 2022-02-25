require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoutes");
var cors = require('cors')
const app = express();
app.use(cors())
const user_name=process.env.user_name
const user_password=process.env.user_password

let port=process.env.port
let host =process.env.host

app.use(express.static("routes"))

app.use(express.json());

mongoose.connect( `mongodb+srv://${user_name}:${user_password}@cluster0.h1c9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),

  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    
  }

app.use(UserRouter);
console.log("mongoDB is connect")

app.listen(port, () => {
  console.log(`Server is running :${host}:${port}`)
});