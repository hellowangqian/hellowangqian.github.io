
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  onChange: (value: number) => void;
  className?: string;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onChange,
  className,
}) => {
  const [previousVolume, setPreviousVolume] = useState(volume);

  const handleVolumeClick = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      onChange(0);
    } else {
      onChange(previousVolume || 0.5);
    }
  };

  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={18} />;
    if (volume < 0.3) return <Volume size={18} />;
    if (volume < 0.7) return <Volume1 size={18} />;
    return <Volume2 size={18} />;
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <button
        onClick={handleVolumeClick}
        className="player-control"
      >
        <VolumeIcon />
      </button>
      <div className="relative w-20 h-1 bg-secondary rounded-full overflow-hidden">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10 volume-slider"
        />
        <div
          className="absolute h-full bg-primary transition-all duration-100 rounded-full"
          style={{ width: `${volume * 100}%` }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;
