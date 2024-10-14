import { NavLink } from 'react-router-dom';
import './Navbar.css'
import GIT from '../images/GIT.png'
import { useState } from 'react';
function Navbar() {

    return (
        // <Navbar2 />
        <Navbar3 />
    )
}


function Navbar2() {
    const [modal, showModal] = useState(false);

    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={GIT} className="h-8 rounded-full shadow-md" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GIT-Study Material</span>
                </NavLink>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li onMouseEnter={() => showModal(true)} className='relative'
                            onMouseLeave={() => showModal(false)}
                        >
                            {modal && (
                                <div>
                                    <ul className="absolute -top-[16px] z-30 left-0 w-48 p-4 mt-10 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                        <li>
                                            <NavLink to="/notes?sub=cse" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CSE</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notes?sub=mech" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">MECH</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notes?sub=entc" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">E&TC</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notes?sub=civil" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Civil</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <NavLink to="/notes?sub=cse" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Visit Notes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Request Upload</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

function Navbar3() {
    const [modal, showModal] = useState(false);
    return (
        <div className="fixed hidden w-[60%] left-1/2 transform -translate-x-1/2 z-30 md:grid xl:grid-cols-1 grid-cols-1">
            <div className="p-5">
                <div className="py-3 px-3 rounded-full border w-full bg-white border-indigo-500 shadow-lg text-black">
                    <div className="flex justify-between items-center">
                        
                            <NavLink to={'/'}>
                        <div className="flex justify-items-center items-center gap-2">

                            <img src={GIT} className="h-8 rounded-full shadow-md" alt="Flowbite Logo" />
                            <p className="text-2xl font-extrabold text-indigo-950">GIT</p>
                        </div>
                            </NavLink>
                        <div className="flex text-black justify-items-center items-center gap-8 mr-10">
                            <NavLink to="/" className="rounded hover:bg-gray-100  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-indigo-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " aria-current="page">Home</NavLink>
                            <NavLink to="/notes?sub=cse" className="rounded relative hover:bg-gray-100  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-indigo-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " aria-current="page"
                                onMouseEnter={() => showModal(true)}
                                onMouseLeave={() => showModal(false)}
                            >
                                Notes
                                {
                                    modal && (
                                        <div className="absolute pt-6">
                                            <div className=' z-30 -ml-2 left-0 w-48 p-4 rounded-md bg-white text-indigo-900 shadow-2xl'>
                                                <NavLink to="/notes?sub=cse" className="block py-2 px-3  rounded  md:border-0  md:p-0  hover:text-blue-500 ">Computer Science</NavLink>
                                                <NavLink to="/notes?sub=mech" className="block py-2 px-3  rounded  md:border-0  md:p-0  hover:text-blue-500 ">Mechanical</NavLink>
                                                <NavLink to="/notes?sub=entc" className="block py-2 px-3  rounded  md:border-0  md:p-0  hover:text-blue-500 ">E & TC</NavLink>
                                                <NavLink to="/notes?sub=civil" className="block py-2 px-3  rounded  md:border-0  md:p-0  hover:text-blue-500 ">Civil</NavLink>
                                            </div>
                                        </div>
                                    )
                                }
                            </NavLink>
                            <NavLink to="/upload" className="block py-2 px-3  rounded hover:bg-gray-100  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-indigo-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Request Upload</NavLink>
                            <NavLink to="/admin" className="block py-2 px-3  rounded hover:bg-gray-100   md:border-0 md:hover:text-blue-700 md:p-0 dark:text-indigo-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</NavLink>
                            <NavLink to="/about" className="block py-2 px-3  rounded hover:bg-gray-100   md:border-0 md:hover:text-blue-700 md:p-0 dark:text-indigo-900 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default Navbar;