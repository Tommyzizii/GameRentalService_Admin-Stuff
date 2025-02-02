import React, { useState } from "react";
import { Gamepad2 } from "lucide-react";
interface GameFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}
export const GameForm = ({
  onSubmit,
  onCancel
}: GameFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    platform: "",
    price: "",
    rating: "",
    stock: "",
    image: "",
    release_date: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">New Game</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-300">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Gamepad2 size={20} />
              Game Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Title*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Genre*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.genre} onChange={e => setFormData({
                ...formData,
                genre: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Platform*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.platform} onChange={e => setFormData({
                ...formData,
                platform: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Rating*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.rating} onChange={e => setFormData({
                ...formData,
                rating: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Price*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.price} onChange={e => setFormData({
                ...formData,
                price: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Stock*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.stock} onChange={e => setFormData({
                ...formData,
                stock: e.target.value
              })} required />
              </div>
              {/* // TODO: Change the text box to file upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Image*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.image} onChange={e => setFormData({
                ...formData,
                image: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Release Date*
                </label>
                <input type="date" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.release_date} onChange={e => setFormData({
                ...formData,
                release_date: e.target.value
              })} required />
              </div>
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <button type="submit" className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Add Game
            </button>
            <button type="button" onClick={onCancel} className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>;
};