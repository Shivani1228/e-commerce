
import { useEffect, useState } from "react";
import axios from "axios";
import allProductsImg from "../../assets/allProducts.webp";
import AllProductShim from "../AllProductShim/AllProductShim";

const AllProducts = ({ AddToCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true); // ⏳ Loading state shuru me true rahegi

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true); // Data fetch shuru hone par loading chalu
        const res = await axios("https://dummyjson.com/products");
        setAllProducts(res.data.products);
        setProducts(res.data.products);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false); // Data milne ke baad loading band
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getAllProductsCategory();
  }, []);

  const filterProducts = (categorySlug) => {
    setSelectProducts(categorySlug);
    setSearchItem("");
    setMinPrice("");
    setMaxPrice("");
  };

  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        if (selectProducts) {
          setLoading(true); // Category badalne par bhi shimmer dikhega
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProducts}`,
          );
          setProducts(res.data.products);
        } else {
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    getCategoryProducts();
  }, [selectProducts, allProducts]);

  const handleSearchItems = () => {
    if (!searchItem.trim()) return;
    const searchProduct = products.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase()),
    );
    setProducts(searchProduct);
  };

  const handlePrice = () => {
    let min = parseFloat(minPrice) || 0;
    let max = parseFloat(maxPrice) || Infinity;
    const filterPrice = products.filter((priceItem) => (
      (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    ));
    setProducts(filterPrice); 
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setSearchItem("");
    setSelectProducts("");
    setProducts(allProducts); 
  };

  return (
    <>
      {/* Top Banner */}
      <div className="relative">
        <img
          src={allProductsImg}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
      </div>

      {/* Category Dropdown */}
      <div className="flex justify-center p-5">
        <select
          value={selectProducts}
          onChange={(e) => filterProducts(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="">Select a Category</option>
          {allCategory.map((allProducts, index) => (
            <option key={index} value={allProducts.slug}>
              {allProducts.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <div className="text-center mt-8 relative z-10 px-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-base text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-text"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <button
          className="bg-black text-white px-4 py-2 ml-4 rounded-md cursor-pointer transition-colors hover:bg-gray-800 font-semibold"
          onClick={handleSearchItems}
        >
          Search
        </button>
      </div>

      {/* Price Filters */}
      <div className="text-center mt-8 relative z-10 px-4 flex flex-wrap justify-center gap-3">
        <input
          placeholder="Min Price"
          type="number"
          className="max-w-xs bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-base text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMinPrice(e.target.value)}
          value={minPrice}
        />
        <input
          placeholder="Max Price"
          type="number"
          className="max-w-xs bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-base text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMaxPrice(e.target.value)}
          value={maxPrice}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-800 transition-colors"
          onClick={handlePrice}
        >
          Filter
        </button>
      </div>

      {/* Reset Button */}
      <div className="flex justify-center mt-6 relative z-10">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-6 py-2.5 text-sm font-medium rounded-lg shadow-sm hover:bg-red-600 cursor-pointer transition-colors"
        >
          Reset Filters
        </button>
      </div>

      <br />

      {/* 🌟 CRITICAL FIX: Sahi tarike se Conditional Loading chalayi */}
      {loading ? (
        <AllProductShim /> // Agar loading true hai, toh sirf Shimmer skeleton dikhega
      ) : (
        /* Real Products Section (Sirf tab dikhega jab data load ho chuka ho) */
        <section className="text-gray-600 body-font bg-gray-50 py-12">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.length > 0 ? (
                products.map((item) => (
                  <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full group">
                    <div className="h-full border border-gray-200 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
                      <div>
                        <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            alt={item.title}
                            className="object-cover object-center w-full h-full block transition-transform duration-500 group-hover:scale-105"
                            src={item.thumbnail}
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-gray-900 text-sm font-semibold tracking-tight title-font mb-1 truncate">
                            {item.title}
                          </h3>
                          <h2 className="text-amber-500 title-font text-xs font-bold mt-1">
                            Rating: {item.rating} ★
                          </h2>
                          <p className="mt-1 text-base font-extrabold text-gray-900">
                            ₹{item.price}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => AddToCart(item)} // Prop se add to cart trigger kiya
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm w-full cursor-pointer"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-12 font-semibold text-gray-500">
                  No products found matching filters.
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AllProducts;
