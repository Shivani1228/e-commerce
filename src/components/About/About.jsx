import about from "../../assets/about.webp";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
const About = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className="relative">
        <img
          src={about}
          alt="About Banner"
          className="object-cover w-full object-center h-[400px]"
        />
        <div className="w-full h-[200px] absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          About
        </h2>
      </div>

      {/* Main Content Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="About Us"
              src={about1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Your Trusted Partner For
              <br className="hidden lg:inline-block" /> Daily Need Essentials
            </h1>
            {/* <p className="mb-8 leading-relaxed">
             Welcome to ApnaBazaar! We are your trusted one-stop online destination for all your daily essentials. Our mission is to provide you with premium quality groceries, fresh products, and household items at the most affordable prices, delivered right to your doorstep. We are committed to ensuring a seamless, secure, and satisfying shopping experience for every customer.
            </p> */}
            <p className="mb-8 leading-relaxed text-gray-600">
              Welcome to ApnaBazaar! We are your trusted one-stop online
              destination for all your daily essentials, electronics, and
              lifestyle needs. Our mission is to provide you with premium
              quality groceries, cutting-edge gadgets, trendy fashion, and daily
              household items at the most affordable prices, delivered right to
              your doorstep. We work directly with top global brands and
              certified local vendors to ensure 100% authenticity, fresh
              quality, and unmatched value. Whether you are stocking up your
              kitchen, upgrading your home decor, or looking for the latest
              tech, we bring the entire marketplace right to your fingertips.
              With our lightning-fast delivery options, secure payment getaways,
              hassle-free 7-day return policy, and a dedicated 24/7 customer
              support team, we are fully committed to ensuring a seamless,
              secure, and satisfying shopping experience for every single
              customer across the country.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Vision &
              <br className="hidden lg:inline-block" /> Quality Assurance
            </h1>
            <p className="mb-8 leading-relaxed">
              ApnaBazaar में हमारा लक्ष्य सिर्फ सामान बेचना नहीं, बल्कि हर घर तक
              शुद्धता और भरोसा पहुँचाना है। हम सीधे किसानों और सही सप्लायर्स से
              सामान चुनते हैं ताकि आपको हमेशा बेस्ट क्वालिटी मिले। हमारी आसान
              रिटर्न पॉलिसी और तेज़ डिलीवरी सर्विस आपके शॉपिंग के अनुभव को और भी
              बेहतर बनाती है।
            </p>
            
          </div>

          {/* Yahan humne image ko right side me set kar diya hai */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded shadow-md"
              alt="Our Vision"
              src={about2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
