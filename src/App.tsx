import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { AdminLayout } from "./components/admin/AdminLayout";
import { DataTable } from "./components/admin/DataTable";
import { RentalForm } from "./components/staff/RentalForm";
import { MembershipForm } from "./components/staff/MembershipForm";
import { LoginPage } from "./components/auth/LoginPage";
import { RentalDataTable } from "./components/staff/rentalDataTable";
import { InboxTable } from "./components/staff/inboxTable";
import { StaffForm } from "./components/admin/StaffForm";
import { GameForm } from "./components/admin/GameForm";
import { NoticeForm } from "./components/admin/NoticeForm";
const mockUsers = [{
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}, {
  id: 2,
  name: "Jane Smith",
  email: "jane@example.com"
}];
const mockStaff = [{
  id: 1,
  name: "Admin User",
  role: "Administrator",
  department: "Management"
}, {
  id: 2,
  name: "Staff User",
  role: "Customer Service",
  department: "Support"
}];
const mockGames = [{
  id: 1,
  title: "Cyberpunk 2077",
  stock: 5,
  price: 14.99,
  status: "Available"
}, {
  id: 2,
  title: "Elden Ring",
  stock: 3,
  price: 15.99,
  status: "Available"
}];
const mockRentals = [{
  id: 1,
  memberName: "John Doe",
  gameName: "Cyberpunk 2077",
  rentDate: "2023-07-01",
  dueDate: "2023-07-08",
  status: "Active"
}];
const mockMemberships = [{
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
  status: "Active",
  joinDate: "2023-01-15"
}];
const mockNotice = [{
  id: 1,
  content: "We're close tomorrow.",
  date: "2025-02-02"
}]
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"user" | "staff" | "admin" | null>(null);
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [showGameForm, setShowGameForm] = useState(false);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const handleLogin = (loginData: {
    email: string;
    password: string;
    role: "user" | "staff" | "admin";
  }) => {
    setIsLoggedIn(true);
    setUserRole(loginData.role);
    console.log("Logged in as:", loginData.role);
  };
  const renderAdminSection = () => {
    switch (currentSection) {
      case "dashboard":
        return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[{
            title: "Total Users",
            value: "1,234"
          }, {
            title: "Active Rentals",
            value: "56"
          }, {
            title: "Total Games",
            value: "89"
          }].map(stat => <div key={stat.title} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>)}
          </div>;
      case "users":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Users Management
              </h2>
              <button onClick={() => setShowMembershipForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add Customer
              </button>
            </div>
            <DataTable headers={["ID", "Name", "Email", "Status"]} data={mockUsers} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "staff":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Staff Management
              </h2>
              <button onClick={() => setShowStaffForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add New Staff
              </button>
            </div>
            <DataTable headers={["ID", "Name", "Role", "Department"]} data={mockStaff} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "games":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Games Management
              </h2>
              <button onClick={() => setShowGameForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add New Game
              </button>
            </div>
            <DataTable headers={["ID", "Title", "Stock", "Price", "Status"]} data={mockGames} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
        case "notice":
          return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Notice</h2>
              <button onClick={() => setShowNoticeForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Send New Notice
              </button>
            </div>
            <InboxTable headers={["id", "content", "date"]} data={mockNotice} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      default:
        return null;
    }
  };
  const renderStaffSection = () => {
    switch (currentSection) {
      case "dashboard":
        return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[{
            title: "Active Rentals",
            value: "45"
          }, {
            title: "Active Users",
            value: "156"
          }].map(stat => <div key={stat.title} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
              </div>)}
          </div>;
      case "rentals":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Rental Records</h2>
              {/* <button onClick={() => setShowRentalForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                New Rental
              </button> */}
            </div>
            <RentalDataTable headers={["id", "memberName", "gameName", "rentDate", "dueDate", "status"]} data={mockRentals} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "memberships":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Customers</h2>
              <button onClick={() => setShowMembershipForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add Customer
              </button>
            </div>
            <RentalDataTable headers={["id", "name", "email", "age", "joinDate"]} data={mockMemberships} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "inbox":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Notice</h2>
            </div>
            <InboxTable headers={["id", "content", "date"]} data={mockNotice} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      default:
        return null;
    }
  };
  if (!isLoggedIn || !userRole) {
    return <LoginPage onLogin={handleLogin} />;
  }
  if (userRole === "user") {
    return <div className="min-h-screen bg-gray-900">
        <Navbar />
        {/* Customer view content */}
      </div>;
  }
  return <>
      <AdminLayout currentSection={currentSection} onSectionChange={setCurrentSection} userRole={userRole}>
        {userRole === "admin" ? renderAdminSection() : renderStaffSection()}
      </AdminLayout>
      {showRentalForm && <RentalForm onSubmit={data => {
      console.log("New rental:", data);
      setShowRentalForm(false);
    }} onCancel={() => setShowRentalForm(false)} />}

     {showStaffForm && <StaffForm onSubmit={data => {
      console.log("New staff:", data);
      setShowStaffForm(false);
    }} onCancel={() => setShowStaffForm(false)} />}

      {showMembershipForm && <MembershipForm onSubmit={data => {
      console.log("New user:", data);
      setShowMembershipForm(false);
    }} onCancel={() => setShowMembershipForm(false)} />}

      {showGameForm && <GameForm onSubmit={data => {
        console.log("New game:", data);
        setShowGameForm(false);
      }} onCancel={() => setShowGameForm(false)} />}

      {showNoticeForm && <NoticeForm onSubmit={data => {
        console.log("New notice:", data);
        setShowNoticeForm(false);
      }} onCancel={() => setShowNoticeForm(false)} />}
    </>;
}