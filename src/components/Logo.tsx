// Logo.tsx
import React from "react";
import logo from "../assets/images/Logo.png"; // <-- adjust path to where your logo is stored

type LogoProps = {
  width?: number;
  height?: number;
  alt?: string;
};

const Logo: React.FC<LogoProps> = ({ width = 120, height = 40, alt = "Mmesoma David Logo" }) => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
