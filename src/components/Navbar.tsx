import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
export const Navbar = () => {
  return <nav className="w-full bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">GameRent</span>
          </div>
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input type="text" placeholder="Search games..." className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>;
};