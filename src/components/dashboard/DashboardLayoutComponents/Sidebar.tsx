
import AmbulanceForm from '@/components/main/Home/HomeTab/Ambulance';
import Link from 'next/link';
import { HouseLine, CheckSquare, Gear, Lifebuoy, Users, PresentationChart, Stack, ChartPie, List, TextOutdent, X, Key, User  } from 'phosphor-react';
import { useState } from 'react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, role }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void; role: string; }) => {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);


  const defaultLinks = [
    { href: "/home", label: "Home", icon: <HouseLine size={20} /> },
    { href: "/profile", label: "Profile", icon: <User size={20} /> },
    { href: "/change-password", label: "Change Password", icon: <Key size={20} /> },
  ];

  const roleLinks: Record<string, { href: string; label: string; icon: JSX.Element }[]> = {
    super_admin: [
      { href: "/admin", label: "Admin", icon: <Users size={20} /> },
      { href: "/doctor", label: "Doctor", icon: <PresentationChart size={20} /> },
      { href: "/hospital", label: "Hospital", icon: <Lifebuoy size={20} /> },
      { href: "/patient", label: "Patient", icon: <Stack size={20} /> },
      { href: "/blood", label: "Blood", icon: <ChartPie size={20} /> },
      { href: "/ambulance", label: "Ambulance", icon: <ChartPie size={20} /> },
    ],
    admin: [
      { href: "/admin", label: "Admin", icon: <Users size={20} /> },
      { href: "/doctor", label: "Doctor", icon: <PresentationChart size={20} /> },
      { href: "/hospital", label: "Hospital", icon: <Lifebuoy size={20} /> },
      { href: "/blood", label: "Blood", icon: <ChartPie size={20} /> },
      { href: "/ambulance", label: "Ambulance", icon: <CheckSquare size={20} /> },
    ],
    doctor: [
      { href: "/doctor", label: "Doctor", icon: <PresentationChart size={20} /> },
      { href: "/patient", label: "Patient", icon: <Stack size={20} /> },
      { href: "/medical-history", label: "Medical History", icon: <ChartPie size={20} /> },
    ],
    hospital_authority: [
      { href: "/doctor", label: "Doctor", icon: <PresentationChart size={20} /> },
      { href: "/hospital", label: "Hospital", icon: <Lifebuoy size={20} /> },
    ],
    donor: [
      { href: "/donor", label: "Donor", icon: <Users size={20} /> },
      { href: "/ambulance", label: "Ambulance", icon: <CheckSquare size={20} /> },
    ],
    ambulance: [
      { href: "/ambulance-history", label: "Ambulance History", icon: <ChartPie size={20} /> },
    ],
  };

  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  return (

    <>
      <button 
        className="md:hidden p-2 fixed top-2 w-12 text-xl left-4 z-50 bg-blue-600 text-white rounded" 
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#3E8CFF] text-white transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform z-40`}>
        <div className="h-16 flex items-center justify-center shadow-md">
          <h1 className="text-2xl font-bold z-10">Dashboard</h1>
          {/* <List className='ml-5' size={32} /> */}
          {/* <TextOutdent size={32} /> */}
          <X className='ml-5' size={32} />
        </div>
        <nav className="mt-5">
          <ul>
          {defaultLinks.map((link, index) => (
            <li key={index}>
              <Link className="flex justify-start items-center hover:bg-[#151E66] px-2 py-1" href={link.href}>
                <p className="ml-2">{link.icon}</p>
                <p className="block py-2.5 px-4">{link.label}</p>
              </Link>
            </li>
          ))}
            {roleLinks[role]?.map((link, index) => (
              <li key={index}>
                <Link className="flex justify-start items-center hover:bg-[#1946DA] px-2 py-1" href={link.href} onClick={closeMobileSidebar}>
                  <p className="ml-2">{link.icon}</p>
                  <p className="block py-2.5 px-4">{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={closeMobileSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
