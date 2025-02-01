import React from "react";
interface GameCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
}
export const GameCard = ({
  title,
  image,
  price,
  rating
}: GameCardProps) => {
  return <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-purple-400">${price}/week</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300 ml-1">{rating}</span>
          </div>
        </div>
        <button className="w-full mt-3 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
          Rent Now
        </button>
      </div>
    </div>;
};