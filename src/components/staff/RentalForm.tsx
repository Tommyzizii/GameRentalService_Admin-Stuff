import React, { useState } from "react";
import { Calendar, User, GamepadIcon } from "lucide-react";
interface RentalFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}
export const RentalForm = ({
  onSubmit,
  onCancel
}: RentalFormProps) => {
  const [formData, setFormData] = useState({
    memberName: "",
    memberEmail: "",
    memberPhone: "",
    gameName: "",
    gameId: "",
    rentDate: "",
    dueDate: "",
    depositAmount: "",
    rentalFee: "",
    notes: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">New Rental Record</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-300">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <User size={20} />
              Member Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Member Name*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.memberName} onChange={e => setFormData({
                ...formData,
                memberName: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.memberEmail} onChange={e => setFormData({
                ...formData,
                memberEmail: e.target.value
              })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input type="tel" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.memberPhone} onChange={e => setFormData({
                ...formData,
                memberPhone: e.target.value
              })} />
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <GamepadIcon size={20} />
              Game Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Game Title*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.gameName} onChange={e => setFormData({
                ...formData,
                gameName: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Game ID
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.gameId} onChange={e => setFormData({
                ...formData,
                gameId: e.target.value
              })} />
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Calendar size={20} />
              Rental Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Rent Date*
                </label>
                <input type="date" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.rentDate} onChange={e => setFormData({
                ...formData,
                rentDate: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Due Date*
                </label>
                <input type="date" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.dueDate} onChange={e => setFormData({
                ...formData,
                dueDate: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Rental Fee ($)
                </label>
                <input type="number" step="0.01" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.rentalFee} onChange={e => setFormData({
                ...formData,
                rentalFee: e.target.value
              })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Deposit Amount ($)
                </label>
                <input type="number" step="0.01" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.depositAmount} onChange={e => setFormData({
                ...formData,
                depositAmount: e.target.value
              })} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Notes
            </label>
            <textarea className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" rows={3} value={formData.notes} onChange={e => setFormData({
            ...formData,
            notes: e.target.value
          })} placeholder="Any additional notes..." />
          </div>
          <div className="flex space-x-3 pt-4">
            <button type="submit" className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Create Rental Record
            </button>
            <button type="button" onClick={onCancel} className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>;
};