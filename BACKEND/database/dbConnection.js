import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://adrijaganguly1:adrija24@cluster0.pvlx6.mongodb.net/?retryWrites=true",{
    dbName: "DOCTOR'SAPP",
  }).then(() => {
    console.log("Connected to database!")
  }).catch(err =>{
      console.log(`Some error occured while connecting to database: ${err}`)
  })
}