import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
const Dashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
       
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow overflow-y-auto bg-green-600 text-white">
          <div className="px-4 pt-5">
          <Image
                  src="/logo.png"
                  height={60}
                  width={200}
                  alt="Ahaar logo"
                />
          </div>
          
          <nav className="flex-1 px-2 mt-5">
            <ul className="space-y-1">
              <li>
                <a
                  href="/dashboard/dashboard"
                  className="block px-4 py-4 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
                >
                  DASHBOARD
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/pantry"
                  className="block px-4 py-4 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
                >
                  PANTRY
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/receiptify"
                  className="block px-4 py-4 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
                >
                  RECEIPT
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/inventory"
                  className="block px-4 py-4 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
                >
                  INVENTORY
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/progress"
                  className="block px-4 py-4 text-sm font-medium text-white hover:bg-gray-700 rounded-lg"
                >
                  PROGRESS TRACKER
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto bg-gray-100">
        <Navbar/>
        <main className="flex-1 p-6">
          {children}
        </main>
        
      </div>
      
    </div>
  );
};

export default Dashboard;