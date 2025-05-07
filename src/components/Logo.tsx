
import React from 'react';
import { useTheme } from './ThemeProvider';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const { theme } = useTheme();
  
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${theme === 'puffy' ? 'font-rounded' : 'font-display'}`}>
      <span className={theme === 'puffy' ? 'text-puffy-primary' : 'text-zeffo-primary'}>Digi</span>
      <span className={theme === 'puffy' ? 'text-black' : 'text-white'}>haler</span>
    </div>
  );
};

export default Logo;
