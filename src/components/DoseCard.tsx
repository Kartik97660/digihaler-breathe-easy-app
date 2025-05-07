
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Progress } from "@/components/ui/progress";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface DoseCardProps {
  title: string;
  current: number;
  total: number;
  type: 'taken' | 'remaining';
}

const DoseCard: React.FC<DoseCardProps> = ({ title, current, total, type }) => {
  const { theme } = useTheme();
  const isPuffy = theme === 'puffy';
  
  const percentage = Math.round((current / total) * 100);
  
  // Select colors based on theme and type
  const getColors = () => {
    if (isPuffy) {
      return type === 'taken' 
        ? { primary: '#4A9DFF', secondary: '#D3E4FD', text: '#333333' } 
        : { primary: '#F97FAA', secondary: '#FFDEE2', text: '#333333' };
    } else {
      return type === 'taken'
        ? { primary: '#0EA5E9', secondary: '#0c4a6e', text: '#FFFFFF' }
        : { primary: '#8B5CF6', secondary: '#4c1d95', text: '#FFFFFF' };
    }
  };
  
  const colors = getColors();
  
  return (
    <div className={`rounded-xl p-5 ${isPuffy 
      ? 'bg-white shadow-md' 
      : 'bg-zeffo-muted border border-zeffo-muted'}`}>
      
      <h3 className={`text-lg font-medium mb-3 ${isPuffy ? 'font-rounded' : 'font-display'}`}>
        {title}
      </h3>
      
      <div className="flex items-center">
        {/* For smaller screens - linear progress bar */}
        <div className="md:hidden w-full">
          <Progress 
            value={percentage} 
            className={`h-3 ${isPuffy ? 'bg-blue-100' : 'bg-zeffo-background'}`}
            indicatorClassName={`${type === 'taken' 
              ? (isPuffy ? 'bg-puffy-primary' : 'bg-zeffo-primary') 
              : (isPuffy ? 'bg-puffy-accent' : 'bg-zeffo-secondary')}`} 
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>{current}</span>
            <span>of {total}</span>
          </div>
        </div>
        
        {/* For medium screens and up - circular progress */}
        <div className="hidden md:block w-20 h-20">
          <CircularProgressbar
            value={percentage}
            text={`${current}`}
            styles={buildStyles({
              textSize: '2rem',
              pathColor: colors.primary,
              textColor: colors.text,
              trailColor: colors.secondary,
            })}
          />
        </div>
        
        <div className="hidden md:block ml-4">
          <p className={`${isPuffy ? 'text-gray-600' : 'text-gray-300'} text-sm`}>
            of {total} total
          </p>
          <p className={`text-lg font-medium ${isPuffy ? '' : 'text-white'}`}>
            {percentage}% {type === 'taken' ? 'Used' : 'Available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoseCard;
