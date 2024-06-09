import Image from 'next/image';
import React from 'react'

const StaffDashboard = () => {
  return (
    <div className="container mx-auto p-4">

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Welcome Jonathan!</h3>
          <ul className="breadcrumb flex space-x-2">
            <li className="breadcrumb-item"><link href="index">Home</link></li>
            <li className="breadcrumb-item active">Teacher</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { title: "Total Classes", value: "04/06", icon: "teacher-icon-01.svg" },
          { title: "Total Students", value: "40/60", icon: "dash-icon-01.svg" },
          { title: "Total Lessons", value: "30/50", icon: "teacher-icon-02.svg" },
          { title: "Total Hours", value: "15/20", icon: "teacher-icon-03.svg" },
        ].map((card, index) => (
          <div key={index} className="flex">
            <div className="card bg-gray-100 w-full p-4 shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="text-lg font-semibold">{card.title}</h6>
                  <h3 className="text-2xl">{card.value}</h3>
                </div>
                <div>
                  <Image src={`/assets/img/icons/${card.icon}`} alt="Dashboard Icon" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
        <div className="xl:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="card flex flex-col bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-semibold">Upcoming Lesson</h5>
                <link href="/" className="text-blue-500">View All Courses</link>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody>
                    {[1, 2].map((lesson, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">
                          <div>
                            <b>Lessons 30</b>
                            <p>3.1 Ipsum dolor</p>
                            <ul className="flex space-x-2 text-gray-500">
                              <li><i className="fas fa-calendar-alt"></i> Sep 5, 2022</li>
                              <li>|</li>
                              <li><i className="fas fa-clock"></i> 09:00 - 10:00 am</li>
                            </ul>
                          </div>
                        </td>
                        <td className="py-2 text-right">
                          <div className="flex flex-col items-end">
                            <link href="/" className="text-green-500 mb-2">Confirmed</link>
                            <button className="btn btn-blue">Reschedule</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card flex flex-col bg-white shadow-md rounded-lg p-4">
              <div className="mb-4">
                <h5 className="text-xl font-semibold">Semester Progress</h5>
              </div>
              <div className="flex justify-center">
                <div className="circle-bar circle-bar1">
                  <div className="circle-graph1" data-percent="50">
                    <div className="progress-less">
                      <b>55/60</b>
                      <p>Lesson Progressed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card flex flex-col bg-white shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Teaching Activity</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li><span className="circle-blue"></span> Teacher</li>
                <li><span className="circle-green"></span> Students</li>
                <li className="star-menus"><link href="javascript:;"><i className="fas fa-ellipsis-v"></i></link></li>
              </ul>
            </div>
            <div className="flex-grow">
              <div id="school-area"></div>
            </div>
          </div>

          <div className="card flex flex-col bg-white shadow-md rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Teaching History</h5>
              <ul className="flex space-x-2 text-gray-500">
                <li className="star-menus"><link href="javascript:;"><i className="fas fa-ellipsis-v"></i></link></li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-4 text-gray-500 mb-4">
                <li>Sep 22</li>
                <li>Sep 23</li>
                <li>Sep 24</li>
              </ul>
              <ul className="space-y-4">
                {[
                  { subject: "Mathematics", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "In Progress" },
                  { subject: "Geography", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "Completed" },
                  { subject: "Botony", date: "September 5, 2022", time: "09:00 am - 10:00 am (60 Minutes)", status: "In Progress" },
                ].map((activity, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <span className="block text-lg font-semibold">{activity.subject}</span>
                      <ul className="flex space-x-2 text-gray-500">
                        <li><i className="fas fa-calendar-alt"></i> {activity.date}</li>
                        <li>|</li>
                        <li><i className="fas fa-clock"></i> {activity.time}</li>
                      </ul>
                    </div>
                    <button className="btn btn-blue">{activity.status}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card flex flex-col bg-white shadow-md rounded-lg p-4">
          <div id="calendar-doctor" className="calendar-container"></div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upcoming Events</h2>
              <link href="javascript:;"><i className="feather-plus"></i></link>
            </div>
            {[
              { date: "10 Jan", time: "08:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "08:00 - 09:00 am" },
              { date: "10 Jan", time: "09:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "09:00 - 10:00 am" },
              { date: "10 Jan", time: "10:00 am", subject: "Botony", description: "Lorem ipsum sit amet", startTime: "10:00 - 11:00 am" },
              { date: "10 Jan", time: "08:00 am", subject: "English", description: "Lorem ipsum sit amet", startTime: "08:00 - 09:00 am" },
              { date: "10 Jan", time: "09:00 am", subject: "Mathematics", description: "Lorem ipsum sit amet", startTime: "09:00 - 10:00 am" },
              { date: "10 Jan", time: "10:00 am", subject: "History", description: "Lorem ipsum sit amet", startTime: "10:00 - 11:00 am" },
              { date: "10 Jan", time: "11:00 am", subject: "Break", description: "Lorem ipsum sit amet", startTime: "11:00 - 12:00 am" },
              { date: "10 Jan", time: "11:30 am", subject: "History", description: "Lorem ipsum sit amet", startTime: "11:30 - 12:00 am" },
            ].map((event, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{event.date}</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div>
                  <p className="text-gray-500">{event.time}</p>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold">{event.subject}</h4>
                    <h5 className="text-gray-600">{event.description}</h5>
                    <span className="text-gray-500">{event.startTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default StaffDashboard;