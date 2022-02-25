const { darkslateblue } = require("color-name");
const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Name is required.']
  },
  Nameofcourt: {
    type: String,
    required: [true, 'Court is required.']
    
  },
  Typeofcase:{
    type: String,
    required: [true, 'Type of case is required.']
  },
  Nameofpolicestation:{
    type: String,
    required: [true, 'Police station name is required.']
  },
  DateofFIR:{
    type:Date
  },
  Lastdateofhearing:{
    type:Date
  },
  Nextdateofhearing:{
    type:Date
    
  },
  Currentdateofhearing:{
    type:Date
  }
});

const Info = mongoose.model("user", InfoSchema);

module.exports = Info;