import Link from 'next/link';
import Image from 'next/image';
import loginImage from '../../public/assets/img/login.png';

import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi2";



const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded shadow">
          <div className="flex justify-center">
            <Image src={loginImage} alt="Logo" className="w-1/2 h-auto" priority />
          </div>
          <div className="mt-6">
            <h1 className="text-center text-2xl font-bold">Welcome to SchoolPilot🚀</h1>
            <p className="text-center text-gray-600">
              Need an account?
              <Link href="/get-started">
                <span className="text-indigo-600 hover:text-indigo-500">Sign Up</span>
              </Link>
            </p>
            <h2 className="text-center text-xl font-semibold mt-4">Sign in</h2>

            <form action="index.html" className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4 relative">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  <span className="absolute top-1/2 right-0 pr-3 flex items-center text-gray-500">
                   <HiOutlineUser fontSize={20} />
                    {/* <i className="fas fa-user-circle"></i> */}
                  </span>
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <span className="absolute top-1/2 right-0 pr-3 flex items-center justify-center text-gray-500">
                    <RiLockPasswordLine fontSize={20} />
                    {/* <i className="feather-eye toggle-password"></i> */}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password">
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">Forgot Password?</span>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
            </form>

       

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
