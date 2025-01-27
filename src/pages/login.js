import React, { useState } from 'react';
import login from "../assets/login.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Navbar from "../components/navbar";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side (Text and Image) */}
            <div className="w-full md:w-[35%] bg-[#f9f9fa] flex flex-col justify-center items-center px-6 md:px-0">
                <h1 className="text-3xl font-bold mb-6 mt-20 md:mt-0">Hi, Welcome back</h1>
                <div className="mt-10"> 
                    <img
                        src={login}
                        alt="Illustration"
                        className="object-cover w-full"
                    />
                </div>
            </div>
            
            {/* Right Side (Login Form) */}
            <div className="w-full md:w-[65%] bg-white flex flex-col justify-center items-center px-6 md:px-12 mt-12 md:mt-0">
                <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="w-full mb-4">
                        <div className="relative">
                            <input
                                type="email"
                                className="peer w-full border hover:border-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder='demo@gmail.com'
                                defaultValue="demo@gmail.com" 
                            />
                            <label
                                className="absolute cursor-text bg-white px-1 left-2.5 -top-2 text-xs text-black peer-focus:text-indigo-600 peer-focus:scale-90"
                            >
                                Email address
                            </label>
                        </div>
                    </div>
                    <div className="w-full mb-4">
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"} 
                                className="peer w-full border hover:border-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder='********'
                                defaultValue="password123" 
                            />
                            <label
                                className="absolute cursor-text bg-white px-1 left-2.5 -top-2 text-xs text-black peer-focus:text-indigo-600 peer-focus:scale-90"
                            >
                                Password
                            </label>
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />} 
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 py-2 text-lg rounded-lg font-medium hover:bg-blue-600 transition"
                        style={{ color: 'white' }}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
