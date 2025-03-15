
import React from 'react';
import { cn } from '@/lib/utils';
import AlbumArt from './AlbumArt';
import { Song } from '@/lib/data';
import { Heart, MoreHorizontal } from 'lucide-react';

interface NowPlayingProps {
  song: Song;
  className?: string;
}

const NowPlaying: React.FC<NowPlayingProps> = ({
  song,
  className,
}) => {
  const [liked, setLiked] = React.useState(song.liked);
  
  return (
    <div className={cn(
      'flex flex-col items-center p-8 max-w-2xl mx-auto animate-slide-up',
      className
    )}>
      <div className="mb-8 mt-4">
        <AlbumArt 
          src={song.cover} 
          alt={song.title} 
          size="xl"
          isPlaying={true}
          className="shadow-xl"
        />
      </div>
      
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{song.title}</h2>
          <p className="text-muted-foreground">{song.artist}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setLiked(!liked)}
            className={cn(
              "p-2 rounded-full transition-colors",
              liked ? "text-primary" : "text-foreground/60 hover:text-foreground/80"
            )}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
          </button>
          
          <button className="p-2 rounded-full text-foreground/60 hover:text-foreground/80 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
