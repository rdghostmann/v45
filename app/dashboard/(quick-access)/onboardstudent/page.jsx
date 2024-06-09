import React from 'react';

const AddStudentForm = () => {
  return (
    <div className="container mx-auto p-4">

      <div className="page-header mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Add Students</h3>
          <ul className="breadcrumb flex space-x-2">
            <li className="breadcrumb-item"><link href="students">Student</link></li>
            <li className="breadcrumb-item active">Add Students</li>
          </ul>
        </div>
      </div>

      <div className="shadow-lg p-6 bg-white rounded-lg">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Student Information <span className="float-right"><link href="/"><i className="feather-more-vertical"></i></link></span></h5>
            </div>
            <div>
              <p className="block font-medium" id="first-name" >First Name <span className="text-red-500">*</span></p>
              <input className="form-control mt-1 block w-full" name="first-name" type="text" placeholder="Enter First Name" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium" id="last-name">Last Name <span className="text-red-500">*</span></p>
              <input className="form-control mt-1 block w-full" name="last-name" type="text" placeholder="Enter Last Name" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium">Gender <span className="text-red-500">*</span></p>
              <select className="form-control mt-1 block w-full">
                <option>Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div>
              <p className="block font-medium" id="dob">Date Of Birth <span className="text-red-500">*</span></p>
              <input className="form-control mt-1 block w-full" name="dob" type="text" placeholder="DD-MM-YYYY" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium" id="roll">Roll</p>
              <input className="form-control mt-1 block w-full" name="roll" type="text" placeholder="Enter Roll Number" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium">Blood Group <span className="text-red-500">*</span></p>
              <select className="form-control mt-1 block w-full">
                <option>Please Select Group</option>
                <option value="B" >B+</option>
                <option value="A" >A+</option>
                <option value="O" >O+</option>
              </select>
            </div>
            <div>
              <p className="block font-medium">Religion <span className="text-red-500">*</span></p>
              <select className="form-control mt-1 block w-full">
                <option>Please Select Religion</option>
                <option className="christian">Christian</option>
                <option className="othr">Others</option>
              </select>
            </div>
            <div>
              <p className="block font-medium" id="email">E-Mail <span className="text-red-500">*</span></p>
              <input className="form-control mt-1 block w-full" name="email" type="email" placeholder="Enter Email Address" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium">Class <span className="text-red-500">*</span></p>
              <select className="form-control mt-1 block w-full">
                <option>Please Select Class</option>
                <option value="12">12</option>
                <option value="11">11</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <p className="block font-medium">Section <span className="text-red-500">*</span></p>
              <select className="form-control mt-1 block w-full">
                <option>Please Select Section</option>
                <option value="B">B</option>
                <option value="A">A</option>
                <option value="C">C</option>
              </select>
            </div>
            <div>
              <p className="block font-medium" id="admission-ID">Admission ID</p>
              <input className="form-control mt-1 block w-full" name="admission-ID" type="text" placeholder="Enter Admission ID" autoComplete="true" />
            </div>
            <div>
              <p className="block font-medium" id="phone">Phone</p>
              <input className="form-control mt-1 block w-full" name="phone" type="text" placeholder="Enter Phone Number" autoComplete="true" />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <span className="block font-medium">Upload Student Photo (150px X 150px)</span>
              <div className="mt-2">
                <p id="file" className="file-upload cursor-pointer block">
                  <span className="px-4 py-2 bg-blue-500 text-white rounded">Choose File</span>
                  <input className="hidden" type="file" autoComplete="true" />
                </p>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
              <button type="submit" className="btn btn-primary w-full py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
