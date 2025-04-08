import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../config/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { NavLink } from "react-router-dom";
// import { faUser, faLock } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const Errors = {
    empty: "Please fill all fields.",
    invalid: "Invalid credentials.",
  };
  const navigate = useNavigate();
  // email s username....
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState<string>("");
  useEffect(() => {
    document.title = "Login to GIT Notes";
  }, []);

  const handleLogin = async () => {
    console.log("init login");
    const email = username.trim();
    const passwd = password.trim();
    if (email.length == 0 || passwd.length == 0) {
      setInvalid("Fill all fields!!!");
      setTimeout(() => setInvalid(""), 2000);
    } else {
      try {
        console.log("Password check done");
        signInWithEmailAndPassword(auth, email, passwd)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("all done");
            alert("all verification done");
            navigate("/");
            setInvalid("");
          })
          .catch((error) => {
            console.log(error);
            setInvalid(error.message);
            setTimeout(() => setInvalid(""), 2000);
          });
      } catch (error: any) {
        console.log(error);
        setInvalid(error.message);
        setTimeout(() => setInvalid(""), 2000);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex my-20 flex-col w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>

      {/* email */}
      <div className="mb-4">
        <label htmlFor="username" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative mt-1">
          <input
            id="username"
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 pl-10"
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
          />

          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
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
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faLock} className="h-6 w-6" />
          </span>
        </div>
      </div>
      <div className="mb-4">
        <p>
          Add another admin from the{" "}
          <NavLink to="/signup" className="text-blue-500">
            signup page
          </NavLink>
        </p>
      </div>
      {invalid.length > 0 && <p className="text-red-500 p-2">{invalid}</p>}

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Log in
      </button>
    </motion.div>
  );
};

export default LoginForm;
