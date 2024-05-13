import mongoose, { Schema } from "mongoose";
const admissionSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    minLength: [2, "First Name much be larger than 2 characters"],
    maxLength: [50, "First Name much be lesser than 2 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    trim: true,
    minLength: [2, "Last Name be larger than 2 characters"],
    maxLength: [50, "Last Name be lesser than 2 characters"],
  },
  fathersName: {
    type: String,
    trim: true,
    minLength: [4, "Father's Name much be larger than 3 characters"],
    maxLength: [20, "Father's Name much be lesser than 21 characters"],
  },
  mothersName: {
    type: String,
    trim: true,
    minLength: [4, "Mother's Name much be larger than 3 characters"],
    maxLength: [20, "Mother's Name much be lesser than 21 characters"],
  },
  localGurdians: {
    type: String,
    trim: true,
    minLength: [4, "Local Gurdian's Name much be larger than 3 characters"],
    maxLength: [20, "Local Gurdian's Name much be lesser than 21 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  phone: {
    type: Number,
    required: [true, "Contact number is required"],
    minLength: [10, "Name much be larger than 9 characters"],
    maxLength: [12, "Name much be lesser than 13 characters"],
  },
  sex: {
    type: String,
    required: [true, "Gender is required"],
    minLength: [4, "Name much be larger than 3 characters"],
    maxLength: [6, "Name much be lesser than 7 characters"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  courseName: {
    type: String,
    required: [true, "Course Name is required"],
  },
  courseType: {
    type: String,
    required: [true, "Course Type is required"],
  },
  wasStudent: {
    type: Boolean,
    required: [true, "Have you admitted earlier? field is required"],
  },
  dob: {
    type: Date,
    default: Date.now,
    required: [true, "Date of Birth is required"],
  },
  religion: {
    type: String,
  },
  nationality: {
    type: String,
    required: [true, "Nationality is required"],
  },
  bloodGroup: {
    type: String,
  },
  presentAddress: {
    type: String,
    
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanant Address is required"],
  },
});

const Admission =
  mongoose.models.Admission || mongoose.model("Admission", admissionSchema);

export default Admission;
