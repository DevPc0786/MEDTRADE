import { useState } from "react";

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Images for two pages
  const slides = [
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
    "https://via.placeholder.com/196",
  ];

  // Function to navigate between pages
  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="w-full mt-8">
      {/* Slider Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            width: "200%", // Ensures both pages fit inside the container
          }}
        >
          {/* Page 1 */}
          <div className="flex w-full">
            {slides.slice(0, 5).map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[196px] h-[196px] flex justify-center items-center border border-gray-300 mx-auto"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Page 2 */}
          <div className="flex w-full">
            {slides.slice(5, 10).map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[196px] h-[196px] flex justify-center items-center border border-gray-300 mx-auto"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 6}`}
                  className="object-cover w-full h-full"
                />
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

export default Slider;
