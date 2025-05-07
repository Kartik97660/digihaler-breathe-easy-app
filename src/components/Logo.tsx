
import React from 'react';
import { useTheme } from './ThemeProvider';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const { theme } = useTheme();
  
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-24',
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]}`}>
      <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        {/* Outer circle */}
        <div className={`absolute inset-0 rounded-full 
          ${theme === 'puffy' ? 'bg-gradient-to-br from-puffy-primary to-blue-400' : 'bg-gradient-to-br from-zeffo-primary to-zeffo-secondary'}`}>
        </div>
        
        {/* Inner circle */}
        <div className={`absolute inset-[15%] rounded-full 
          ${theme === 'puffy' 
            ? 'bg-white shadow-inner' 
            : 'bg-zeffo-background shadow-inner border border-zeffo-primary/30'}`}>
        </div>
        
        {/* Inhaler shape */}
        <div className={`absolute h-[60%] w-[25%] bottom-[20%] left-[37.5%] rounded-t-full
          ${theme === 'puffy' 
            ? 'bg-puffy-accent' 
            : 'bg-zeffo-accent'}`}>
        </div>
        
        {/* Mouthpiece */}
        <div className={`absolute h-[15%] w-[40%] rounded-full top-[25%] left-[30%]
          ${theme === 'puffy' 
            ? 'bg-puffy-primary/80' 
            : 'bg-zeffo-primary/80'}`}>
        </div>
      </div>
      
      <div className={`ml-2 font-bold text-xl ${theme === 'puffy' ? 'font-rounded' : 'font-display'}`}>
        <span className={theme === 'puffy' ? 'text-puffy-primary' : 'text-zeffo-primary'}>Digi</span>
        <span>haler</span>
      </div>
    </div>
  );
};

export default Logo;
