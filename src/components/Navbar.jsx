import React, { useState, useEffect } from 'react';
// import ThemeBtn from './ThemeBtn';
import { navItems } from "../constants";
import DropDownProfile from './DropDownProfile';
import user1 from "../assets/_MG_6293.jpg";

function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    const toggleNavbar = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleProfileClick = () => {
        setOpenProfile(!openProfile);
    };

    return (
        <nav className='border-b-2'>
            <div className='flex justify-between items-center m-4'>
                {/* logo section */}
                <div className='inline-block'>
                    <a href="#">Logo</a>
                </div>

                {/* desktop menu */}
                <div className='hidden lg:flex'>
                    <ul className='flex space-x-3'>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className='cursor-pointer transition-colors hover:bg-[#E9EEE7] py-1.5 px-3.5 rounded-full hover:text-green-700'
                            >
                                <a href={`#${item.href}`}>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* theme toggle */}
                <div className="theme-btn">
                    <label className="swap swap-rotate">
                        <input type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true} />

                        <svg
                            className="swap-on h-8 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className="swap-off h-8 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>

                {/* right-side icons and pofile */}
                <div className='hidden lg:flex items-center'>
                    <ul className='flex space-x-6'>
                        <li className='text-2xl cursor-pointer text-gray-400'>
                            <i className="ri-search-2-line"></i>
                        </li>
                        <li className='text-2xl cursor-pointer text-gray-400'>
                            <i className="ri-notification-3-fill"></i>
                        </li>
                        {/* profile image */}
                        <div className="relative ">
                            <img
                                // src="/src/assets/_MG_6293.jpg"
                                src={user1}
                                alt="Profile"
                                className="w-10 h-8 rounded-full cursor-pointer"
                                onClick={handleProfileClick} 
                            />
                            {openProfile && <DropDownProfile onClose={() => setOpenProfile(false)} />}
                        </div>
                    </ul>

                </div>

                {/* mobile menu button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleNavbar}>
                        {isMobileMenuOpen ? (
                            <i className="ri-close-line text-2xl"></i>
                        ) : (
                            <i className="ri-menu-3-line text-2xl"></i>
                        )}
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className="fixed right-0 z-20 bg-gray-600 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className="md:space-y-6">
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 border-b-2">
                                <a href={`#${item.href}`} className="text-white rounded-full py-2 px-12 hover:bg-gray-400 transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* additional icons */}
                    <div className="flex flex-col space-y-4 mt-6">
                        <p className='text-2xl cursor-pointer text-gray-400'>
                            <i className="ri-search-2-line"></i>
                        </p>
                        <p className='text-2xl cursor-pointer text-gray-400'>
                            <i className="ri-notification-3-fill"></i>
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
