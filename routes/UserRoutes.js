const express = require("express");
const { renameSync } = require("fs");
const userModel = require("../models/user");
const app = express();

app.get("/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (error) {
    return res.status(500).send({"message":"server error"});
  }
});


app.post("/users", async (req, res) => {
  const User = new userModel(req.body);

  try {
    await User.save();
    res.send(User);
  } catch (error) {
    res.status(400).send(error.message);

  }
});



app.patch("/users/:id", async (request, response) => {
  try {
    await userModel.findByIdAndUpdate(request.params.id, request.body);
    await userModel.save();
    response.send(User);
    if (!User) response.status(404).send({"message":"Id is not found"});
    response.status(200).send();
  } catch (error) {
    response.status(400).send({"message":"Thats bad request"});
  }
});



app.delete("/users/:id", async (request, response) => {
  try {
    const User = await userModel.findByIdAndDelete(request.params.id);
    res.send("User has deleted")

    if (!User) response.status(404).send({"message":"Not found this id"});
    response.status(200).send();
  } catch (error) {
    response.status(400).send("This is bad request");
  }
});


app.get("/searchbaar/:id", async (req, res) => {

  try {
    // console.log(req.params.id)
    const User = await userModel.findOne({_id:req.params.id});
    // console.log(User)
    if (!User) res.status(404).send({"message":"Not found this id"});
    res.status(200).json(User);

} catch (error) {
    return res.status(500).send({"message":"server error"});
  }
});



app.get("/Casetype/:id", async (req, res) => {
  try {
    const User = await userModel.findOne({id:req.params.id});

    if (!User) res.status(404).send({"message":"Not found this id"});
    res.status(200).json(User);

} catch (error) {
    return res.status(500).send({"message":"server error"});
  }
});

module.exports = app;