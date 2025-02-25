import React, { useEffect, useState } from "react";
import { User, Mail, MapPin, Lock } from "lucide-react";
interface MembershipFormProps {
  onSubmit: (data: any) => void;
  onCancel: (id: any) => void;
  customerId: number | null;
}
export const MembershipForm = ({
  customerId = null,
  onSubmit,
  onCancel
}: MembershipFormProps) => {
  
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone_number: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    password: "",
    staff_id: 0
  });
  useEffect(() => {
    const cookieData = document.cookie
      .split("; ")
      .find(cookie => cookie.startsWith("userData="))
      ?.split("=")[1];

    if (cookieData) {
      const parsedData = JSON.parse(cookieData);
      setFormData(prevFormData => ({
      ...prevFormData,
      staff_id: parsedData.staff_id
      }));
    }
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const data = async (customerId: any) => {
    const res = await fetch(`http://127.0.0.1:5000/customer/${customerId}`);
    const data = await res.json();
    const { created_date, ...rest } = data;
    setFormData({
      ...rest,
    });
    console.log(data);
  }
  useEffect(() => {
    if (customerId) {
      data(customerId);
    }
  }, [customerId])
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
          <div className="flex w-full">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Full Name*
              </label>
              <input type="text" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.customer_name} onChange={e => setFormData({
                ...formData,
                customer_name: e.target.value
              })} required />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Date of Birth*
              </label>
              <input type="date" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.dateOfBirth} onChange={e => setFormData({
                ...formData,
                dateOfBirth: e.target.value
              })} required />
            </div> */}
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
              <input type="tel" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.phone_number} onChange={e => setFormData({
                ...formData,
                phone_number: e.target.value
              })} required />
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg space-y-4">
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            <Lock size={20} />
            Password
          </h3>
          <div className="flex w-full">
            <input type="tel" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.password} onChange={e => setFormData({
              ...formData,
              password: e.target.value
            })} required />
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg space-y-4">
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            <MapPin size={20} />
            Address
          </h3>
          <div className="space-y-4">
            <input type="text" placeholder="Street Address" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.street_address} onChange={e => setFormData({
              ...formData,
              street_address: e.target.value
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
              <input type="text" placeholder="ZIP Code" className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg" value={formData.zip_code} onChange={e => setFormData({
                ...formData,
                zip_code: e.target.value
              })} />
            </div>
          </div>
        </div>
        <div className="flex space-x-3 pt-4">
          <button type="submit" className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            Add Customer
          </button>
          <button type="button" onClick={onCancel} className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>;
};