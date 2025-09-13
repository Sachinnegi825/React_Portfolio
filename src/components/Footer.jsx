import React from "react";
import { Bio } from "../data/constants";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-[#8892b0] border-t border-gray-800">
      <p>&copy; 2025 {Bio.name}. All rights reserved.</p>
      <p>Designed & Built by Sachin Negi</p>
    </footer>
  );
};

export default Footer;
