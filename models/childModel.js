const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  lastname: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  firstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  birthday: {
    type: Date,
    required: true
  },

  parentfirstname: {
    type: String,
    trim: true,
    required: "Parent First Name is Required"
  },

  parentlasttname: {
    type: String,
    trim: true,
    required: "Parent Last Name is Required"
  },

  parentphone: {
      type: Number,
      match: [/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number."],
  },

  caregiver: {
      type: String,
      trim: true,
      required: "Must have an assigned Caregiver at all times."
  }

});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;