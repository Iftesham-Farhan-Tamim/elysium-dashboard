import React from 'react';
import { Progress } from "@material-tailwind/react";
import { firstBox, fourthBox, thirdBox, secondBox, zerobox } from "../constants";
import user1 from "../assets/_MG_6293.jpg";

// const Dropdown = () => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const dropdownItems = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative">
//             <button
//                 className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-full inline-flex items-center transition-colors"
//                 onClick={toggleDropdown}>
//                 Last Month
//                 <i class="ri-arrow-down-s-line"></i>
//             </button>
//             <ul className={`absolute ${isOpen ? 'block' : 'hidden'} bg-white text-gray-800 pt-1 min-w-[9.1rem] cursor-pointer`}>
//                 {dropdownItems.map((item, index) => (
//                     <li key={index} className="hover:bg-gray-200 py-2 px-4">
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

function HeroSection() {

    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownItems = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <div className="div-1-main md:flex justify-between items-center m-12">
                <div className="inside-1st flex items-center space-x-5">
                    <div>
                        {/* <img src="/src/assets/_MG_6293.jpg" alt="Profile" className="w-12 h-10 rounded-full" /> */}
                        <img src={user1} alt="Profile" className="w-12 h-10 rounded-full" />
                    </div>

                    <div className=''>
                        <h1 className="text-3xl font-medium">Good morning!</h1>
                        <p className="text-gray-600">Here's an overview of your properties</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 pt-16 md:pt-0 ml-7">
                    <div className="relative">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-full inline-flex items-center transition-colors"
                            onClick={toggleDropdown}>
                            Last Month
                            <p className='text-1xl'><i class="ri-arrow-down-s-line"></i></p>
                        </button>
                        <ul className={`absolute ${isOpen ? 'block' : 'hidden'} bg-white text-gray-800 pt-1 min-w-[9.1rem] cursor-pointer`}>
                            {dropdownItems.map((item, index) => (
                                <li key={index} className="hover:bg-gray-200 py-2 px-4 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="text-white bg-green-600 px-5 py-2 rounded-full cursor-pointer hover:bg-green-500 transition-colors">
                        Analytics
                    </button>
                </div>
            </div>
            {/*  */}
            <div className='md:flex justify-between items-center m-12 space-y-4 md:space-y-0'>
                <div className='border-2 p-4 space-y-4 rounded-xl mr-8 ml-8 md:mr-0 md:ml-0'>
                    <div className='flex md:space-x-24 justify-between text-gray-500'>
                        <p>Check'ins</p>
                        <p className='text-3xl text-yellow-500'>
                            <i class="ri-key-2-fill"></i>
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl'>12</p>
                    </div>
                </div>
                <div className='border-2 p-4 space-y-4 rounded-xl mr-8 ml-8 md:mr-0 md:ml-0'>
                    <div className='flex md:space-x-24 justify-between text-gray-500'>
                        <p>Check'outs</p>
                        <p className='text-3xl text-green-700'>
                            <i class="ri-shopping-bag-4-fill"></i>
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl'>32</p>
                    </div>
                </div>
                <div className='border-2 p-4 space-y-4 rounded-xl mr-8 ml-8 md:mr-0 md:ml-0'>
                    <div className='flex md:space-x-24 justify-between text-gray-500'>
                        <p>Earnings</p>
                        <p className='text-3xl text-green-700'>
                            <i class="ri-wallet-3-fill"></i>
                        </p>
                    </div>
                    <div>
                        <p>$ <span className='text-2xl'>4.923</span><span className='text-gray-500'>,68</span></p>
                    </div>
                </div>
                <div className='border-2 p-4 space-y-4 rounded-xl mr-8 ml-8 md:mr-0 md:ml-0'>
                    <div className='flex md:space-x-24 justify-between text-gray-500'>
                        <p>Reviews</p>
                        <p className='text-3xl text-yellow-500'>
                            <i class="ri-bar-chart-grouped-line"></i>
                        </p>
                    </div>
                    <div>
                        <p><span className='text-2xl'>4.5</span><span className='text-gray-500'>(1400)</span></p>
                    </div>
                </div>
            </div>
            {/*  */}
            {/* <div className='flex m-12 '>
                <div className='w-1/2 text-2xl'>
                    <p>Your next steps</p>
                </div>

                <div className='flex items-center space-x-1'>
                    <p className='text-2xl'>New activity</p>
                    <span className='bg-green-700 text-white rounded-full px-3'>3</span>
                </div>
            </div> */}
            {/*  */}
            <section className='md:m-12 m-3 md:flex md:space-x-4'>
                <div className='md:w-1/2'>

                    <div className='w-1/2 text-2xl pb-7'>
                        <p>Your next steps</p>
                    </div>
                    <div className='2-box flex justify-between items-center'>
                        {secondBox.map((option, index) => (
                            <div key={index} className='border-2 p-4 space-y-2 rounded-xl md:pr-16'>
                                <div className='flex text-gray-500'>
                                    <p className={`text-4xl ${option.icon2 === "red" ? "text-red-400" : "text-green-500"}`}>
                                        {option.icon}
                                    </p>
                                </div>
                                <div className='space-y-3'>
                                    <p className='pt-6'>
                                        {option.text}
                                    </p>
                                </div>
                                <div className='flex justify-between space-x-3'>
                                    <div className="mb-2 h-2.5 rounded-full w-full" style={{ backgroundColor: option.icon2 === "red" ? "#fee2e2" : "#d1fae5" }}>
                                        <div
                                            className={`h-2.5 ${option.icon2 === "red" ? "bg-red-800" : "bg-green-600"}`}
                                            style={{ width: `${option.number * 100}%` }}>
                                        </div>
                                    </div>
                                    <div className='text-xs text-gray-500'>{Math.round(option.number * 6)}/6</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='New bookings flex space-x-1.5 pt-7 items-center pb-7 '>
                        <p className='text-2xl'>New bookings</p>
                        <button className='bg-green-700 rounded-full px-3 text-white'>3</button>
                    </div>
                    <div className='3-profile border-2 rounded-xl md:p-6 p-4 space-y-8'>
                        {thirdBox.map((option, index) => (
                            <div key={index} className='flex justify-between items-center'>
                                {/* left section: profile image and address */}
                                <div className='flex justify-between items-center space-x-4'>
                                    <p>
                                        <img
                                            src={option.profile}
                                            alt="Profile"
                                            className="w-12 h-10 rounded-full"
                                        />
                                    </p>
                                    <p>{option.address}</p>
                                </div>
                                {/* right section: dates, duration, and price */}
                                <div className='flex justify-between items-center space-x-6'>
                                    <p>{option.date}</p>
                                    <p>{option.duration}</p>
                                    <p>{option.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='last-main-div md:w-1/2'>
                    <div className='last-main'>


                        <div className='flex items-center space-x-1 pb-7 pt-7 md:pt-0'>
                            <p className='text-2xl'>New activity</p>
                            <span className='bg-green-700 text-white rounded-full px-3'>3</span>
                        </div>
                        <div className="flex flex-col space-y-4 w-full border-2 rounded-xl md:p-6 p-4">
                            {fourthBox.map((option, index) => (
                                <div key={index} className="flex justify-between ">
                                    {/* left section: image and text */}
                                    <div className="c-p flex space-x-4">
                                        {/* icon */}
                                        <div className="text-4xl text-gray-700">
                                            {option.image}
                                        </div>
                                        {/* title & text content */}
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-xl">{option.title}</p>
                                                <p className="text-xs text-gray-600">{option.text}</p>
                                            </div>
                                            {/* text1 button */}
                                            <div>
                                                {option.text1 === "Question" && (
                                                    <button className="text-sm bg-[#efebff] text-[#6237db] py-1 px-2 rounded-full cursor-pointer">
                                                        {option.text1}
                                                    </button>
                                                )}
                                                {option.text1 === "Damage Report" && (
                                                    <button className="text-sm bg-[#FEE9DD] text-red-700 py-1 px-2 rounded-full cursor-pointer">
                                                        {option.text1}
                                                    </button>
                                                )}
                                                {option.text1 === "Request" && (
                                                    <button className="text-sm bg-green-100 text-green-400 py-1 px-2 rounded-full cursor-pointer">
                                                        {option.text1}
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                    {/* right section: link icon and number */}
                                    <div className="l-i cursor-pointer text-gray-500 flex  space-x-1">
                                        <div>{option.icon}</div>
                                        <span>{option.number}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div></div>
        </section>
    );
}

export default HeroSection;
