


import { useState } from "react";
import { Button } from "flowbite-react";
import { RxCross2 } from "react-icons/rx"; // Close icon ke liye
import toast from "react-hot-toast"; // 💡 Toster alert ke liye import kiya

const LoginModal = () => {
  const [openModal, setOpenModal] = useState(false);
  
  // States checkout form ke liye
  const [name, setName] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [pincode, setPincode] = useState(""); 
  const [mobile, setMobile] = useState(""); 

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setAddress("");
    setPincode("");
    setMobile("");
  }

  // 🌟 Order Process karne ka handle function
  const handleOrderSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye

    // Checkbox validation (Saari fields bhari honi chahiye)
    if (!name || !address || !pincode || !mobile) {
      return toast.error("Please fill all the delivery details");
    }

    // Mobile number 10 digit ka hona chahiye verification
    if (mobile.length < 10) {
      return toast.error("Please enter a valid 10-digit mobile number");
    }

    // 🔴 1. Toster message show hoga
    toast.success("Order Placed Successfully! 🛒", {
      duration: 4000,
      position: "top-center",
    });

    // 🟢 2. Saara form automatic khali (clear) ho jayega
    setName("");
    setAddress("");
    setPincode("");
    setMobile("");

    // 🔵 3. Popup modal automatic band ho jayega
    setOpenModal(false);
  };

  return (
    <>
      {/* 🛒 Checkout Trigger Button */}
      <div className="p-4 flex justify-center">
        <button 
          onClick={() => setOpenModal(true)} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-8 rounded-lg shadow-md transition-colors cursor-pointer text-base tracking-wide"
        >
         CHECKOUT
        </button>
      </div>

      {/* 🌟 Modal Setup */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          
          {/* Modal Container */}
          {/* 💡 div ko <form> me badla taaki Enter dabane par ya submit par function trigger ho sky */}
          <form 
            onSubmit={handleOrderSubmit}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative p-6 pt-10 space-y-6 text-gray-950 light"
          >
            
            {/* Cross Icon */}
            <button 
              type="button" // Form submit hone se rokne ke liye type button diya
              onClick={onCloseModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer z-10"
            >
              <RxCross2 size={22} />
            </button>
            
            {/* Form Body */}
            <div className="space-y-4">
              
              {/* 1. Name Field */}
              <div>
                <div className="mb-1 text-sm font-semibold text-gray-800">Your name</div>
                <input
                  type="text"
               
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-950 font-medium py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* 2. Full Address Field */}
              <div>
                <div className="mb-1 text-sm font-semibold text-gray-800">Enter Full Address</div>
                <input 
                  type="text" 
                 
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  required 
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-950 font-medium py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* 3. PinCode Field */}
              <div>
                <div className="mb-1 text-sm font-semibold text-gray-800">Your Pincode</div>
                <input
                  type="number" 
             
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                  required
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-950 font-medium py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* 4. Mobile Number Field */}
              <div>
                <div className="mb-1 text-sm font-semibold text-gray-800">Your Mobile Number</div>
                <input
                  type="tel" 
            
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  required
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-950 font-medium py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* Submit Action Button */}
              <div className="w-full pt-3">
                {/* 💡 type="submit" lagaya taaki form validation automatic ho */}
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 rounded-lg transition-colors">
                  Order Now
                </Button>
              </div>

            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginModal;

