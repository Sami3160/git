import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";

interface AdminDashboardProps {

}

const AdminDashboard: React.FC<AdminDashboardProps> = () => {
    const navigate = useNavigate();
    const token: any = localStorage.getItem("user")
    const [userId, setUserId] = useState<string | undefined>('');
    useEffect(() => {
        document.title = "Admin Dashboard"
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user?.uid;
                setUserId(uid);
            } else {
                handleLogout();
                // navigate("/login")
            }
        })
    }, [])

    useEffect(() => {
        document.title = "Admin Dashboard"
        if (token) {

            const [email, expiryDateString] = token.split('_');
            const expiryDate = new Date(Number(expiryDateString));
            const expectedEmail = localStorage.getItem('email');

            if (email !== expectedEmail || expiryDate < new Date()) {

                // The token is invalid or expired
                console.log("jello expired");
                
                navigate("/login")
            }
        } else {
            console.log("wtf happened");

            navigate("/login")
        }


    }, [])
    const handleLogout = () => {
        // localStorage.removeItem('user')
        // localStorage.removeItem('email')
        // navigate("/login")

        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('email')
                navigate("/")
                console.log("signout successfully");
            }).catch((error) => {
                alert("error in sigbnout")
                console.log(error);

            })
    }
    return (
        <div className="mx-20 pt-14">
            <p className="text-6xl font-extrabold  my-10 ">Welcome to Dashboard</p>
            <p className="text-xl font-normal  text-slate-800">Available Notes Content</p>
            <VisitStats />


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto p-8"
            >
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Admin Management</h2>
                    <div className="flex items-center">
                        <span className="text-3xl text-blue-500 mr-2">
                            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />

                        </span>
                        <p className="text-lg">Manage users, roles, and permissions.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Notes Control</h2>
                    <div className="flex items-center">
                        <span className="text-3xl text-green-500 mr-2">
                            <FontAwesomeIcon icon={faBook} className="h-6 w-6" />

                        </span>
                        <p className="text-lg">View detailed analytics and reports.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Settings</h2>
                    <div className="flex items-center">
                        <span className="text-3xl text-purple-500 mr-2">
                            <FontAwesomeIcon icon={faSignOut} className="h-6 w-6" />

                        </span>
                        <p className="text-lg">Customize your dashboard settings.</p>
                    </div>
                </div>
            </motion.div>
            <div className="logout w-[10vw] h-10 flex items-center justify-center  my-10">

                <div className="group relative">
                    <button onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOut} className="h-6 w-6" />
                    </button>
                    <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
                                z-20 origin-left scale-0 px-3 rounded-lg border 
                                border-gray-300 bg-white py-2 text-sm font-bold
                                shadow-md transition-all duration-300 ease-in-out 
                                group-hover:scale-100">Logout<span>
                        </span>
                    </span>
                </div>
            </div>


        </div>

    );
}

export default AdminDashboard;

function VisitStats() {

    return (
        <div className="p-4 md:p-6">
            <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div className="md:border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">CSE</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">150+</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div className="lg:border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">MECH</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">10+</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div className="md:border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">E&TC</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">50+</h2>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                    <div className="px-12">
                        <p className="text-gray-600 mb-2 text-center">Civil</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-center">30+</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}