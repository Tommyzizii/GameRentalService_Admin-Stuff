import { useEffect, useState } from "react";
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
  type: "Administrator"
}, {
  id: 2,
  name: "Staff User",
  type: "Full Time"
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
  username: "John Doe",
  gamename: "Cyberpunk 2077",
  rentdate: "2023-07-01",
  duedate: "2023-07-08",
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
}];
const mockReport = [{
  id: 1,
  reason: "Disc is broken",
  date: "2025-01-31",
  details: "Disc is already broken when i bought it",
  attachment: ""
}];
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"staff" | "admin" | null>(null);
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [showRentalForm, setShowRentalForm] = useState(false);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [showGameForm, setShowGameForm] = useState(false);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [gameReport,setGameReport]=useState([]);
  const [rental,setRental]=useState([]);
  const [customer,setCustomer]=useState([]);
  const [notice,setNotice]=useState([]);
  const handleLogin = (loginData: {
    email: string;
    password: string;
    role: "staff" | "admin";
  }) => {
    setIsLoggedIn(true);
    setUserRole(loginData.role);
    console.log("Logged in as:", loginData.role);
  };
  const handleLogout=()=>{
    setIsLoggedIn(false);
  }
  const fetchData=async(route:string,setState:React.Dispatch<React.SetStateAction<never[]>>)=>{
    const response= await fetch(route);
    const data= await response.json();
    setState (data);  
    console.log(route);
    console.log(data);
  }
  const deleteRental=async(id:number)=>{
    const response= await fetch(`http://127.0.0.1:5000/rental/${id}`,{
      method:"DELETE"
    });
    const data= await response.json();
    console.log(data);
  }
  useEffect(()=>{
    console.log("Fetching data");
    fetchData("http://127.0.0.1:5000/rental",setRental);
    fetchData("http://127.0.0.1:5000/customer",setCustomer);
    fetchData("http://127.0.0.1:5000/notice",setNotice);
    fetchData("http://127.0.0.1:5000/game_report",setGameReport);
  },[])
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
            <DataTable headers={["ID", "Name", "Type"]} data={mockStaff} onEdit={()=>{}} onDelete={()=>{}} />
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
            <InboxTable dataKey={["notice_id","reason","date"]} headers={["ID", "Content", "Date"]} data={notice} onEdit={()=>{}} onDelete={()=>{}} />
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
            <RentalDataTable tableType="rental" dataKey={["rental_id","customer_name","game_name","rent_date","due_date","status"]}  headers={["ID", "Username", "Gamename", "RentDate", "DueDate", "Status"]} data={rental} onEdit={()=>{}} onDelete={(id)=>deleteRental(id)} />
          </div>;
      case "memberships":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Customers</h2>
              <button onClick={() => setShowMembershipForm(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Add Customer
              </button>
            </div>
            <RentalDataTable dataKey={["customer_id","customer_name","email","created_date"]} headers={["ID", "Name", "Email", "JoinDate"]} data={customer} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "notice":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Notice</h2>
            </div>
            <InboxTable dataKey={["notice_id","reason","date"]} headers={["ID", "Content", "Date"]} data={notice} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      case "report":
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Report</h2>
            </div>
            <InboxTable dataKey={["report_id","reason","report_date","detail","attachment"]} headers={["ID", "Reason", "Date", "Details", "Attachment"]} data={gameReport} onEdit={()=>{}} onDelete={()=>{}} />
          </div>;
      default:
        return null;
    }
  };
  if (!isLoggedIn || !userRole) {
    return <LoginPage onLogin={handleLogin} />;
  }
  
  return <>
      <AdminLayout handleLogin={handleLogout} currentSection={currentSection} onSectionChange={setCurrentSection} userRole={userRole}>
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