import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import LogoSchool from "@/components/LogoSchool/LogoSchool";


import streamlineImg from '../public/assets/img/photo-1524995997946-a1c2e315a42f.jpg';
import recordImg from '../public/assets/img/photo-1488722796624-0aa6f1bb6399.jpg'
import handlePaymentImg from '../public/assets/img/photo-1596496181935-7801d2065877.jpg'


import img4 from '../public/assets/img/photo-1551887373-6edba6dacbb1.jpg'
import img5 from '../public/assets/img/photo-1523240795612-9a054b0db644.jpg'
import img6 from '../public/assets/img/photo-1485546246426-74dc88dec4d9.jpg'

import backupSystem from '../public/assets/img/backup-system2.png'
import parents from '../public/assets/img/parents.png'
import security from '../public/assets/img/security.png'
import teacherStaff from '../public/assets/img/teacher-staff.png'
import student from '../public/assets/img/students.png'
import admincontrol from '../public/assets/img/admin-control.png'
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSchool />
      <section id="school-management-made-easy" className="p-6 my-10">
        <h2 className="w-full mx-auto text-4xl font-extrabold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">School Management<br className="hidden md:block" /> Made Easy</h2>
        <p className="w-full md:w-2/3 mx-auto text-center leading-6">Organize and manage your educational curriculum. <br className="hidden md:block" /> Managing an institution requires seamless efficient management of time, which in turn enhances productivity.</p>

        <ul className="list-none max-w-6xl  mx-auto my-12 grid grid-cols-1 place-items-center justify-start sm:grid sm:grid-cols-2 md:grid-cols-3 items-center gap-2 gap-y-10 ">

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:left-0 sm:rounded-none -left-6 rounded-e-lg" src={streamlineImg} width={1080} height={720} placeholder="blur" priority alt="img" />
            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Streamline School<br className="hidden sm:block md:hidden" /> Operations.</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">SchoolPilot offers a user-friendly interface to streamline administrative tasks, making it easier for schools to manage day-to-day operations efficiently..</p>
            </div>

          </li>

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center  border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:right-0 sm:rounded-none rounded-s-lg" src={recordImg} width={1080} height={720} placeholder="blur" priority alt="img" />
            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Record Results Seamlessly</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">With SchoolPilot, recording and accessing student results is a breeze. Our software simplifies result management, ensuring accuracy and ease of access.</p>
            </div>

          </li>

          <li className="w-full overflow-hidden sm:w-5/6 flex flex-col-reverse items-center  border-slate-900 dark:border-gray-100 bg-white py-6 px-2  shadow-xl">
            <Image className="block w-full mb-3 md:w-auto md:mt-2 relative -right-6 sm:left-0 sm:rounded-none -left-6 rounded-e-lg" src={handlePaymentImg} width={1080} height={720} placeholder="blur" priority alt="img" />
            <div className="px-2 h-fit sm:h-fit md:h-fit overflow-y-hidden ">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white md:">Handle Payments with Ease.</h3>
              <p className="my-3 dark:text-slate-400 text-sm sm:text-base md:text-sm">SchoolPilot simplifies the payment process for schools, allowing them to manage fees, invoices, and transactions seamlessly, providing a hassle-free experience for both the institution and parents.</p>
            </div>

          </li>

        </ul>

        <hr className="mx-auto border border-black dark:border-white w-1/2" />
      </section>


      <section id="Educational-management-made-easy" className="p-6 my-12">
        <h2 className="text-3xl text-center font-extrabold md:w-2/3 md:mx-auto lg: sm:text-5xl mb-6 text-slate-900 dark:text-white ">An Educational Management System</h2>
        <p className="text-base text-center font-normal md:w-2/3 md:mx-auto lg: ">SchoolPilot is a complete solution for every institute such as kindergarten, school and any other academic institution to manage operations quickly and digital efficiently.</p>

        <ul className="list-none text-center max-w-sm mx-auto my-5 grid grid-cols-2 items-center justify-center divide-x-2 divide-y-2 divide-slate-50">
          <li className="col-span-1 cursor-pointer shadow-xl py-2 px-3 text-white bg-gradient-to-tr from-blue-500 from-20% to-blue-400 to-60%">Kindergarten</li>
          <li className="col-span-1 cursor-pointer shadow-xl py-2 px-3 bg-gradient-to-tr from-slate-200 to-slate-300 ">School</li>
          <li className="col-span-2 cursor-pointer shadow-xl py-2 px-3 bg-gradient-to-tr from-slate-200 to-slate-300 ">Academic Institution</li>
        </ul>

      </section>

      <section className="w-full p-6 bg-slate-100">

        <div className="flex flex-col-reverse md:flex-row  max-w-7xl mx-auto ">


          <div className="w-full md:w-1/2 p-2 space-y-2 ">

            <ul className="max-w-md mx-auto flex flex-wrap space-x-4 items-center justify-around  p-2">

              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={teacherStaff} alt="" width="660" height="664" priority />
                Teacher
              </li>

              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={parents} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Parent
              </li>
              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={student} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Student
              </li>

            </ul>

            <ul className="max-w-md mx-auto flex flex-wrap space-x-4 items-center justify-around  p-2">

              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={security} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Administrator
              </li>

              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={backupSystem} alt="core-essential" sizes="100vw" width="660" height="664" priority />
                Backup<br/>system
              </li>


              <li className="max-w-24 h-auto p-2 bg-slate-200 rounded-sm text-center text-xs text-nowrap  ">
                <Image className="w-full rounded-sm" src={admincontrol} alt="core-essential" sizes="100vw" width={660} height={664} priority />
                Adminstrative<br /> Control
              </li>

            </ul>



          </div>

          <div className="w-full md:w-1/2 p-2 ">

            <div className="space-y-3 sm:text-center ">

              <h3 className="w-full mx-auto text-lg sm:w-3/5 md:w-full text-left font-bold text-slate-900 ">Core Essential Modules</h3>
              <div className="w-full mx-auto text-base sm:w-3/5 md:w-full text-left">
                <hr className=" mx-0 w-10 border border-blue-500 rounded-lg" />
              </div>
              <p className="w-full mx-auto text-base sm:w-3/5 md:w-full text-left text-slate-700 ">SchoolPilot has a Parent, Student, Teacher, Administrator panel with 24hour auto pilot backup system</p>

              <p className="mx-auto text-base sm:w-3/5 md:w-full text-left text-slate-700 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate qui eaque
                quod ipsum quam consequuntur nobis illum natus omnis, nulla </p>



            </div>
          </div>
        </div>

      </section>

      <section className="mx-auto max-w-2xl mt-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 dark:border-slate-800 pb-10">
              <p className="font-semibold text-slate-500 dark:text-slate-300 preview-menu-wrapper relative">
                Simplify School Operations
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl preview-menu-wrapper relative">
                Simplify Administrative Tasks with SchoolPilot<span className="text-primary">.</span>
              </h2>
            </div>
            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Streamline Operations
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  SchoolPilot helps schools streamline their administrative tasks, making it easier to manage day-to-day operations efficiently.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Result Management
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  SchoolPilot simplifies result management, allowing schools to record, access, and analyze student results seamlessly.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 dark:text-white preview-menu-wrapper relative">
                  Payment Handling
                </dt>
                <dd className="mt-3 text-sm text-gray-500 dark:text-slate-300 preview-menu-wrapper relative">
                  With SchoolPilot, schools can handle payments with ease, managing fees, invoices, and transactions efficiently to ensure a smooth financial process.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
              <Image priority src={img4} width={1080} height={721} alt="Image of Simplify Administrative Tasks with SchoolPilot" className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                <Image priority src={img5} width={1080} height={721} alt="Result Management" className="h-full w-full object-cover object-center" />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 preview-menu-wrapper relative">
                <Image priority src={img6} width={1080} height={721} alt="Payment Handling" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
