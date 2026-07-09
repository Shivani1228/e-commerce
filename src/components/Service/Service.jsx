
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";

const Service = () => {
  return (
    <>
      <div className="container mx-auto px-5 pt-20 flex gap-10 items-center justify-center flex-wrap">
        
   
        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center justify-center w-[220px]  hover:scale-[1.02] transition-transform duration-300">
          <FaShippingFast size={30} />
          <p className="font-medium tracking-wide">FREE SHIPPING</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center justify-center w-[220px] hover:scale-[1.02] transition-transform duration-300">
          <MdProductionQuantityLimits size={30} />
          <p className="font-medium tracking-wide">AUTHENTIC PRODUCTS</p>
        </div>

     
        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center justify-center w-[220px] hover:scale-[1.02] transition-transform duration-300">
          <TbTruckReturn size={30} />
          <p className="font-medium tracking-wide">EASY RETURN</p>
        </div>

    
        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center justify-center w-[220px] hover:scale-[1.02] transition-transform duration-300">
          <MdOutlinePayment size={30} />
          <p className="font-medium tracking-wide">SECURE PAYMENT</p>
        </div>

      </div>
    </>
  );
};

export default Service;
