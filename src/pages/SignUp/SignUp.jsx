// import Layout from "../../components/Layout/Layout";
import login from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const SignUp = () => {
  const navigate=useNavigate()
  const [userSignUp, SetUserSignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    SetUserSignup({ ...userSignUp, [e.target.name]: e.target.value });
    
  };



    const handleSubmit = async (e) => { 
    e.preventDefault();

  
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password || !userSignUp.confirmPassword) {
      return toast.error("All fields are required");
    }

   
    if (userSignUp.password !== userSignUp.confirmPassword) {
      return toast.error("Passwords do not match! ");
    }

    try {
    
      const res = await createUserWithEmailAndPassword(
        auth,
        userSignUp.email,
        userSignUp.password
      );

    
      await updateProfile(res.user, { displayName: userSignUp.username });
      
  
      toast.success("Signup Successful! 🎉");
      navigate("/login");
      console.log("User updated successfully:", res.user);

    } catch (err) {
      console.log("Firebase Error:", err);
      
     
      if (err.code === "auth/invalid-email") {
        toast.error("invalid-email");
      } else if (err.code === "auth/email-already-in-use") {
        toast.error("email-already-in-use");
      } else if (err.code === "auth/weak-password") {
        toast.error("weak password");
      } else {
        toast.error(err.message);
      }
    }
  };


  return (
    <div>
      <div className="relative">
        <img
          src={login}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>

        <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          Sign Up
        </h2>
      </div>

      <div className="container px-5 py-12 mx-auto flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full shadow-md border border-gray-100">
          <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font text-center">
            Create Account
          </h2>
          <p className="leading-relaxed mb-5 text-gray-500 text-sm text-center">
            Join ApnaBazaar today
          </p>

          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Full Name
            </label>
            <input
              autoComplete="off"
              type="text"
              id="name"
              value={userSignUp.username}
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="enter your name"
              onChange={handleChange}
            />
          </div>

          {/* ईमेल इनपुट */}
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Email Address
            </label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              value={userSignUp.email}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              autoComplete="off"
              type="password"
              id="password"
              name="password"
              value={userSignUp.password}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="••••••••"
              onChange={handleChange}
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="confirmPassword"
              className="leading-7 text-sm text-gray-600 font-medium"
            >
              Confirm Password
            </label>
            <input
              autoComplete="off"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="••••••••"
              onChange={handleChange}
            />
          </div>

          <button
            className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg font-semibold transition-colors duration-200"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            Already have an account?
            <Link to="/login">
              {" "}
              <button className="text-red-500 cursor-pointer hover:underline font-medium">
                Log In
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
