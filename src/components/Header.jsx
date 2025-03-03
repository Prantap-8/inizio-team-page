import React from "react";
// Import your images
import WeAre from "../assets/We are.png";
import TheTeam from "../assets/The team.png";
import Star from "../assets/star.png";

const Header = ({ imageUrl }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-10 py-10 my-10">

      {/* Main Container */}
      <div className="relative w-full max-w-6xl h-auto">
        
        {/* "We are" in top-left corner */}
        <img
          src={WeAre}
          alt="We are"
          className="absolute -top-22 -left-28  z-10"
        />

        {/* Centered main image + star */}
        <div className="relative flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Team"
            className="w-[950px] h-auto object-cover mx-auto"
          />

          {/* Star in top-right corner of the main image */}
          <img
            src={Star}
            alt="Star"
            className="absolute -top-25 right-4 w-[180]"
          />
        </div>

        {/* "The team" in bottom-left corner */}
        <img
          src={TheTeam}
          alt="The team"
          className="absolute -bottom-15 left-112 "
        />
      </div>
    </div>
  );
};

export default Header;
