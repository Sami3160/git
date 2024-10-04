import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import GIT from '../images/GIT.png'
import { useState } from 'react';
function Navbar() {

    return (
        // <div className='navbar'>

        //     <div className=" sticky w-[100%] md:w-[90%] lg:w-[80%] flex flex-col mx-auto">
        //         <div className="grid grid-cols-3 justify-center items-center">
        //             <div className="logo col-span-3 sm:col-span-1 lg:text-4xl p-3 md:p-6 my-7 sm:my-0 ">
        //                 <NavLink to={'/'}>
        //                     GIT-Study Material
        //                 </NavLink>
        //             </div>
        //             <ul className="col-span-2 hidden  list-none sm:flex flex-row text-sm md:text-lg space-x-0 md:space-x-1 lg:space-x-8 opacity-1 md:opacity-1 justify-center items-center text-grey-800">
        //                 <li className="link cursor-pointer ">
        //                     <NavLink to={'/notes'} className="p-3 w-full ">
        //                         Visit Notes
        //                     </NavLink>
        //                 </li>
        //                 <li className="link cursor-pointer ">
        //                     <NavLink to={'/upload'} className="p-3">

        //                         Upload Notes
        //                     </NavLink>
        //                 </li>
        //                 <li className="adm text-white bg-black cursor-pointer ">
        //                     <NavLink to={'/admin'} className="p-3">

        //                         Admin Login
        //                     </NavLink>
        //                 </li>
        //                 <li className="link cursor-pointer">
        //                     <NavLink to={''} className="p-3">

        //                         About us
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

        <Navbar2/>
    )
}


function Navbar2(){
    const [modal, showModal] = useState(false);
    
    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={GIT} className="h-8 rounded-full shadow-md" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GIT-Study Material</span>
                </NavLink>
                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li onMouseEnter={()=>showModal(true)} className='relative'
                            onMouseLeave={()=>showModal(false)}
                            >
                            {modal && (
                                <div>
                                    <ul className="absolute -top-[16px] z-20 left-0 w-48 p-4 mt-10 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
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

// export { Navbar2, Navbar };



export default Navbar;