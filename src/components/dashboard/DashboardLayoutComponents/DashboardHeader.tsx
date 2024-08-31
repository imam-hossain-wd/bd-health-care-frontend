
  
  const DashboardHeader = ({ setSidebarOpen }:any) => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onClick={() => setSidebarOpen((prev: any) => !prev)}
        >
          <span className="sr-only">Open sidebar</span>
          {/* Your hamburger icon */}
        </button>
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-4">
          {/* User Profile, Notifications, etc. */}
        </div>
      </header>
    );
  };
  
  export default DashboardHeader;
  