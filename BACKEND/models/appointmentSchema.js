import mongoose from "mongoose";
import validator from "validator";


const appointmentSchema = new mongoose.Schema({
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
  appointment_date: {
    type: String,
    required: [true, "Appointment Date is Required!"],
  },
  department: {
    type: String,
    required: [true, "Department Name is Required!"]
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor Name Is Required!"]
    },
    lastName: {
      type: String,
      required: [true, "Doctor Name Is Required!"]
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export  const Appointment = mongoose.model("Appointment", appointmentSchema)

