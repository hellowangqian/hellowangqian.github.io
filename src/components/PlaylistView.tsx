
import React from 'react';
import { cn } from '@/lib/utils';
import { Playlist, formatTime } from '@/lib/data';
import { Heart, Play, MoreHorizontal, Clock } from 'lucide-react';
import AlbumArt from './AlbumArt';

interface PlaylistViewProps {
  playlist: Playlist;
  onPlaySong: (songId: string) => void;
  currentSongId?: string;
  className?: string;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({
  playlist,
  onPlaySong,
  currentSongId,
  className,
}) => {
  return (
    <div className={cn('flex flex-col animate-slide-up', className)}>
      {/* Playlist Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 p-6">
        <div className="w-48 h-48 rounded-md overflow-hidden shadow-lg">
          <img 
            src={playlist.cover} 
            alt={playlist.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <p className="text-sm uppercase font-medium">Playlist</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-2">{playlist.name}</h1>
          <p className="text-muted-foreground">{playlist.description}</p>
          <p className="text-sm text-muted-foreground mt-2">{playlist.songs.length} songs</p>
        </div>
      </div>
      
      {/* Play Button */}
      <div className="px-6 mb-6">
        <button 
          className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center h-14 w-14 shadow-lg"
          onClick={() => playlist.songs.length > 0 && onPlaySong(playlist.songs[0].id)}
        >
          <Play size={24} />
        </button>
      </div>
      
      {/* Song List */}
      <div className="px-6">
        <table className="w-full">
          <thead>
            <tr className="text-muted-foreground text-sm border-b border-border">
              <th className="font-medium text-left p-3 w-10">#</th>
              <th className="font-medium text-left p-3">Title</th>
              <th className="font-medium text-left p-3 hidden md:table-cell">Album</th>
              <th className="font-medium text-right p-3 pr-6">
                <Clock size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.songs.map((song, index) => {
              const isPlaying = song.id === currentSongId;
              
              return (
                <tr 
                  key={song.id} 
                  className={cn(
                    "group border-b border-border hover:bg-secondary/40 transition-colors cursor-pointer",
                    isPlaying && "text-primary"
                  )}
                  onClick={() => onPlaySong(song.id)}
                >
                  <td className="p-3 w-10 text-center">
                    <div className="flex items-center justify-center w-6 h-6">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <Play size={16} className="hidden group-hover:block" />
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <AlbumArt 
                        src={song.cover} 
                        alt={song.title} 
                        size="sm" 
                        isPlaying={isPlaying}
                      />
                      <div className="flex flex-col">
                        <span className={cn(
                          "font-medium",
                          isPlaying && "text-primary"
                        )}>
                          {song.title}
                        </span>
                        <span className="text-sm text-muted-foreground">{song.artist}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">
                    <span className="text-muted-foreground">
                      {song.album}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                        <Heart size={16} />
                      </button>
                      <span>{formatTime(song.duration)}</span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistView;
