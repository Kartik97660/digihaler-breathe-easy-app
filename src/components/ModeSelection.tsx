
import React from 'react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface ModeSelectionProps {
  onModeSelect: () => void;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onModeSelect }) => {
  const { setTheme } = useTheme();
  
  const handleSelectMode = (mode: 'puffy' | 'zeffo') => {
    setTheme(mode);
    onModeSelect();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top half - Puffy Mode */}
      <div 
        className="flex-1 bg-white flex flex-col items-center justify-center p-6 cursor-pointer"
        onClick={() => handleSelectMode('puffy')}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="text-5xl font-rounded">😊</div>
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold font-rounded text-center">Puffy Mode</h2>
          <p className="text-gray-500 mt-2 text-sm">For children</p>
          <Button className="puffy-button mt-4">Select</Button>
        </motion.div>
      </div>
      
      {/* Divider with logo */}
      <div className="h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
          <Logo size="sm" />
        </div>
      </div>
      
      {/* Bottom half - Zeffo Mode */}
      <div 
        className="flex-1 bg-zeffo-background flex flex-col items-center justify-center p-6 cursor-pointer"
        onClick={() => handleSelectMode('zeffo')}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-zeffo-primary to-zeffo-secondary rounded-full flex items-center justify-center shadow-lg">
            <div className="w-24 h-24 bg-zeffo-background rounded-full flex items-center justify-center border border-zeffo-primary/30">
              <div className="text-4xl">👤</div>
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-bold font-display text-white text-center">Zeffo Mode</h2>
          <p className="text-gray-400 mt-2 text-sm">For age 16+</p>
          <Button className="zeffo-button mt-4">Select</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModeSelection;
