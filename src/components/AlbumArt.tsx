
import React from 'react';
import { cn } from '@/lib/utils';

interface AlbumArtProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isPlaying?: boolean;
}

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-48 w-48 md:h-64 md:w-64',
  xl: 'h-64 w-64 md:h-80 md:w-80',
};

const AlbumArt: React.FC<AlbumArtProps> = ({
  src,
  alt,
  size = 'md',
  className,
  isPlaying = false,
}) => {
  return (
    <div 
      className={cn(
        'relative rounded-md overflow-hidden shadow-lg transition-transform duration-300',
        sizeClasses[size],
        isPlaying && 'animate-pulse-light',
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
    </div>
  );
};

export default AlbumArt;
