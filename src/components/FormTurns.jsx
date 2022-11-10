import React, { useState } from "react";
import ListTurns from "./ListTurns";
import { useNavigate } from "react-router-dom";

const FormTurns = () => {
  const data = [
    {
      name: "Especialidad 1",
      professionals: [
        {
          name: "Doctor 1",
          turns: [
            {
              date: "15/11/2022 9:30",
              state: true,
            },
            {
              date: "16/11/2022 9:30",
              state: true,
            },
            {
              date: "17/11/2022 9:30",
              state: true,
            },
          ],
        },
        {
          name: "Doctor 2",
          turns: [
            {
              date: "15/11/2022 10:30",
              state: true,
            },
            {
              date: "16/11/2022 10:30",
              state: true,
            },
            {
              date: "17/11/2022 10:30",
              state: true,
            },
          ],
        },
      ],
    },
    {
      name: "Especialidad 2",
      professionals: [
        {
          name: "Doctor 3",
          turns: [
            {
              date: "15/11/2022 9:30",
              state: true,
            },
            {
              date: "16/11/2022 9:30",
              state: true,
            },
            {
              date: "17/11/2022 9:30",
              state: true,
            },
          ],
        },
        {
          name: "Doctor 4",
          turns: [
            {
              date: "15/11/2022 10:30",
              state: true,
            },
            {
              date: "16/11/2022 10:30",
              state: true,
            },
            {
              date: "17/11/2022 10:30",
              state: true,
            },
          ],
        },
        {
          name: "Doctor 5",
          turns: [
            {
              date: "15/11/2022 10:30",
              state: true,
            },
            {
              date: "16/11/2022 10:30",
              state: true,
            },
            {
              date: "17/11/2022 10:30",
              state: true,
            },
          ],
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const [turns, setTurns] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [speciality, setSpeciality] = useState("");
  const [professional, setProfessional] = useState("");

  const handleSpeciality = (event) => {
    setSpeciality(event.target.value);
  };

  const handleProfessional = (event) => {
    setProfessional(event.target.value);
  };

  const handleSubmitSpeciality = (e) => {
    e.preventDefault();
    for (let element of data) {
      if (element.name === speciality) {
        setProfessionals(element.professionals);
      }
    }
  };

  const handleSubmitProfessional = (e) => {
    e.preventDefault();
    for (let element of professionals) {
      if (element.name === professional) {
        setTurns(element.turns);
      }
    }
    navigate("/listTurns");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-96 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
            Request Turn
          </h2>

          <form className="mt-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="speciality"
            >
              Medical speciality
            </label>
            <select
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={speciality}
              onChange={handleSpeciality}
            >
              <option value="" disabled>
                Select speciality
              </option>
              {data.map((speciality) => (
                <option value={speciality.name} key={speciality.name}>
                  {speciality.name}
                </option>
              ))}
            </select>
            <button
              className="mt-6 block w-full rounded-lg bg-blue-500 px-3 py-3 font-semibold text-white hover:bg-blue-400 focus:bg-blue-400"
              type="submit"
              onClick={handleSubmitSpeciality}
            >
              Search
            </button>
          </form>

          <form className="mt-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="speciality"
            >
              Professional
            </label>
            <select
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={professional}
              onChange={handleProfessional}
            >
              <option value="" disabled>
                Select Professional
              </option>
              {professionals.map((professional) => (
                <option value={professional.name} key={professional.name}>
                  {professional.name}
                </option>
              ))}
            </select>
            <button
              className="mt-6 block w-full rounded-lg bg-blue-500 px-3 py-3 font-semibold text-white hover:bg-blue-400 focus:bg-blue-400"
              type="submit"
              onClick={handleSubmitProfessional}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormTurns;
