import React from 'react';

const AddStaff = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="page-header mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Add Staff</h3>
          <ul className="breadcrumb flex space-x-2">
            <li className="breadcrumb-item"><link href="teachers">Staff</link></li>
            <li className="breadcrumb-item active">Add Staff</li>
          </ul>
        </div>
      </div>

      <div className="card shadow-lg p-6 bg-white rounded-lg">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Basic Details</h5>
            </div>
            <div>
              <label htmlFor="teacherID" className="block font-medium">Staff ID <span className="text-red-500">*</span></label>
              <input id="teacherID" name="teacherID" type="text" className="form-control mt-1 block w-full" placeholder="Teacher ID" />
            </div>
            <div>
              <label htmlFor="name" className="block font-medium">Name <span className="text-red-500">*</span></label>
              <input id="name" name="name" type="text" className="form-control mt-1 block w-full" placeholder="Enter Name" />
            </div>
            <div>
              <label htmlFor="gender" className="block font-medium">Gender <span className="text-red-500">*</span></label>
              <select id="gender" name="gender" className="form-control mt-1 block w-full">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob" className="block font-medium">Date Of Birth <span className="text-red-500">*</span></label>
              <input id="dob" name="dob" type="text" className="form-control datetimepicker mt-1 block w-full" placeholder="DD-MM-YYYY" />
            </div>
            <div>
              <label htmlFor="mobile" className="block font-medium">Mobile <span className="text-red-500">*</span></label>
              <input id="mobile" name="mobile" type="text" className="form-control mt-1 block w-full" placeholder="Enter Phone" />
            </div>
            <div>
              <label htmlFor="joiningDate" className="block font-medium">Joining Date <span className="text-red-500">*</span></label>
              <input id="joiningDate" name="joiningDate" type="text" className="form-control datetimepicker mt-1 block w-full" placeholder="DD-MM-YYYY" />
            </div>
            <div>
              <label htmlFor="qualification" className="block font-medium">Qualification <span className="text-red-500">*</span></label>
              <input id="qualification" name="qualification" type="text" className="form-control mt-1 block w-full" placeholder="Enter Qualification" />
            </div>
            <div>
              <label htmlFor="experience" className="block font-medium">Experience <span className="text-red-500">*</span></label>
              <input id="experience" name="experience" type="text" className="form-control mt-1 block w-full" placeholder="Enter Experience" />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Login Details</h5>
            </div>
            <div>
              <label htmlFor="username" className="block font-medium">Username <span className="text-red-500">*</span></label>
              <input id="username" name="username" type="text" className="form-control mt-1 block w-full" placeholder="Enter Username" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Email ID <span className="text-red-500">*</span></label>
              <input id="email" name="email" type="email" className="form-control mt-1 block w-full" placeholder="Enter Mail Id" />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">Password <span className="text-red-500">*</span></label>
              <input id="password" name="password" type="text" className="form-control mt-1 block w-full" placeholder="Enter Password" />
            </div>
            <div>
              <label htmlFor="repeatPassword" className="block font-medium">Repeat Password <span className="text-red-500">*</span></label>
              <input id="repeatPassword" name="repeatPassword" type="text" className="form-control mt-1 block w-full" placeholder="Repeat Password" />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4">Address</h5>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="address" className="block font-medium">Address <span className="text-red-500">*</span></label>
              <input id="address" name="address" type="text" className="form-control mt-1 block w-full" placeholder="Enter Address" />
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">City <span className="text-red-500">*</span></label>
              <input id="city" name="city" type="text" className="form-control mt-1 block w-full" placeholder="Enter City" />
            </div>
            <div>
              <label htmlFor="state" className="block font-medium">State <span className="text-red-500">*</span></label>
              <input id="state" name="state" type="text" className="form-control mt-1 block w-full" placeholder="Enter State" />
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">Zip Code <span className="text-red-500">*</span></label>
              <input id="zipCode" name="zipCode" type="text" className="form-control mt-1 block w-full" placeholder="Enter Zip" />
            </div>
            <div>
              <label htmlFor="country" className="block font-medium">Country <span className="text-red-500">*</span></label>
              <input id="country" name="country" type="text" className="form-control mt-1 block w-full" placeholder="Enter Country" />
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

export default AddStaff;
