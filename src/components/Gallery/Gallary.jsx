




import img1 from "../../assets/shoes.png"; 
import img2 from "../../assets/tshirt.jpg";
import img3 from "../../assets/watch.jpg";
import img4 from "../../assets/laptop.jpg";
import img5 from "../../assets/headphones.jpg";
import img6 from "../../assets/bags.jpg";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap">
        
       
      

      
        <div className="flex flex-wrap md:-m-2 -m-1">
          
          <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Our Exclusive Collections
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            From smart gadgets to trendy fashion and daily needs—discover everything you love in one place.
          </p>
        </div>
          <div className="flex flex-wrap w-1/2">

        
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300" src={img1} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300" src={img2} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg shadow-sm hover:scale-[1.01] transition-transform duration-300" src={img3} />
            </div>
          </div>

       
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg shadow-sm hover:scale-[1.01] transition-transform duration-300" src={img4} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300" src={img5} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300" src={img6} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
