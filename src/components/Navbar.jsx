import React from "react";
import skynet_logo from "../assets/skynet_logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 p-4 flex justify-between items-center w-full border-2 border-b-purple-800">
      {/* Logo */}
      <div className="text-white text-lg font-bold">
        <img src={skynet_logo} alt="Logo" className="h-10" />
      </div>

      {/* Language Select */}
      <div>
        <select
          className=" px-2 py-1 rounded focus:outline-none"
          aria-label="Language Select"
        >
          <option value="en">en</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          {/* Add more languages as needed */}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
