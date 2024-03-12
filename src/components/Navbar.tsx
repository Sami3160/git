import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar(){


    return (
        <div className='navbar'>

        <div className=" sticky w-[80%] flex flex-col mx-auto">
            <div className="grid grid-cols-3 justify-center items-center">
                <div className="logo col-span-1 text-4xl p-6 ">
                    <NavLink to={'/'}>
                        GIT-Study-Material
                    </NavLink>
                </div>
                <ul className="col-span-2 list-none flex flex-row space-x-16 justify-center items-center text-grey-800">
                    <li className="link cursor-pointer">
                        <NavLink to={''}>
                        Search Notes
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