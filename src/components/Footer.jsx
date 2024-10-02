import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 p-4 flex justify-between items-center w-full text-slate-600">
      <div className="text-sm">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms and Conditions
        </a>
      </div>

      <div className="text-sm">
        Copyright © {new Date().getFullYear()} Skynettechnologies.com
      </div>
    </footer>
  );
};

export default Footer;
