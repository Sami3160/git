
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../config/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { faUser, faLock } from 'react-icons/fa';


const LoginForm: React.FC = () => {
  const Errors = {
    "empty": "Please fill all fields.",
    "invalid": "Invalid credentials."
  }
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  // email s username....
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState<string>('');
  const usr = useRef<HTMLInputElement>(null)
  const passwd = useRef<HTMLInputElement>(null)
  useEffect(() => {
    document.title = "Login"
    // console.log()

  }, [])


  const handleLogin = async () => {
    let validAdmin = [];
    username.trim()
    password.trim()
    if (username.length == 0 || password.length == 0) {
      setInvalid("empty")
      setTimeout(() => setInvalid(""), 2000)
      // usr.current?.classList.add("")
    } else {
      try {
        const admins = collection(db, 'admins')
        const querySnapshot = await getDocs(admins);
        // const departmentNamesArray: any[] = [];
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          if (doc.data().email === username && doc.data().password === password) {
            validAdmin.push(doc.data())

          }
        });

        if (validAdmin.length == 0) {
          setInvalid("invalid")
          setTimeout(() => setInvalid(""), 2000)
        } else {
          const expiryDate = new Date();
          expiryDate.setHours(expiryDate.getHours() + 1); 

          const newtoken = `${username}_${expiryDate.getTime()}`;

          localStorage.setItem("user", newtoken);
          localStorage.setItem('email', username);
          navigate('/admin')
          setInvalid("")
        }
      } catch (error) {
        console.log(error);

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
            value={username}
            ref={usr}
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
          Add another admin from the <NavLink to="/signup" className="text-blue-500">signup page</NavLink>
        </p>
      </div>
      {invalid == "invalid" ? <p className='text-red-500 p-2'>{Errors.invalid}</p> : null}
      {invalid == "empty" ? <p className='text-red-500 p-2'>{Errors.invalid}</p> : null}

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
