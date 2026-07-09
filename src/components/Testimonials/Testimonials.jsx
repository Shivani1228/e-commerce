



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper ke saare CSS Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  // 👥 Customers ke reviews ki list
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Verified Buyer",
      comment: "Shopping at ApnaBazaar was amazing! I ordered groceries and they were delivered to my doorstep in just 2 hours. Super fresh items.",
      image: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Regular Customer",
      comment: "Great customer service and very pocket-friendly prices. I ordered a smartwatch and some clothes, and the quality is amazing.",
      image: "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Tech Enthusiast",
      comment: "Ordered headphones from here. The delivery was incredibly fast and the packaging was safe. Love getting original brands here.",
      image: "https://image.lexica.art/full_webp/0f447704-1065-41af-8cda-c199d548ec30"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Fashion Blogger",
      comment: "The lifestyle and fashion section has amazing varieties. The delivery was right on time and returns are totally hassle-free!",
      image: "https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg"
    }
  ];

  return (
    <section className="text-gray-600 body-font bg-gray-50 py-20 px-5">
      <div className="container mx-auto">
        
        {/* 🌟 1. Heading Section */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            What Our Customers Say
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
           Trusted by thousands of happy shoppers. Here is what they think about ApnaBazaar.
          </p>
        </div>

        {/* 📦 2. Swiper Slider */}
        <div className="py-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            // 📱 Screen Ke Hisab Se Badlav (Responsive Breakpoints)
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile par 1 slide
              768: { slidesPerView: 2 }, // Tablet par 2 slides
              1024: { slidesPerView: 3 }, // Laptop/Desktop par 3 slides
            }}
            className="mySwiper !pb-12" // Dots ke liye padding bottom di hai
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="h-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[280px]">
                  {/* 💬 Quoted Comment */}
                  <p className="leading-relaxed text-gray-600 text-sm italic">
                    "{review.comment}"
                  </p>
                  
                  {/* 👤 User Profile Box */}
                  <div className="mt-6">
                    <img
                      alt={review.name}
                      className="w-16 h-16 mb-2 object-cover object-center rounded-full inline-block border-2 border-indigo-500 p-0.5 bg-white"
                      src={review.image}
                    />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                      {review.name}
                    </h2>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
