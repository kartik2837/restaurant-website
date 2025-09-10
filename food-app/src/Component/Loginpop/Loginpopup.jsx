// import React, { useState } from 'react'
// import './Loginpop.css'
// import { assets } from '../../assets/assets'
// import { useContext } from 'react'
// import { StoreContext } from '../Contextapi'
// import axios from 'axios'

// const Loginpopup = ({ setShowLogin }) => {
//     const { url, setToken } = useContext(StoreContext)
//     const [currstate, setCurrstate] = useState("Login")
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const onchangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))

//     }
//     const onLogin = async (event) => {
//         event.preventDefault();
//         let newUrl = url;
//         if (currstate === "Login") {
//             newUrl += "/api/user/login"
//         }
//         else {
//             newUrl += "/api/user/register"
//         }
//         const response = await axios.post(newUrl, data);
//         if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem("token", response.data.token);
//             setShowLogin(false);

//         }
//         else {
//             alert(response.data.message);
//         }

//     }

//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currstate}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-input">
//                     {currstate === "Login" ? <></> : <input type='text' name='name' onChange={onchangeHandler} value={data.name} placeholder='Enter Your Name' required />}
//                     <input type='email' name='email' onChange={onchangeHandler} value={data.email} placeholder='Enter Your Email' required />
//                     <input name='password' type='password' onChange={onchangeHandler} value={data.password} placeholder='Enter Your Password' required />

//                 </div>
//                 <button type='submit'>{currstate === "Sign Up" ? "Create-Account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, i agree to the terms of use & Privacy policy.</p>
//                 </div>
//                 <div>
//                     <button><a href="https://www.facebook.com/login/" target='_blank'>Sign in Facebook</a></button>
//                     &nbsp; &nbsp; &nbsp;

//                     <button><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AcMMx-cGECbUM-7Vb_x5EnBVXvxkj7IRjQypO9riz8OOPBsozr-OSLDOfl-QbKDMpncqu7pz78bK&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-435744333%3A1731860573185077&ddm=1" target='_blank'>Sign in google</a></button>

//                 </div>




//                 {currstate === "Login" ? <p>Create a new Account? <span onClick={() => setCurrstate("Sign Up")}>Click Here</span></p> : <p>Already have an account? <span onClick={() => setCurrstate("Login")}>Login here</span></p>}
//             </form>
//         </div>
//     )
// }

// export default Loginpopup



import React, { useState, useContext } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Contextapi";
import axios from "axios";
import { toast } from "react-toastify";   // ✅ import toast

const Loginpopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currstate, setCurrstate] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currstate === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        // ✅ success toast
        toast.success("Login successfully");
        setTimeout(() => {
          setShowLogin(false);
        }, 1500);
      } else {
        // ❌ error toast
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="login-popup flex justify-center items-center">
      <form
        onSubmit={onLogin}
        className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{currstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="cursor-pointer h-5 w-5"
          />
        </div>

        {/* Inputs */}
        <div>
          {currstate === "Login" ? null : (
            <input
              type="text"
              name="name"
              onChange={onchangeHandler}
              value={data.name}
              placeholder="Enter Your Name"
              required
              className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onchangeHandler}
            value={data.email}
            placeholder="Enter Your Email"
            required
            className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          />
          <input
            name="password"
            type="password"
            onChange={onchangeHandler}
            value={data.password}
            placeholder="Enter Your Password"
            required
            className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          />
        </div>

        {/* Forgot password only in Login */}
        {currstate === "Login" && (
          <div className="text-right py-4">
            <a className="text-blue-600 underline text-sm" href="#">
              Forgot Password
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
        >
          {currstate === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        {currstate === "Sign Up" && (
          <div className="flex items-start gap-2 text-xs mt-3">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & Privacy policy.</p>
          </div>
        )}

        {/* Switch State */}
        {currstate === "Login" ? (
          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => setCurrstate("Sign Up")}
              className="text-blue-500 underline cursor-pointer"
            >
              Signup
            </span>
          </p>
        ) : (
          <p className="text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setCurrstate("Login")}
              className="text-blue-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}

        {/* Social logins */}
        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
            alt="appleLogo"
          />
          Log in with Apple
        </button>
        <button
          type="button"
          className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
          />
          Log in with Google
        </button>
      </form>
    </div>
  );
};

export default Loginpopup;
