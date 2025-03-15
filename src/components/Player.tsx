
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Play, Pause, SkipBack, SkipForward, 
  Repeat, Repeat1, Shuffle, Heart, 
  ListMusic
} from 'lucide-react';
import AlbumArt from './AlbumArt';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import { Song } from '@/lib/data';

interface PlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  className?: string;
}

const Player: React.FC<PlayerProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrevious,
  className,
}) => {
  const [volume, setVolume] = useState(0.7);
  const [repeat, setRepeat] = useState<'off' | 'all' | 'one'>('off');
  const [shuffle, setShuffle] = useState(false);
  const [progress, setProgress] = useState(currentSong ? 0 : 0);
  const [liked, setLiked] = useState(currentSong?.liked || false);
  
  const handleRepeatClick = () => {
    if (repeat === 'off') setRepeat('all');
    else if (repeat === 'all') setRepeat('one');
    else setRepeat('off');
  };

  const handleShuffleClick = () => {
    setShuffle(!shuffle);
  };
  
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  if (!currentSong) return null;

  return (
    <div className={cn(
      'fixed bottom-0 left-0 right-0 bg-player p-3 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 z-10 glass',
      className
    )}>
      {/* Song Info */}
      <div className="flex items-center gap-3 w-full sm:w-1/3">
        <AlbumArt 
          src={currentSong.cover} 
          alt={currentSong.title} 
          size="sm"
        />
        <div className="flex flex-col">
          <span className="font-medium truncate">{currentSong.title}</span>
          <span className="text-sm text-muted-foreground truncate">{currentSong.artist}</span>
        </div>
        <button 
          onClick={handleLikeClick}
          className={cn(
            "player-control ml-auto",
            liked ? "text-primary" : "text-foreground/60 hover:text-foreground/80"
          )}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-1 w-full sm:w-1/3">
        <div className="flex items-center gap-2">
          <button 
            onClick={handleShuffleClick}
            className={cn(
              "player-control", 
              shuffle ? "text-primary" : "text-foreground/60"
            )}
          >
            <Shuffle size={18} />
          </button>
          
          <button onClick={onPrevious} className="player-control">
            <SkipBack size={18} />
          </button>
          
          <button 
            onClick={onTogglePlay} 
            className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center h-10 w-10"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button onClick={onNext} className="player-control">
            <SkipForward size={18} />
          </button>
          
          <button 
            onClick={handleRepeatClick}
            className={cn(
              "player-control", 
              repeat !== 'off' ? "text-primary" : "text-foreground/60"
            )}
          >
            {repeat === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
          </button>
        </div>
        
        <ProgressBar 
          current={progress} 
          total={currentSong.duration} 
          onChange={setProgress}
          className="w-full max-w-md"
        />
      </div>

      {/* Volume & Extra Controls */}
      <div className="flex items-center gap-3 w-full sm:w-1/3 justify-end">
        <button className="player-control hidden sm:flex">
          <ListMusic size={18} />
        </button>
        
        <VolumeControl 
          volume={volume} 
          onChange={setVolume}
          className="hidden sm:flex"
        />
      </div>
    </div>
  );
};

export default Player;
