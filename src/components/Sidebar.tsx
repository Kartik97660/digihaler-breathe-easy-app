
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import { Home, Info, ShoppingCart, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onSignOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSignOut }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isPuffy = theme === 'puffy';
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', isActive: true },
    { icon: <Info size={20} />, label: 'About Asthma', isActive: false },
    { icon: <ShoppingCart size={20} />, label: 'Buy', isActive: false },
  ];

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button 
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 rounded-full ${isPuffy 
          ? 'bg-puffy-primary text-white' 
          : 'bg-zeffo-primary text-white'}`}
      >
        <div className="w-5 h-5 relative flex flex-col justify-center items-center">
          <span className={`block w-full h-0.5 absolute transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'} ${isPuffy ? 'bg-white' : 'bg-white'}`}></span>
          <span className={`block w-full h-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} ${isPuffy ? 'bg-white' : 'bg-white'}`}></span>
          <span className={`block w-full h-0.5 absolute transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'} ${isPuffy ? 'bg-white' : 'bg-white'}`}></span>
        </div>
      </button>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 ${isPuffy 
          ? 'bg-white shadow-lg' 
          : 'bg-zeffo-background border-r border-zeffo-muted'}`}
      >
        <div className="h-full flex flex-col">
          {/* Logo area */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
            <div className="text-3xl mr-2 font-bold">
              <span className={isPuffy ? 'text-puffy-primary' : 'text-zeffo-primary'}>Di</span>
              <span className={isPuffy ? 'text-gray-800' : 'text-white'}>haler</span>
            </div>
          </div>
          
          {/* Menu items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      item.isActive 
                        ? (isPuffy ? 'bg-puffy-secondary text-puffy-primary' : 'bg-zeffo-muted text-zeffo-primary') 
                        : (isPuffy ? 'hover:bg-gray-100' : 'hover:bg-zeffo-muted/60')
                    }`}
                  >
                    <span className={`${item.isActive 
                      ? (isPuffy ? 'text-puffy-primary' : 'text-zeffo-primary') 
                      : (isPuffy ? 'text-gray-500' : 'text-gray-400')}`}>
                      {item.icon}
                    </span>
                    <span className={`ml-3 ${
                      item.isActive 
                        ? (isPuffy ? 'font-medium' : 'font-medium') 
                        : ''}`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Sign out button */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={onSignOut}
              variant="outline"
              className={`w-full flex items-center justify-center ${isPuffy 
                ? 'border-gray-300 hover:bg-gray-100 text-gray-700' 
                : 'border-gray-700 hover:bg-zeffo-muted text-gray-300'}`}
            >
              <LogOut size={18} className="mr-2" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
