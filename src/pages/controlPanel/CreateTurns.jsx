import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { v4 as uuidv4 } from "uuid";
import { useFirestore } from "../../hooks/useFirestore";

const CreateTurns = () => {
    const [specialty, setSpecialty] = useState("");
    const [professional, setProfesional] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [site, setSite] = useState("");
    //const [uid, setUid] = useState("");

    const { addTurn, getTurn } = useFirestore();

    useEffect(() => {
        console.log("getTurn");
        getTurn("avaliable");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            specialty.trim() == "" ||
            professional.trim() == "" ||
            date.trim() == "" ||
            time.trim() == "" ||
            site.trim() == ""
        ) {
            Swal.fire("Error!", "Please complete all fields", "error");
        } else {
            Swal.fire({
                title: "Do you want to create new shift?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await addTurn(specialty, professional, date, time, site);
                    Swal.fire("Saved!", "", "success");
                }
            });
        }
    };
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="w-96 rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="text-center text-2xl font-semibold text-gray-700 dark:text-white sm:text-3xl">
                        Create New Turn
                    </h2>
                    <form
                        className="mt-6 grid w-full grid-cols-2 gap-2"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Specialty
                            </label>
                            <input
                                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="'Cardiology'"
                                onChange={(e) =>
                                    setSpecialty(
                                        e.target.value.toLowerCase().trim()
                                    )
                                }
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Professional Name
                            </label>
                            <input
                                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="'Taborda Jorge'"
                                onChange={(e) =>
                                    setProfesional(
                                        e.target.value.toLowerCase().trim()
                                    )
                                }
                                required
                            />
                        </div>
                        <div className=" col-span-2 sm:col-span-1">
                            <label
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                htmlFor="date"
                            >
                                Shift Date
                            </label>

                            <input
                                type="date"
                                datepicker="true"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Select date"
                                onChange={(e) => setDate(e.target.value.trim())}
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label
                                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                htmlFor="time"
                            >
                                Shift Time
                            </label>
                            <input
                                type="time"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                min="08:00"
                                max="18:30"
                                onChange={(e) => setTime(e.target.value.trim())}
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Site
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="'San Luis 2548 - Piso 1'"
                                onChange={(e) => setSite(e.target.value.trim())}
                                required
                            />
                        </div>
                        <div className="col-span-2 py-4">
                            <button
                                type="submit"
                                className="w-full rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:-translate-y-2 hover:bg-purple-800 hover:text-white hover:shadow-xl hover:transition-all hover:duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:ring-purple-900"
                            >
                                Save Turn
                            </button>
                        </div>
                    </form>
                    <button
                        type="submit"
                        className="w-full rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:-translate-y-2 hover:bg-purple-800 hover:text-white hover:shadow-xl hover:transition-all hover:duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:ring-purple-900"
                    >
                        Save Turn
                    </button>
                </div>
            </div>
        </>
    );
};
export default CreateTurns;
