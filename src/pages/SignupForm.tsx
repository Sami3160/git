// SignupForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
const SignupForm: React.FC = () => {
    const Errors = {
        "empty": "Please fill all fields.",
        "invalid": "Email is used by someone else."
    }
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    // email s email....
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [invalid, setInvalid] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    // const [userExists, setUserExists] = useState<any>();
    const usr = useRef<HTMLInputElement>(null)
    const ln = useRef<HTMLInputElement>(null)
    const rn = useRef<HTMLInputElement>(null)
    const passwd = useRef<HTMLInputElement>(null)
    useEffect(() => {
        document.title = "SignUp for GIT Notes"
    }, [])


    const handleSignUp = async () => {
        let validAdmin = [];
        email.trim()
        // fname.trim()
        username.trim()
        password.trim()
        if (email.length == 0 || password.length == 0 || username.length == 0) {
            setInvalid("empty")
            setTimeout(() => setInvalid(""), 3000)
            // usr.current?.classList.add("")
        } else {
            setLoading(true)

            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredentials) => {
                    const user = userCredentials.user
                    console.log(user)
                    await setDoc(doc(db, 'users', user.uid), {
                        username: username,
                        contact: "89898989",

                    })
                    const expiryDate = new Date();
                    expiryDate.setHours(expiryDate.getHours() + 1);


                    const newtoken = `${email}_${expiryDate.getTime()}`;

                    localStorage.setItem("user", newtoken);
                    localStorage.setItem('email', email);
                    setInvalid("")
                    setLoading(false)
                    alert("user created")
                    navigate('/admin')
                    // navigate("/login")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setInvalid("")
                    setTimeout(() => setInvalid(""), 2000)
                    setLoading(false)
                });
        }


    };

    return (
        <div className="py-32 w-full flex justify-center h-full">
            <div className="flex justify-center shadow-xl w-auto ">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex pt-10 flex-col w-full max-w-md  bg-blue-50 p-10 gap-0 rounded-lg  "
                >
                    <h2 className="text-3xl font-semibold text-center mb-4">SignUp</h2>

                    {/* email */}
                    <div className="mb-4">
                        <label htmlFor="fname" className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <div className="relative mt-1">
                            <input
                                id="fname"
                                type="text"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 pl-10"
                                placeholder="Enter a username"
                                value={username}
                                ref={rn}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faUser} className="h-6 w-6" />

                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        {/* email */}
                        <div className="relative mt-1">
                            <input
                                id="email"
                                type="text"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 pl-10"
                                placeholder="Enter your email"
                                value={email}
                                ref={usr}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />

                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative mt-1">
                            <input
                                id="password"
                                type="password"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 pl-10"
                                placeholder="Enter a strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passwd}
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <FontAwesomeIcon icon={faLock} className="h-6 w-6" />
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>
                            To login through another admin, goto <NavLink to="/login" className="text-blue-500">login page</NavLink>
                        </p>
                    </div>
                    {invalid == "invalid" ? <p className='text-red-500 p-2'>{Errors.invalid}</p> : null}
                    {invalid == "empty" ? <p className='text-red-500 p-2'>{Errors.invalid}</p> : null}

                    <button
                        onClick={handleSignUp}
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {loading ? "Loading..." : "Next"}
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='  max-w-2xl   bg-blue-50   rounded-lg '
                >
                    <img src="https://hailbytes.com/wp-content/uploads/2020/07/Login.gif" className="object-cover rounded-lg" />
                </motion.div>
            </div>

        </div>

    );
};

export default SignupForm;
