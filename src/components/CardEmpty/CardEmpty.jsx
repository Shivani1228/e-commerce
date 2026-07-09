



import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className="w-full h-[80vh] mt-[80px] bg-[#f7f6f6] container mx-auto my-4 px-4 py-4 shadow-lg rounded-md flex justify-center items-center">
        <div className="flex items-center flex-col">
          <img
            src="https://i.pinimg.com/originals/02/04/1d/02041d99e553a65d6f70c9e73c8a72fe.jpg"
            alt="Empty Cart"
            className="w-[300px]"
          />
          
          <h3 className="text-center text-2xl font-semibold mt-3 text-gray-800">
            Your Cart is Empty
          </h3>

          {/* 🌟 FIXED: Button ko Link ke andar wrap kiya aur to="/" lagaya */}
          <Link to="/">
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-4 text-base font-medium cursor-pointer transition-colors shadow-sm">
              Go to Home
            </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
