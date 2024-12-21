import { useState } from "react";

const ShopCategory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Images and their titles
  const slides = [
    { url: "https://tan45.in/wp-content/uploads/2022/03/Single-crank-bed-with-wheel.jpg", title: "Hospital bed" },
    { url: "https://aeoncare.in/cdn/shop/files/BuywheelchairatlowestpriceinChennai.jpg?v=1709101031", title: "Wheel Chair" },
    { url: "https://images.jdmagicbox.com/quickquotes/images_main/portable-ultra-light-medical-oxygen-cylinder-1579liters-2023405253-4x6cig9y.jpg", title: "Oxygen Cylinder" },
    { url: "https://5.imimg.com/data5/MX/DU/HA/SELLER-56499314/walking-aids.jpg", title: "Walking Aids" },
    { url: "https://static.dezeen.com/uploads/2018/01/kimono-patient-gowns-care-wear-design-health-products_dezeen_sq-4.jpg", title: "Patient Cloth" },
    { url: "https://m.media-amazon.com/images/I/71GCFvMAIyL.jpg", title: "Product 6" },
    { url: "https://via.placeholder.com/196", title: "Product 7" },
    { url: "https://via.placeholder.com/196", title: "Product 8" },
    { url: "https://via.placeholder.com/196", title: "Product 9" },
    { url: "https://via.placeholder.com/196", title: "Product 10" },
  ];

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (

    <div className="w-full bg-white mt-8 py-7">
      {/* Slider Container */}
      <h2 className="text-2xl mx-4 my-2">Shop By Category</h2>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            width: "200%", // Two pages of slides
          }}
        >
          {/* Page 1 */}
          <div className="flex w-full">
            {slides.slice(0, 5).map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[196px] h-[220px] flex flex-col items-center  mx-auto"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="object-cover w-full h-[194px]"
                />
                <div className="text-center text-sm mt-2 font-medium ">
                  {slide.title}
                </div>
              </div>
            ))}
          </div>

          {/* Page 2 */}
          <div className="flex w-full">
            {slides.slice(5, 10).map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[196px] h-[220px] flex flex-col items-center border border-gray-300 mx-auto"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="object-cover w-full h-[196px]"
                />
                <div className="text-center text-sm mt-2 font-medium">
                  {slide.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-4">
        {[0, 1].map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`w-4 h-4 rounded-full ${
              currentPage === dotIndex
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
