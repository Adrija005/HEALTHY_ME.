import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
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
  ID: {
    type: String,
    required: true,
    minlength: [10, "ID Must Contain 10 Digits!"],
    maxlength: [10, "ID Must Contain 10 Digits!"], 
  },
  dob:{
    type: Date,
    required: [true, "DOB is required!"],
  },
  gender:{
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  password:{
    type: String,
    minlength:[8, "Password Must Contain 8 Characters!"],
    required: true,
    select: false
  },
  role:{
    type: String,
    required: true,
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment:{
    type: String,
  },
  docAvatar:{
    public_id: String,
    url: String
  },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
      next()
    }
    this.password = await bcrypt.hash(this.password, 8)
});

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  })
}

export const User = mongoose.model("User", userSchema)