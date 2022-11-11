import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../configs/firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password)
            .then((userCredential) => {
                alert("User signed in");
                navigate("/turns");
            })
            .catch((error) => {
                alert("Something went wrong!");
                const errorCode = error.code;
                console.log(errorCode);
            });
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="w-96 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                <h2 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                    Login
                </h2>

                <form className="mt-4">
                    <label
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="
                    Enter your email"
                        value={email}
                        onChange={handleEmail}
                    />

                    <label
                        className="mt-3 mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <div>
                        <h6 className="text-1xl mt-5 text-center font-semibold text-gray-700 dark:text-white">
                            Already have an account?{" "}
                            <Link
                                to="/register"
                                className="text-cyan-400 hover:text-purple-600 hover:transition-all"
                            >
                                Register
                            </Link>
                        </h6>
                    </div>

                    <button
                        className="mt-6 block w-full rounded-lg bg-blue-500 px-3 py-3 font-semibold text-white hover:bg-blue-400 focus:bg-blue-400"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <div className="flex items-center justify-center">
                        <Link
                            to="/"
                            className="text-1xl mt-5 text-center font-semibold text-gray-700 dark:text-white"
                        >
                            Back to Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
