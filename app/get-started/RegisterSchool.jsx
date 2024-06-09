"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import loginImg from "../../public/assets/img/login.png";
import { useRouter } from 'next/navigation'


const RegisterSchool = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    state: "",
    localGovernment: "",
    city: "",
    address: "",
    gradeType: "",
    genderType: "",
    ownershipType: "",
    enrollmentType: "",
    mission: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await fetch("/api/schools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        // Handle successful registration
        router.refresh();

      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="max-w-md w-full"> */}
      <div className="max-w-lg w-full">
        <div className="bg-white p-8 rounded shadow">
          <div className="bg-indigo-500 flex justify-center">
            <Image
              src={loginImg}
              alt="Logo"
              width="126"
              height="134"
              className="w-1/3 h-auto bg-cover"
              priority
            />
          </div>

          <div className="mt-6">
            <h1 className="text-center text-2xl font-bold">SchoolPilot🚀</h1>
            <p className="text-sm text-center text-gray-600">Enter details to board your Academic Institution</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    School Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                  autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="School Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-4 mb-4">
                  <div className=" ">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                    autoComplete="off"
                      id="state"
                      name="state"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="State"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="">
                    <label htmlFor="localGovernment" className="block text-sm font-medium text-gray-700">
                      Local Government <span className="text-red-500">*</span>
                    </label>
                    <input
                    autoComplete="off"
                      id="localGovernment"
                      name="localGovernment"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Local Government"
                      value={form.localGovernment}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-4 mb-4">
                  <div className="">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City/Town <span className="text-red-500">*</span>
                    </label>
                    <input
                    autoComplete="off"
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="City/Town"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                    autoComplete="off"
                      id="address"
                      name="address"
                      type="text"
                      required
                      className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Address"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="border border-black grid grid-col-1 gap-2 sm:grid-cols-2 space-y-4 mb-4">
                  <div className="">
                    <p  className="block text-sm font-medium text-gray-700">
                      School Grade Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["Creche/Nursery", "Primary", "Secondary", "Tertiary"].map((type) => (
                        <label htmlFor={type} key={type} className="inline-flex items-center">
                          <input
                          id={type}
                          autoComplete="off"
                            type="radio"
                            name="gradeType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.gradeType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2 text-base ">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="">
                    <label htmlFor="genderType" className="block text-sm font-medium text-gray-700">
                      School Gender Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col space-y-2">
                      {["only boys", "only girls", "boys and girls"].map((type) => (
                        <label htmlFor="genderType" key={type} className="inline-flex items-center">
                          <input
                          autoComplete="off"
                            type="radio"
                            name="genderType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.genderType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border border-black grid grid-col-1 gap-2 sm:grid-cols-2 space-y-4 mb-4">
                  <div className="">
                    <p className="block text-sm font-medium text-gray-700">
                      School Ownership Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["private", "government", "mission"].map((type) => (
                        <label htmlFor={type} key={type} className="inline-flex items-center">
                          <input
                          id={type}
                          autoComplete="off"
                            type="radio"
                            name="ownershipType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.ownershipType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className=" ">
                    <p className="text-sm font-medium text-gray-700">
                      School Enrollment Type <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-col space-y-2">
                      {["only day", "only boarders", "day and boarders"].map((type) => (
                        <label htmlFor="enrollmentType" key={type} className="inline-flex items-center">
                          <input
                          id={form.enrollmentType}
                          autoComplete="off"
                            type="radio"
                            name="enrollmentType"
                            value={type}
                            required
                            className="form-radio"
                            checked={form.enrollmentType === type}
                            onChange={handleChange}
                          />
                          <span className="ml-2">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="mission" className="block text-sm font-medium text-gray-700">
                    Mission
                  </label>
                  <select
                    id={form.mission}
                    name="mission"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={form.mission}
                    onChange={handleChange}
                  >
                    <option value="none">Select Mission</option>
                    {["Catholic", "Anglican", "Pentecostal", "Sabbath", "Islam"].map((mission) => (
                      <option key={mission} value={mission}>
                        {mission}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Proprietor/Manager Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                  autoComplete="off"
                    id={form.phoneNumber}
                    name="phoneNumber"
                    type="text"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                  autoComplete="off"
                    id={form.email}
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                  autoComplete="off"
                    id={form.password}
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                  autoComplete="off"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {passwordMismatch && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm mx-auto">
                  Already Registered?{" "}
                  <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Login
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSchool;
