import React, { useState, useEffect } from "react";
import ListTurns from "./ListTurns";
import { useNavigate } from "react-router-dom";

const FormTurns = () => {
  const data = [
    {
      id: 1,
      name: "Especialidad 1",
      professionals: [
        {
          id: 1,
          name: "Doctor 1",
          turns: [
            {
              id: 1,
              date: "15/11/2022",
              hour: "9:30",
              state: false,
            },
            {
              id: 2,
              date: "15/11/2022",
              hour: "10:30",
              state: true,
            },
            {
              id: 3,
              date: "15/11/2022",
              hour: "11:30",
              state: true,
            },
          ],
        },
        {
          id: 2,
          name: "Doctor 2",
          turns: [
            {
              id: 1,
              date: "16/11/2022",
              hour: "9:30",
              state: true,
            },
            {
              id: 2,
              date: "16/11/2022",
              hour: "10:30",
              state: true,
            },
            {
              id: 3,
              date: "16/11/2022",
              hour: "10:30",
              state: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Especialidad 2",
      professionals: [
        {
          id: 1,
          name: "Doctor 3",
          turns: [
            {
              id: 1,
              date: "17/11/2022",
              hour: "9:30",
              state: true,
            },
            {
              id: 2,
              date: "17/11/2022",
              hour: "10:30",
              state: true,
            },
            {
              id: 3,
              date: "17/11/2022",
              hour: "11:30",
              state: false,
            },
          ],
        },
        {
          id: 2,
          name: "Doctor 4",
          turns: [
            {
              id: 1,
              date: "18/11/2022",
              hour: "9:30",
              state: true,
            },
            {
              id: 2,
              date: "18/11/2022",
              hour: "10:30",
              state: true,
            },
            {
              id: 3,
              date: "18/11/2022",
              hour: "11:30",
              state: true,
            },
          ],
        },
        {
          id: 3,
          name: "Doctor 5",
          turns: [
            {
              id: 1,
              date: "19/11/2022",
              hour: "9:30",
              state: false,
            },
            {
              id: 2,
              date: "19/11/2022",
              hour: "10:30",
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

  useEffect(() => {
    for (let element of data) {
      if (element.name === speciality) {
        setProfessionals(element.professionals);
      }
    }
  }, [speciality]);

  useEffect(() => {
    for (let element of professionals) {
      if (element.name === professional) {
        setTurns(element.turns);
      }
    }
  }, [professional]);

  const handleSpeciality = (event) => {
    setSpeciality(event.target.value);
  };

  const handleProfessional = (event) => {
    setProfessional(event.target.value);
  };

  const handleSubmitSpeciality = (e) => {
    e.preventDefault();
  };

  const handleSubmitProfessional = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-96 rounded-lg bg-white p-6 shadow dark:bg-gray-800 m-3">
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
                <option value={speciality.name} key={speciality.id}>
                  {speciality.name}
                </option>
              ))}
            </select>
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
                <option value={professional.name} key={professional.id}>
                  {professional.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <ListTurns turns={turns} />
      </div>
      
    </>
  );
};

export default FormTurns;
