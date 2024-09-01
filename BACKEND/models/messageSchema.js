import mongoose from "mongoose";
import validator from "validator";


const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First Name Must Contain At Least Characters!"]
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last Name Must Contain At Least Characters!"]
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Please Provise A Valid Email"]
  },
  phone: {
    type: Number,
    required: true,
    minlength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxlength: [10, "Phone Number Must Contain Exact 10 Digits!"]
  },
  message: {
    type: String,
    required: true,
    minlength: [10, "Message Must Contain At Least 10 Characters!"],
    
  },
});

export const Message = mongoose.model("Message", messageSchema);