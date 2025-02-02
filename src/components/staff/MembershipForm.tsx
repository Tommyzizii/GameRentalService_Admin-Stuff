import React, { useState } from "react";
import { User, Mail, Phone, MapPin, BadgeCheck } from "lucide-react";
interface MembershipFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}
export const MembershipForm = ({
  onSubmit,
  onCancel
}: MembershipFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">New Customer</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-300">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <User size={20} />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name*
                </label>
                <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Date of Birth*
                </label>
                <input type="date" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.dateOfBirth} onChange={e => setFormData({
                ...formData,
                dateOfBirth: e.target.value
              })} required />
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Mail size={20} />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address*
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number*
                </label>
                <input type="tel" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Street*
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  City*
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  State*
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Zipcode*
                </label>
                <input type="email" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <MapPin size={20} />
              Address
            </h3>
            <div className="space-y-4">
              <input type="text" placeholder="Street Address" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.address} onChange={e => setFormData({
              ...formData,
              address: e.target.value
            })} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.city} onChange={e => setFormData({
                ...formData,
                city: e.target.value
              })} />
                <input type="text" placeholder="State" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.state} onChange={e => setFormData({
                ...formData,
                state: e.target.value
              })} />
                <input type="text" placeholder="ZIP Code" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.zipCode} onChange={e => setFormData({
                ...formData,
                zipCode: e.target.value
              })} />
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <BadgeCheck size={20} />
              Membership Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Membership Type
                </label>
                <select className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.membershipType} onChange={e => setFormData({
                ...formData,
                membershipType: e.target.value
              })}>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="vip">VIP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Status
                </label>
                <select className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.status} onChange={e => setFormData({
                ...formData,
                status: e.target.value
              })}>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div> */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Additional Notes
            </label>
            <textarea className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" rows={3} value={formData.notes} onChange={e => setFormData({
            ...formData,
            notes: e.target.value
          })} placeholder="Any additional notes about the member..." />
          </div> */}
          <div className="flex space-x-3 pt-4">
            <button type="submit" className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Create Membership
            </button>
            <button type="button" onClick={onCancel} className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>;
};