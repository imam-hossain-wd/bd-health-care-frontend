'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardLayoutComponents/DashboardHeader';
import { DashboardFooter } from '@/components/dashboard/DashboardLayoutComponents/DashboardFooter';
import SidebarComponent from '@/components/dashboard/DashboardLayoutComponents/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Example role; you should replace this with the actual role fetched from your authentication or context
  const role = 'super_admin'; 

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
