import React, { useState } from "react";
import { Mail, Lock, ChevronDown } from "lucide-react";
interface LoginFormData {
  email: string;
  password: string;
  role:  "staff" | "admin";
}
interface LoginPageProps {
  onLogin: (data: LoginFormData) => void;
}
export const LoginPage = ({
  onLogin
}: LoginPageProps) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    role: "staff"
  });
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };
  const roles = [{
    id: "staff",
    label: "Staff"
  }, {
    id: "admin",
    label: "Administrator"
  }];
  return <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to GameRent
          </h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Login As
              </label>
              <button type="button" className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors" onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}>
                <span className="capitalize">{formData.role}</span>
                <ChevronDown size={20} />
              </button>
              {isRoleDropdownOpen && <div className="absolute w-full mt-2 bg-gray-700 rounded-lg shadow-xl z-10">
                  {roles.map(role => <button key={role.id} type="button" className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg" onClick={() => {
                setFormData({
                  ...formData,
                  role: role.id as LoginFormData["role"]
                });
                setIsRoleDropdownOpen(false);
              }}>
                      {role.label}
                    </button>)}
                </div>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="email" className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="password" className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your password" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} />
              </div>
            </div>
            {/* <div className="flex justify-end">
              <button type="button" className="text-purple-400 hover:text-purple-300 text-sm">
                Forgot password?
              </button>
            </div> */}
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Sign In
            </button>
            {/* {formData.role === "user" && <p className="text-center text-gray-400 text-sm mt-4">
                Don't have an account?{" "}
                <button type="button" className="text-purple-400 hover:text-purple-300">
                  Sign up
                </button>
              </p>} */}
          </form>
        </div>
      </div>
    </div>;
};