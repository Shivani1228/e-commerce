import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";
// import { signOut } from "firebase/auth";

const Navbar = ({ cart, userName }) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = () => {
  
  auth.signOut(auth)
    .then(() => {
      toast.success("Logout Successful")
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
       toast.error(error)
    });
};


  return (
    <>
    <div className="sticky top-0 z-50 bg-white shadow-sm">
        <header className="bg-white border-b border-gray-200 ">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl">
                  Apna<span className="text-red-500">Bazaar</span>
                </h3>
              </Link>
            </div>

            <ul className="hidden md:flex items-center text-lg font-semibold gap-6">
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/allproducts">All Products</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-4">
{/* ///// */}
              {
                userName?(<>
                <Link to="/login">
              
                <button className="font-bold bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
              <span>{userName}</span>
                </>):(<><Link to="/login">
              
                <button className="font-bold bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
                  Login
                </button>
              </Link>
              <span>{userName}</span></>)
              }
              {/* <Link to="/login">
              
                <button className="font-bold bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
                  Login
                </button>
              </Link>
              <span>{userName}</span> */}

 
{/* ////// */}
              <Link to="/cart" className="hover:text-red-500 transition-colors inline-block">
  <button className="relative p-2 cursor-pointer group flex items-center justify-center">
    
   
    <FaShoppingCart className="group-hover:text-red-500 transition-colors" size={25} />

  
    {cart.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
        {cart.length}
      </span>
    )}

  </button>
</Link>


              {!isOpen && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="md:hidden block cursor-pointer text-gray-800"
                >
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-[100%] left-0 h-[calc(100vh-73px)] w-full bg-red-500 text-white z-40 flex flex-col items-center justify-center md:hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white hover:text-gray-200 cursor-pointer p-2 z-50"
              >
                <RxCross2 size={30} />
              </button>

              <ul className="flex flex-col gap-10 text-2xl items-center font-semibold">
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <Link to="/allproducts">All Products</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
