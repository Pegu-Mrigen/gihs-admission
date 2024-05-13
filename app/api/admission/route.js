import connectDB from "@/app/lib/mongoDB";
import Admission from "@/app/models/admission";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    firstName,
    lastName,
    fathersName,
    email,
    phone,
    sex,
    dob,
    religion,
    nationality,
    bloodGroup,
    presentAddress,
    permanentAddress,
    mothersName,
    category,
    localGuardian,
    courseName,
    courseType,
    wasStudent,
  } = await req.json();
  try {
    await connectDB();
    await Admission.create({
      firstName,
      lastName,
      email,
      phone,
      sex,
      dob,
      religion,
      nationality,
      bloodGroup,
      presentAddress,
      permanentAddress,
      fathersName,
      mothersName,
      category,
      localGuardian,
      courseName,
      courseType,
      wasStudent,
    });
    return NextResponse.json({
      msg: ["Admission form submitted successfully!"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: ["Unable to submit form. Please check the internet connection and try after sometime!"],
      });
    }
  }
}
