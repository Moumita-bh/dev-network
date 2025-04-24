import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="bg-white border-b border-blue-200 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#0073b1] flex items-center justify-center rounded">
          <span className="text-white font-bold">dn</span>
        </div>
        <span className="text-gray-800 font-medium">DevNetwork</span>
      </div>
      <nav className="space-x-6 text-[#0073b1] font-medium text-sm">
  <a href="#" className="hover:underline">Products</a>
  <a href="#" className="hover:underline">Docs and tools</a>
  <a href="#" className="hover:underline">Resources</a>
  <a href="#" className="hover:underline">Legal</a>
  <Link to="/my-apps">My Apps</Link>

</nav>

    </header>
      
  );
};

export default Navbar;
