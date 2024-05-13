"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [localGuardian, setLocalGuardian] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [religion, setReligion] = useState("");
  const [wasStudent, setWasStudent] = useState(false);
  const [nationality, setNationality] = useState(false);
  const [bloodGroup, setBloodGroup] = useState(false);
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [category, setCategory] = useState("");
  const [courseName, setCourseName] = useState(null);
  const [courseType, setCourseType] = useState(null);
  const [er, setEr] = useState([]);
  const [success, setSuccess] = useState(false);
  const [sameAddress, setSameAddress] = useState(false);

  const coursesTypeArray = ["Diploma", "Certificate", "Others"];
  const allCourses = [
    {
      diplomaArray: [
        { title: "DMLT" },
        { title: "CMS & ED " },
        { title: "Community Health Worker" },
        { title: "Medical Dresser" },
        { title: "Operation Theater Technology" },
        { title: "Radiography Technology" },
        { title: "ANM (Auxiliary Nursing and Midwifery)" },
        { title: "X-ray Technology" },
        { title: "Radiology and Imaging" },
        { title: "Nursing" },
        { title: "ICU Technology" },
        { title: "Egg Technology" },
      ],
    },
    {
      certificateArray: [
        { title: "Nursing Assistant" },
        { title: "Community Health Worker" },
        { title: "Physiotherapy" },
        { title: "Medical Laboratory Technology" },
        { title: "General Duty Assistant" },
        { title: "X-ray technician" },
        { title: "Emergency Medical Services" },
      ],
    },
    {
      certificateArray: [
        { title: "Other Nursing Assistant" },
        { title: "Other Physiotherapy" },
        { title: "Other Medical Laboratory Technology" },
        { title: "Other General Duty Assistant" },
        { title: "Other Emergency Medical Services" },
        { title: "Other X-ray technician" },
        { title: "Other Community Health Worker" },
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admission", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });
    const { msg, success } = await res.json();
    setEr(msg);
    setSuccess(success);
    console.log(er);
    if (success) {
      setFirstName("");
      setEmail("");
      setLastName("");
      setFathersName("");
      setPhone("");
      setSex("");
      setDob("");
      setReligion("");
      setNationality("");
      setBloodGroup("");
      setPermanentAddress("");
      setPresentAddress("");
      setMothersName("");
      setCategory("");
      setLocalGuardian("");
      setCourseName("");
      setCourseType("");
      setWasStudent("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-6">
        <div className="">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => setFathersName(e.target.value)}
            value={fathersName}
            type="text"
            id="fathersName"
            placeholder="Father's Name"
          />
          <input
            onChange={(e) => setMothersName(e.target.value)}
            value={mothersName}
            type="text"
            id="mothersName"
            placeholder="Mother's Name"
          />
          <input
            onChange={(e) => setLocalGuardian(e.target.value)}
            value={localGuardian}
            type="text"
            id="localGuardian"
            placeholder="Local Guardian's Name"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            id="phone"
            placeholder="Phone number"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Email"
          />
          <select
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="">Select Nationality</option>
            <option value="Indian">Indian</option>
            <option value="NRI">NRI</option>
            <option value="Other">Other</option>
          </select>
          <select
            id="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Others">Others</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="Tea Tribes">Tea Tribes</option>
            <option value="Other">Other</option>
          </select>
          <input
            Date
            of
            Birth
            onChange={(e) => setDob(e.target.value)}
            value={dob}
            type="date"
            id="dob"
            placeholder="Date of Birth"
          />
          <select
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Blood Group</option>
            <option value="B+ve">A +</option>
            <option value="A+ve">A -</option>
            <option value="B+ve">B +</option>
            <option value="A+ve">B -</option>
            <option value="Other">Other</option>
          </select>
          <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value=""> Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            id="courseType"
            value={courseType}
            onChange={(e) => {
              setCourseType(e.target.value);
            }}
          >
            <option value="">Choose a Course Type</option>
            {coursesTypeArray.map((courseType, index) => (
              <option value={courseName} key={index}>
                {courseType}
              </option>
            ))}
          </select>
          {courseType === "Diploma" && (
            <select
              id="courseName"
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
              disabled={courseType !== "Diploma"}
            >
              <option value="">Diploma Courses</option>
              {allCourses[0].diplomaArray.map((courseT, index) => {
                return <option key={index}>{courseT.title}</option>;
              })}
            </select>
          )}
          {courseType === "Certificate" && (
            <select
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
              disabled={courseType !== "Certificate"}
            >
              <option value="">Certificate Courses</option>
              {allCourses[1].certificateArray.map((courseT, index) => {
                return <option key={index}>{courseT.title}</option>;
              })}
            </select>
          )}
          {courseType === "Others" && (
            <select
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
              disabled={courseType !== "Others"}
            >
              <option value="">Other Courses</option>
              {allCourses[2].certificateArray.map((courseT, index) => {
                return <option key={index}>{courseT.title}</option>;
              })}
            </select>
          )}
        </div>
        <div className="flex flex-col md:flex-row">
          {/* <label>Present Address</label> */}
          <textarea
            className="md:w-1/3  "
            rows="4"
            value={permanentAddress}
            onChange={(e) => setPermanentAddress(e.target.value)}
            placeholder="Permanent Address"
          />
          <div className="flex flex-col">
            <div className="flex  my-auto items-center justify-center">
              <p className="mr-1">Is present & permanent addresses are same?</p>
              <input
                className="mt-2 mb-1 size-5"
                type="checkbox"
                checked={sameAddress}
                onChange={(e) => setSameAddress(e.target.checked)}
              />
            </div>
          </div>
          {!sameAddress && (
            <textarea
              className="md:w-1/3 "
              rows="4"
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
              placeholder="Present Address"
            />
          )}
          {/* <label className="absolute">Permanent Address</label> */}
          {sameAddress && (
            <>
              <textarea
                className="md:w-1/3 "
                rows="4"
                value={permanentAddress}
                placeholder="Present Address"
                onChange={(e) => setPresentAddress(e.target.value)}
              />
            </>
          )}
        </div>
        <p className="mt-6 mr-2 flex ">Have you admitted earlier?</p>
        <input
          className="mt-2 size-5 "
          type="checkbox"
          checked={wasStudent}
          onChange={(e) => setWasStudent(e.target.checked)}
        />
        <button
          className="bg-green-700 w-[200px] rounded-full p-3 text-white font-bold flex   justify-center m-auto mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className=" bg-slate-100 flex flex-col text-center">
        {er &&
          er.map((e) => (
            <div
              className={`${
                success ? " text-green-800" : "text-red-600"
              }  px-5 py-2`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
};

export default ContactForm;
