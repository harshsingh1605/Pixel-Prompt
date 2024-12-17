import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets'; // Ensure assets contains valid paths
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Navbar = () => {
    const { user, credit, setCredit, setShowLogin, logout } = useContext(AppContext);
    const navigate = useNavigate();

    // Function to fetch updated credits
    const refreshCredits = async () => {
        try {
            const response = await axios.post('/api/user/credits', { userId: user._id });
            if (response.data.success) {
                setCredit(response.data.credits);
            }
        } catch (error) {
            console.error('Failed to fetch credits:', error.message);
        }
    };

    // Fetch credits whenever the component mounts or the user changes
    useEffect(() => {
        if (user) {
            refreshCredits();
        }
    }, [user]);

    return (
        <div className="flex items-center justify-between py-4 px-4 sm:px-10 lg:px-20 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 shadow-md">
            <Link to="/" className="flex items-center gap-2">
                <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
            </Link>

            <div className="flex items-center gap-6">
                {user ? (
                    <div className="flex items-center gap-6 sm:gap-3">
                        <button
                            onClick={() => navigate('/buy')}
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"

                            
                        >
                            <img className="w-5" src={assets.credit_star} alt="Credits Icon" />
                            <span>
                                Credits: <strong>{credit}</strong>
                            </span>
                        </button>
                        <p className="text-gray-700 text-sm lg:text-base font-medium">
                            Hi, <span className="font-semibold">{user.name}</span>
                        </p>
                        <div className="relative group">
                            <img
                                src={assets.profile_icon}
                                className="w-10 h-10 rounded-full shadow-lg border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                                alt="Profile Icon"
                            />
                            <div className="absolute hidden group-hover:block top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg text-sm py-2 z-20 w-32">
                                <ul className="text-gray-700">
                                    <li
                                        onClick={logout}
                                        className=" px-4 py-2 hover:bg-gray-100 cursor-pointer rounded transition-all"
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-5">
                        <p
                            onClick={() => navigate('/buy')}
                            className="text-gray-700 text-sm sm:text-base font-medium hover:text-purple-600 cursor-pointer transition-colors"
                        >
                            Pricing
                        </p>
                        <button
                            onClick={() => setShowLogin(true)}
                            className="      bg-black text-white px-7 py-2 sm:px-10 text-sm font-medium rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Navbar;
