import React from "react";
import { Link } from "react-router-dom";

export const MyTurns = () => {

  const turns = [
    {
      id: 1,
      date: "15/11/2022",
      hour: "9:30",
      speciality: "Especialidad 1",
      professional: "Doctor 1",
    },
    {
      id: 2,
      date: "15/11/2022",
      hour: "10:30",
      speciality: "Especialidad 1",
      professional: "Doctor 1",
    },

    {
      id: 3,
      date: "15/11/2022",
      hour: "11:30",
      speciality: "Especialidad 5",
      professional: "Doctor 5",
    },

    {
      id: 4,
      date: "16/11/2022",
      hour: "9:30",
      speciality: "Especialidad 3",
      professional: "Doctor 3",
    },
    {
      id: 5,
      date: "16/11/2022",
      hour: "10:30",
      speciality: "Especialidad 2",
      professional: "Doctor 2",
    },
  ];

  return (
    <div>

      <h1 className="text-center text-xl font-bold">My Turns</h1>

      <button
        className="btn mt-8 rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        type="button"
      >
        <Link to="/turns">Volver</Link>
      </button>

      {/* pending turn section */}

      <h3 className="mt-10 mb-5 text-center text-lg font-bold">
        Pending Turns
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Hour
              </th>
              <th scope="col" className="py-3 px-6">
                Speciality
              </th>
              <th scope="col" className="py-3 px-6">
                Professional
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {turns.map((turn) => {
              return (
                <tr
                  className="border-b border-gray-200 dark:border-gray-600"
                  key={turn.id}
                >
                  <td className="py-3 px-6">{turn.date}</td>
                  <td className="py-3 px-6">{turn.hour}</td>
                  <td className="py-3 px-6">{turn.speciality}</td>
                  <td className="py-3 px-6">{turn.professional}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center space-x-4 text-sm">
                      <Link to={`/turns/${turn.id}`}>
                        <button className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/*-------------------------------------------------  */}
      {/* History turns section */}

      <h3 className="mt-10 mb-5 text-center text-xl font-bold text-black ">
        My history turns
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Hour
              </th>
              <th scope="col" className="py-3 px-6">
                Speciality
              </th>
              <th scope="col" className="py-3 px-6">
                Professional
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {turns.map((turn) => {
              return (
                <tr
                  key={turn.id}
                  className="border-b border-gray-100 dark:border-gray-700"
                >
                  <td className="py-3 px-6">{turn.date}</td>
                  <td className="py-3 px-6">{turn.hour}</td>
                  <td className="py-3 px-6">{turn.speciality}</td>
                  <td className="py-3 px-6">{turn.professional}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center space-x-4 text-sm">
                      <Link to={`/turns/${turn.id}`}>
                        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                          Details
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};
