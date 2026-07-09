

import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios"; 

const Singleproduct = ({AddToCart}) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const SingleProductFetch = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        
      
        setSingleProduct(res.data); 
      } catch (error) {
        console.error("error", error);
      }
    };

    if (id) {
      SingleProductFetch();
    }
  }, [id]); 

  console.log("Product ID:", id);
  // console.log("Product Data:", singleProduct);

  //  Loading 
  if (!singleProduct) {
    return <div className="text-center mt-10 text-xl">Loading product details...</div>;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8 items-center">
      {/* Product Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={singleProduct.thumbnail} 
          alt={singleProduct.title} 
          className="w-full max-w-sm rounded-xl shadow-md object-cover h-[350px]"
        />
      </div>

      {/* Product Text Details */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {singleProduct.title}
        </h1>
        <p className="text-amber-500 font-bold mb-4">
          Rating: {singleProduct.rating} ★
        </p>
        <p className="text-gray-600 mb-6">
          {singleProduct.description}
        </p>
        <p className="text-2xl font-extrabold text-gray-900 mb-4">
          Price: {singleProduct.price}
        </p>
    

<div className="flex gap-4 items-center">
            {/* Add to Cart Button */}
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm shadow-sm cursor-pointer"
              onClick={() => AddToCart && AddToCart(singleProduct)}
            >
              Add to Cart
            </button>

            {/* Back Button  */}
            <button
              onClick={() => navigate("/allproducts")} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 text-sm cursor-pointer shadow-sm"
            >
              ← Back
            </button>
          </div>

      </div>
    </div>
  );
};

export default Singleproduct;
