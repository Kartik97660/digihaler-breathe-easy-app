
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import DoseCard from './DoseCard';
import Sidebar from './Sidebar';
import Logo from './Logo';

interface DashboardProps {
  onSignOut: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSignOut }) => {
  const { theme } = useTheme();
  const isPuffy = theme === 'puffy';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };
  
  return (
    <div className={`min-h-screen flex ${isPuffy ? 'bg-gray-50' : 'bg-zeffo-background'}`}>
      {/* Sidebar */}
      <Sidebar onSignOut={onSignOut} onToggle={handleSidebarToggle} />
      
      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 ml-0 md:ml-64">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="md:hidden">
              <Logo size="sm" />
            </div>
            {!isSidebarOpen && (
              <h1 className={`text-2xl font-bold ${isPuffy ? 'font-rounded' : 'font-display'}`}>
                Digihaler
              </h1>
            )}
            <div className={`px-3 py-1 rounded-full text-sm ${isPuffy 
              ? 'bg-puffy-secondary text-puffy-primary' 
              : 'bg-zeffo-muted text-zeffo-primary'}`}>
              {isPuffy ? 'Puffy Mode' : 'Zeffo Mode'}
            </div>
          </div>
          
          {/* Greeting */}
          <div className={`mb-8 ${isPuffy ? 'font-rounded' : 'font-display'}`}>
            <h2 className="text-xl font-medium">Good afternoon!</h2>
            <p className={`${isPuffy ? 'text-gray-600' : 'text-gray-400'}`}>
              Here's your asthma medication overview
            </p>
          </div>
          
          {/* Dose cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DoseCard
              title="Doses Taken Today"
              current={2}
              total={4}
              type="taken"
            />
            
            <DoseCard
              title="Doses Remaining"
              current={28}
              total={30}
              type="remaining"
            />
          </div>
          
          {/* Last dose info */}
          <div className={`mt-8 p-5 rounded-xl ${isPuffy 
            ? 'bg-white shadow-md' 
            : 'bg-zeffo-muted border border-zeffo-muted'}`}>
            <h3 className={`text-lg font-medium mb-3 ${isPuffy ? 'font-rounded' : 'font-display'}`}>
              Last Dose
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <p className={`${isPuffy ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
                  2 hours ago
                </p>
                <p className={`text-lg ${isPuffy ? 'font-medium' : 'font-medium text-white'}`}>
                  11:32 AM
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${isPuffy 
                ? 'bg-green-100 text-green-800' 
                : 'bg-green-900/30 text-green-400'}`}>
                On Schedule
              </div>
            </div>
          </div>
          
          {/* Next dose reminder */}
          <div className={`mt-6 p-5 rounded-xl ${isPuffy 
            ? 'bg-puffy-secondary border border-puffy-primary/20' 
            : 'bg-zeffo-primary/20 border border-zeffo-primary/40'}`}>
            <div className="flex items-center">
              <div className={`rounded-full w-10 h-10 flex items-center justify-center ${isPuffy 
                ? 'bg-puffy-primary/20' 
                : 'bg-zeffo-primary/30'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isPuffy 
                  ? 'text-puffy-primary' 
                  : 'text-zeffo-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className={`font-medium ${isPuffy ? 'text-puffy-primary' : 'text-zeffo-primary'}`}>
                  Next Dose Due
                </h4>
                <p className={isPuffy ? 'text-gray-700' : 'text-gray-300'}>
                  Today at 7:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
