
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { formatTime } from '@/lib/data';

interface ProgressBarProps {
  current: number;
  total: number;
  onChange?: (value: number) => void;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  onChange,
  className,
}) => {
  const [hovering, setHovering] = useState(false);
  const [localValue, setLocalValue] = useState<number | null>(null);
  
  const progress = ((localValue ?? current) / total) * 100;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalValue(value);
    onChange?.(value);
  };
  
  const handleMouseUp = () => {
    if (localValue !== null) {
      onChange?.(localValue);
      setLocalValue(null);
    }
  };

  return (
    <div 
      className={cn('flex flex-col w-full space-y-1', className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setLocalValue(null);
      }}
    >
      <div className="relative w-full h-1 bg-secondary rounded-full overflow-hidden group">
        <input
          type="range"
          min="0"
          max={total}
          value={localValue ?? current}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="absolute h-full bg-primary transition-all duration-100 rounded-full"
          style={{ width: `${progress}%` }}
        />
        <div 
          className={cn(
            "absolute h-3 w-3 bg-white rounded-full -mt-1 opacity-0 transition-opacity",
            hovering ? "opacity-100" : "opacity-0",
          )}
          style={{ left: `calc(${progress}% - 6px)`, top: "50%" }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatTime(current)}</span>
        <span>{formatTime(total)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
