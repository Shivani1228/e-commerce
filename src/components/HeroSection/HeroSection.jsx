


import banner from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={banner}
            alt="Banner"
            className="w-full  -cover object-center" 
          />

  
        </div>
        

   
      
        <div className="absolute top-1/2 -translate-y-1/2 w-full text-end right-5 px-4 sm:right-10">
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500">
            Discover Your Next Adventure!
          </h1>
          <p className="text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold text-black-800">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
