import React from "react";
import { Users, UserCog, GamepadIcon, LayoutDashboard, ClipboardList, UserPlus, Mail } from "lucide-react";
interface AdminLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
  userRole: "admin" | "staff";
}
export const AdminLayout = ({
  children,
  currentSection,
  onSectionChange,
  userRole
}: AdminLayoutProps) => {
  const adminMenuItems = [{
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    id: "dashboard"
  }, {
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
  }];
  const staffMenuItems = [{
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    id: "dashboard"
  }, {
    name: "Rental Records",
    icon: <ClipboardList size={20} />,
    id: "rentals"
  }, {
    name: "Users",
    icon: <UserPlus size={20} />,
    id: "memberships"
  }, {
    name: "Inbox",
    icon: <Mail size={20} />,
    id: "inbox"
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
        </nav>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>;
};