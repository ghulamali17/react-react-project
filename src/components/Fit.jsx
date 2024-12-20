import React from "react";
import FitCard from "./FitCard";
import { useSelector } from "react-redux";

function Fit() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
      <section
        className={` pt-[100px]  ${
          isToggled ? "text-white" : "bg-gray-800 text-white"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`title max-w-[1300px] mx-auto text-2xl md:p-0 xs:p-1 ${
            isToggled ? "text-white" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="relative z-0">
            <img
              src="./assets/design.svg"
              className="absolute top-[70%] left-[22%] z-0"
              alt="design"
            />
            <h1
              className={`font-bold font-poppins text-5xl mb-5 pt-5 ${
                isToggled ? "text-[#191919]" : "text-white"
              } z-20 relative`}
            >
              BEST FITS FOR YOU
            </h1>
          </div>

          <div className="content grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 mt-10 gap-6 justify-center">
            <FitCard
              classname={`text-xl font-poppins mt-3 ${
                isToggled ? "text-[#7F7F7F]" : "text-white"
              }`}
              img="./assets/fav1.png"
              text="Hoodies & Sweetshirt"
            />
            <FitCard
              classname={`text-xl font-poppins mt-3  ${
                isToggled ? "text-[#7F7F7F]" : "text-white"
              }`}
              img="./assets/fav3.png"
              text="Coats & Parkas"
            />
            <FitCard
              classname={`text-xl font-poppins mt-3  ${
                isToggled ? "text-[#7F7F7F]" : "text-white"
              }`}
              img="./assets/fav.png"
              text="Coats & Parkas"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fit;
