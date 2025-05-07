
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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
        <Logo size="lg" />
        
        <div className="w-full max-w-md mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center font-rounded text-puffy-primary">
            Puffy Mode
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Are parents currently using it or the child?
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-md
                bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-puffy-primary/30"
              onClick={handleParentResponse}
            >
              <div className="font-bold font-rounded">Parent</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-md
                bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-puffy-primary/30"
              onClick={handleParentResponse}
            >
              <div className="font-bold font-rounded">Child</div>
            </motion.div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={() => setShowParentQuestion(false)}
              className="puffy-button"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="pt-8 pb-12">
        <Logo size="lg" />
      </div>
      
      <div className="w-full max-w-md space-y-8 px-4">
        {/* Puffy Mode Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-50 rounded-3xl p-6 shadow-md overflow-hidden"
          onClick={() => handleSelectMode('puffy')}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold font-rounded text-puffy-primary mb-2">Puffy Mode</h2>
              <p className="text-gray-500">For children</p>
            </div>
          </div>
          <Button className="puffy-button w-full mt-6">
            Select
          </Button>
        </motion.div>
        
        {/* Zeffo Mode Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-zeffo-background rounded-3xl p-6 shadow-md overflow-hidden"
          onClick={() => handleSelectMode('zeffo')}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold font-display text-zeffo-primary mb-2">Zeffo Mode</h2>
              <p className="text-gray-400">For age 16+</p>
            </div>
          </div>
          <Button className="zeffo-button w-full mt-6">
            Select
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModeSelection;
