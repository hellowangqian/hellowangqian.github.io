
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, Search, Library, PlusCircle, 
  Heart, Download
} from 'lucide-react';
import { Playlist } from '@/lib/data';

interface SidebarProps {
  playlists: Playlist[];
  selectedPlaylist: string | null;
  onSelectPlaylist: (id: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  playlists,
  selectedPlaylist,
  onSelectPlaylist,
  className,
}) => {
  return (
    <aside className={cn(
      'w-64 h-full bg-sidebar border-r border-border flex flex-col p-2 hidden sm:flex',
      className
    )}>
      <div className="flex flex-col gap-1 p-2">
        <h1 className="text-xl font-semibold mb-6">Soundwave</h1>
        
        <a href="#" className="nav-item">
          <Home size={18} />
          <span>Home</span>
        </a>
        
        <a href="#" className="nav-item">
          <Search size={18} />
          <span>Search</span>
        </a>
        
        <a href="#" className="nav-item">
          <Library size={18} />
          <span>Your Library</span>
        </a>
      </div>
      
      <div className="mt-6 p-2">
        <div className="flex items-center justify-between mb-4">
          <button className="nav-item py-1">
            <PlusCircle size={18} />
            <span>Create Playlist</span>
          </button>
        </div>
        
        <a href="#" className="nav-item mb-2">
          <Heart size={18} />
          <span>Liked Songs</span>
        </a>
        
        <a href="#" className="nav-item">
          <Download size={18} />
          <span>Downloaded</span>
        </a>
      </div>
      
      <div className="h-px bg-border my-4"></div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="space-y-1 p-2">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              className={cn(
                'playlist-item w-full text-left',
                selectedPlaylist === playlist.id && 'bg-secondary'
              )}
              onClick={() => onSelectPlaylist(playlist.id)}
            >
              {playlist.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
