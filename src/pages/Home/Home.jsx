import Gallary from "../../components/Gallery/Gallary"
import HeroSection from "../../components/HeroSection/HeroSection"
import Popularaproducts from "../../components/PopularProducts/Popularaproducts"
// import Layout from "../../components/Layout/Layout"
import Service from "../../components/Service/Service"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = ({AddToCart}) => {
  return (
    
  <>  <HeroSection/>
    <Service/>
    <Popularaproducts AddToCart={AddToCart}/>
    <Gallary/>
    <Testimonials/></>
    
  )
}

export default Home
