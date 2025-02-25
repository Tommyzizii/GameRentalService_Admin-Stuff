import React from "react";
import { Users, UserCog, GamepadIcon, LayoutDashboard, ClipboardList, UserPlus, Mail, MailWarning } from "lucide-react";
interface AdminLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
  userRole: "admin" | "staff";
  handleLogin:()=>void;
}
export const AdminLayout = ({
  children,
  currentSection,
  onSectionChange,
  userRole,
  handleLogin
}: AdminLayoutProps) => {
  const adminMenuItems = [{
    name: "Users",
    icon: <Users size={20} />,
    id: "users"
  }, {
    name: "Staff",
    icon: <UserCog size={20} />,
    id: "staff"
  }, {
    name: "Games",
    icon: <GamepadIcon size={20} />,
    id: "games"
  }, {
    name: "Notice", 
    icon: <Mail size={20} />,
    id: "notice"
  }];
  const staffMenuItems = [ {
    name: "Rental Records",
    icon: <ClipboardList size={20} />,
    id: "rentals"
  }, {
    name: "Users",
    icon: <UserPlus size={20} />,
    id: "memberships"
  }, {
    name: "Notice",
    icon: <Mail size={20} />,
    id: "notice"
  }, {
    name: "Report",
    icon: <MailWarning size={20} />,
    id: "report"
  }];
  const menuItems = userRole === "admin" ? adminMenuItems : staffMenuItems;
  return <div className="flex h-screen bg-gray-900">
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">
            GameRent {userRole === "admin" ? "Admin" : "Staff"}
          </h1>
        </div>
        <nav className="p-4">
          {menuItems.map(item => <button key={item.id} onClick={() => onSectionChange(item.id)} className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-1 ${currentSection === item.id ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-700"}`}>
              {item.icon}
              <span>{item.name}</span>
            </button>)}
            <button onClick={handleLogin} className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-400 hover:bg-gray-700 mt-auto">
            {/* <LogOut size={20} /> */}
            <span>Sign Out</span>
        </button>
        </nav>
        
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>;
};