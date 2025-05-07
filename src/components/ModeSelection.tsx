
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface ModeSelectionProps {
  onModeSelect: () => void;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onModeSelect }) => {
  const { setTheme } = useTheme();
  const [selectedMode, setSelectedMode] = useState<'puffy' | 'zeffo' | null>(null);
  const [showParentQuestion, setShowParentQuestion] = useState(false);
  
  const handleSelectMode = (mode: 'puffy' | 'zeffo') => {
    setSelectedMode(mode);
    setTheme(mode);
    
    if (mode === 'puffy') {
      setShowParentQuestion(true);
    } else {
      onModeSelect();
    }
  };
  
  const handleParentResponse = () => {
    onModeSelect();
  };
  
  if (showParentQuestion) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${selectedMode === 'puffy' ? 'bg-white' : 'bg-zeffo-background'}`}>
        <Logo size="lg" />
        
        <div className="w-full max-w-md mt-10">
          <h2 className={`text-2xl font-bold mb-6 text-center ${selectedMode === 'puffy' ? 'font-rounded text-puffy-primary' : 'font-display text-zeffo-primary'}`}>
            Puffy Mode
          </h2>
          <p className={`mb-8 text-center ${selectedMode === 'puffy' ? 'text-gray-600' : 'text-gray-300'}`}>
            Are parents currently using it or the child?
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-md
                ${selectedMode === 'puffy' 
                  ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-puffy-primary/30' 
                  : 'bg-gradient-to-br from-zeffo-background to-zeffo-muted border border-zeffo-primary/30'}`}
              onClick={handleParentResponse}
            >
              <div className="text-4xl mb-4">👪</div>
              <div className={`font-bold ${selectedMode === 'puffy' ? 'font-rounded' : 'font-display'}`}>Parent</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-md
                ${selectedMode === 'puffy' 
                  ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-puffy-primary/30' 
                  : 'bg-gradient-to-br from-zeffo-background to-zeffo-muted border border-zeffo-primary/30'}`}
              onClick={handleParentResponse}
            >
              <div className="text-4xl mb-4">👧</div>
              <div className={`font-bold ${selectedMode === 'puffy' ? 'font-rounded' : 'font-display'}`}>Child</div>
            </motion.div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={() => setShowParentQuestion(false)}
              className={selectedMode === 'puffy' ? 'puffy-button' : 'zeffo-button'}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-8 flex justify-center">
        <Logo size="lg" />
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Puffy Mode */}
        <div 
          className="flex-1 bg-white flex flex-col items-center justify-center p-8 cursor-pointer"
          onClick={() => handleSelectMode('puffy')}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-rounded text-puffy-primary">Puffy Mode</h2>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-md">
                <div className="text-2xl">😊</div>
              </div>
            </div>
            <p className="text-gray-500 mb-4 text-sm">For children</p>
            <Button className="puffy-button w-full mt-2">Select</Button>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 mx-8"></div>
        
        {/* Zeffo Mode */}
        <div 
          className="flex-1 bg-zeffo-background flex flex-col items-center justify-center p-8 cursor-pointer"
          onClick={() => handleSelectMode('zeffo')}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md bg-gradient-to-br from-zeffo-muted to-zeffo-background rounded-3xl p-8 shadow-lg border border-zeffo-primary/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-display text-zeffo-primary">Zeffo Mode</h2>
              <div className="w-12 h-12 bg-gradient-to-br from-zeffo-primary to-zeffo-secondary rounded-full flex items-center justify-center shadow-md">
                <div className="text-2xl">👤</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">For age 16+</p>
            <Button className="zeffo-button w-full mt-2">Select</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
