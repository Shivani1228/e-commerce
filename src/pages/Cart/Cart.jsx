

import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/Modal/LoginModal";
import CardEmpty from "../../components/CardEmpty/CardEmpty";

const Cart = ({ cart, handleDec, handleInc, handleRemove, getTotalPrice ,applyPromoCode,promocode,setPromoCode}) => {

const navigate=useNavigate()


  return (

<>
{
  !cart.length?<CardEmpty/>: <div className="container mx-auto mt-10 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row shadow-md my-10 border border-gray-100 rounded-2xl overflow-hidden bg-white">
        <div className="w-full lg:w-3/4 bg-white px-4 sm:px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
              Shopping Cart
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl text-gray-500">
              {cart.length} Items
            </h2>
          </div>

          <div className="hidden sm:flex mt-10 mb-5 text-gray-400 font-bold tracking-wider text-center">
            <h3 className="font-semibold text-left text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-xs uppercase w-1/5">Total</h3>
          </div>

          {/* cart section start */}

          {cart.map((cartItem) => (
            <div
              className="flex flex-col sm:flex-row items-center hover:bg-gray-50 -mx-4 sm:-mx-8 px-4 sm:px-6 py-5 border-b border-gray-100 transition-colors gap-4 sm:gap-0"
              key={cartItem.id}
            >
              <div className="flex w-full sm:w-2/5">
                <div className="w-20 flex-shrink-0">
                  <img className="h-24" src={cartItem.thumbnail} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm text-gray-800">
                    {cartItem.title}
                  </span>
                  <span className="text-red-500 font-semibold text-xs mt-0.5">
                    {cartItem.category}
                  </span>
                  <a
                    href="#"
                    className="font-bold hover:text-red-600 text-gray-400 text-xs w-fit mt-2 transition-colors"
                    onClick={() => handleRemove(cartItem.id)}
                  >
                    Remove
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center w-full sm:w-1/5">
                <button
                  className="border border-gray-200 hover:bg-gray-100 px-3 py-1 rounded-l-lg font-semibold text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleDec(cartItem.id)}
                >
                  -
                </button>
                <span className="border-t border-b border-gray-200 px-4 py-1 bg-gray-50 text-sm font-bold text-gray-700 min-w-[36px] text-center">
                  {cartItem.quantity}
                </span>
                <button
                  className="border border-gray-200 hover:bg-gray-100 px-3 py-1 rounded-r-lg font-semibold text-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleInc(cartItem.id)}
                >
                  +
                </button>
              </div>

              <div className="flex justify-between sm:justify-center items-center w-full sm:w-1/5 sm:text-center text-sm font-semibold text-gray-600">
                <span className="sm:hidden text-xs uppercase text-gray-400 font-bold">
                  Price:
                </span>
                <span>{cartItem.price} Rs.</span>
              </div>
              <div className="flex justify-between sm:justify-center items-center w-full sm:w-1/5 sm:text-center text-sm font-bold text-gray-900">
                <span className="sm:hidden text-xs uppercase text-gray-400 font-bold">
                  Total:
                </span>
                <span>{cartItem.price * cartItem.quantity}Rs.</span>
              </div>
            </div>
          ))}

          {/* cart section end */}

          <p
            
            className="flex font-semibold text-indigo-600 text-sm mt-10 items-center w-fit hover:text-indigo-800 transition-colors cursor-pointer" onClick={()=>navigate("/allproducts")}
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </p>
        </div>

        <div
          id="summary"
          className="w-full lg:w-1/4 px-6 sm:px-8 py-10 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between"
        >
          <div>
            <h1 className="font-bold text-2xl border-b pb-8 text-gray-800">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5 text-gray-600 font-medium">
              <span className="text-sm uppercase">Item {cart.length} </span>
              <span className="text-sm font-bold text-gray-900">
                {getTotalPrice() + 10}
              </span>
            </div>
            <div className="mb-6">
              <label className="font-semibold inline-block mb-3 text-xs text-gray-500 uppercase">
                Shipping
              </label>
              <select className="block p-2.5 bg-white border border-gray-200 text-gray-600 w-full text-sm rounded-xl focus:outline-none shadow-sm cursor-pointer">
                <option>Standard shipping - 10.00Rs.</option>
              </select>
            </div>
            <div className="py-4">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-xs text-gray-500 uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2.5 border border-gray-200 bg-white text-sm w-full rounded-xl focus:outline-none shadow-sm"
                value={promocode}
                onChange={(e)=>setPromoCode(e.target.value)}
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-xs text-white uppercase rounded-xl font-bold transition-colors shadow-sm cursor-pointer mt-1" onClick={applyPromoCode}>
              Apply
            </button>
          </div>

          <div className="border-t mt-8 border-gray-200">
            <div className="flex font-bold justify-between items-center py-6 text-base text-gray-800 uppercase gap-4">
              <span className="whitespace-nowrap">Total cost</span>

              <span className="text-xl text-gray-950 whitespace-nowrap text-right">
                {getTotalPrice() + 10}
              </span>
            </div>

          
            <LoginModal/>
          </div>
        </div>
      </div>
    </div>
}

   
    </>
  );
};

export default Cart;
