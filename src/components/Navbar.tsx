import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {


    return (
        <div className='navbar'>

            <div className=" sticky w-[100%] sm:w-[80%] flex flex-col mx-auto">
                <div className="grid grid-cols-3 justify-center items-center">
                    <div className="logo col-span-3 sm:col-span-1 text-4xl p-3 md:p-6 my-7 sm:my-0 ">
                        <NavLink to={'/'}>
                            GIT-Study Material
                        </NavLink>
                    </div>
                    <ul className="col-span-2 hidden  list-none sm:flex flex-row space-x-0 lg:space-x-16 opacity-1 md:opacity-1 justify-center items-center text-grey-800">
                        <li className="link cursor-pointer">
                            <NavLink to={'/notes'}>
                                Visit Notes
                            </NavLink>
                        </li>
                        <li className="link cursor-pointer">
                            <NavLink to={''}>

                                Upload Notes
                            </NavLink>
                        </li>
                        <li className="adm text-white bg-black cursor-pointer">
                            <NavLink to={''}>

                                Admin Login
                            </NavLink>
                        </li>
                        <li className="link cursor-pointer">
                            <NavLink to={''}>

                                About us
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}




export default Navbar;