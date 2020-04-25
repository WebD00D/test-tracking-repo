const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const TeacherSchema = new Schema({

  username: {
    type: String,
    trim: true, 
    required: "Username is required"
  },
  
  caregiverlastname: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  caregiverfirstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  caregiverlocation: {
    // trim: true,
  },

  caregiveremail: {
    type: String,
    match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Your email is your username.  Required."],  

  },

  caregiverpassword: {
    type: String,
    required: true
  }


});


TeacherSchema.plugin(passportLocalMongoose);
const Teacher = mongoose.model("Teacher", TeacherSchema);


module.exports = Teacher;