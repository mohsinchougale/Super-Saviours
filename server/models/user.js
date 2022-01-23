import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
  gender: {
    type: String,
  },
  neck: {
    type: String,
  },
  waist: {
    type: String,
  },
  hip: {
    type: String,
  },
  address: {
    type: String,
  },
  allergies: {
    type: String,
  },
  medicalHistory: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
