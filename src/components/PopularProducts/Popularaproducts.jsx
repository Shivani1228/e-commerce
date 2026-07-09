import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Popularaproducts = ({AddToCart}) => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const PopularProductFetch = async () => {
      try {
        // 💡 Note: DummyJSON ke Products API ka use karna sabse best rehta hai direct items ke liye
        const res = await axios("https://dummyjson.com/carts/1");
        setPopularProduct(res.data.products);
        console.log(res.data.products);
      } catch (err) {
        toast.error(err.message);
      }
    };

    PopularProductFetch();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Popular Products
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Explore our most loved and top-selling items handpicked just for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap -m-4">
          {popularProduct.map((popularItem) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col justify-between" key={popularItem.id}>
              <div>
                <a className="block relative h-48 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    alt={popularItem.title}
                    className="object-cover object-center w-full h-full block hover:scale-105 transition-transform duration-300"
                    src={popularItem.thumbnail} // Ab yeh perfect dikhega kyunki API product wali hai
                  />
                </a>
                <div className="mt-4 mb-3">
                  {/* Category badhai taaki design balanced lage */}
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {popularItem.category || "PRODUCTS"}
                  </h3>
                  <h2 className="text-gray-900 title-font text-base font-medium line-clamp-1">
                    {popularItem.title}
                  </h2>
                  <p className="mt-1 text-gray-900 font-semibold">₹{popularItem.price}</p>
                </div>
              </div>
              
              {/* 🛒 Styled Add to Cart Button */}
              <button className="w-full text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-medium transition-colors cursor-pointer mt-2" onClick={()=>AddToCart(popularItem)} >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popularaproducts;
