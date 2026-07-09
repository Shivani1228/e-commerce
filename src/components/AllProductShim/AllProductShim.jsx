



const AllProductShim = () => {
  // ⏳ 8 khali cards banane ke liye ek dummy array
  const shimCards = Array(8).fill(0);

  return (
    <section className="text-gray-600 body-font bg-gray-50 py-12">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {shimCards.map((_, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* 💡 animate-pulse lagane se card smooth blink karega */}
              <div className="h-full border border-gray-200 bg-white rounded-xl p-4 shadow-sm animate-pulse">
                
                {/* Gray Box for Image */}
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

                <div className="mt-4 space-y-3">
                  {/* Gray Line for Title */}
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>

                  {/* Gray Line for Rating */}
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>

                  {/* Gray Line for Price */}
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  
                  {/* Gray Box for Button */}
                  <div className="h-8 bg-gray-200 rounded-lg w-full mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProductShim;
