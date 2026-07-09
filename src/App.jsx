import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Allproducts from "./components/AllProducts/Allproducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import  toast, { Toaster } from 'react-hot-toast';
import { auth } from "./FirebaseAuth/FirebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Singleproduct from "./pages/SingleProduct/Singleproduct";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  const [cart, setCart] = useState([]);
  const [promocode, setPromoCode] = useState("");
const [discount, setDiscount] = useState(0); 
const [userName, setUserName] = useState(""); 

  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);

    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updateCart);
    
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
        toast.success("Product added to cart")
    }
  };

  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(incQuantity);
  };

  //Dec quantity
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item,
    );
    setCart(decQuantity);
  };

  //Remove Item

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  // calculate total price


  const getTotalPrice=()=>{
    const totalPrice= cart.reduce((total,cartReduceItem)=>{
      return total+cartReduceItem.price*cartReduceItem.quantity
    },0)
    return totalPrice-discount
  }

//promoCode



const applyPromoCode = () => {
  if (promocode === "DISCOUNT10") {
    setDiscount(getTotalPrice() * 0.1); // 
    setPromoCode("");
    alert("Promo code apply successfully ")
  } else {
    alert("INVALID PROMOCODE");
  }
};


//username display



useEffect(() => {
 
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserName(user.displayName);
    } else {
      setUserName("");
    }
  });

 
  return () => unsubscribe();
}, []);







    return (
    <BrowserRouter>
     
      <div className="flex flex-col min-h-screen">
        
        <Navbar cart={cart} userName={userName}/>
        
       
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart}/>} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleDec={handleDec}
                  handleInc={handleInc}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  applyPromoCode={applyPromoCode}
                  promocode={promocode}
                  setPromoCode={setPromoCode}
                />
              }
            />
           
             <Route
              path="/allproducts"
              element={<Allproducts AddToCart={AddToCart} />}
            />
             <Route
              path="/about"
              element={<About/>}
            />
             <Route
              path="/contact"
              element={<Contact/>}
            />

            <Route
              path="/singleproduct/:id"
              element={<Singleproduct AddToCart={AddToCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
        </div> 

        <Toaster />
        <Footer />

      </div> 
    </BrowserRouter>
  );

}

export default App;
