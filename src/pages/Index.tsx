
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';
import NowPlaying from '@/components/NowPlaying';
import PlaylistView from '@/components/PlaylistView';
import { playlists, songs } from '@/lib/data';
import { Home, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(playlists[0]?.id || null);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [view, setView] = useState<'playlist' | 'now-playing'>('playlist');
  
  // Find the selected playlist
  const selectedPlaylist = playlists.find(p => p.id === selectedPlaylistId) || null;
  
  // Find the current song
  const currentSong = currentSongId 
    ? songs.find(s => s.id === currentSongId) || null
    : selectedPlaylist?.songs[0] || null;
  
  // Mobile navigation
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  // Handle selecting a playlist
  const handleSelectPlaylist = (id: string) => {
    setSelectedPlaylistId(id);
    setView('playlist');
  };
  
  // Handle playing a song
  const handlePlaySong = (id: string) => {
    setCurrentSongId(id);
    setIsPlaying(true);
  };
  
  // Handle toggling play/pause
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Handle next song
  const handleNextSong = () => {
    if (!selectedPlaylist || !currentSongId) return;
    
    const currentIndex = selectedPlaylist.songs.findIndex(s => s.id === currentSongId);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % selectedPlaylist.songs.length;
    setCurrentSongId(selectedPlaylist.songs[nextIndex].id);
  };
  
  // Handle previous song
  const handlePreviousSong = () => {
    if (!selectedPlaylist || !currentSongId) return;
    
    const currentIndex = selectedPlaylist.songs.findIndex(s => s.id === currentSongId);
    if (currentIndex === -1) return;
    
    const prevIndex = (currentIndex - 1 + selectedPlaylist.songs.length) % selectedPlaylist.songs.length;
    setCurrentSongId(selectedPlaylist.songs[prevIndex].id);
  };
  
  // Auto-select the first song when a playlist is selected
  useEffect(() => {
    if (selectedPlaylist && !currentSongId && selectedPlaylist.songs.length > 0) {
      setCurrentSongId(selectedPlaylist.songs[0].id);
    }
  }, [selectedPlaylist, currentSongId]);
  
  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop */}
        <Sidebar
          playlists={playlists}
          selectedPlaylist={selectedPlaylistId}
          onSelectPlaylist={handleSelectPlaylist}
        />
        
        {/* Mobile Navigation */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-sidebar p-2 border-t border-border z-20 glass">
          <div className="flex justify-around">
            <a href="#" className="flex flex-col items-center p-2">
              <Home size={22} />
              <span className="text-xs mt-1">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center p-2">
              <Search size={22} />
              <span className="text-xs mt-1">Search</span>
            </a>
            <a href="#" className="flex flex-col items-center p-2">
              <Library size={22} />
              <span className="text-xs mt-1">Library</span>
            </a>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-32">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 sticky top-0 z-10 bg-background/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-black/20 text-white">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 rounded-full bg-black/20 text-white">
                <ChevronRight size={18} />
              </button>
            </div>
            
            {/* View Switcher - only if a song is playing */}
            {currentSong && (
              <div className="bg-secondary/40 rounded-full p-1">
                <button 
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${view === 'playlist' ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setView('playlist')}
                >
                  Playlist
                </button>
                <button 
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${view === 'now-playing' ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setView('now-playing')}
                >
                  Now Playing
                </button>
              </div>
            )}
            
            <div className="w-8"></div> {/* Placeholder for balance */}
          </div>
          
          {/* Content */}
          <div className="p-4">
            {view === 'playlist' && selectedPlaylist ? (
              <PlaylistView 
                playlist={selectedPlaylist}
                onPlaySong={handlePlaySong}
                currentSongId={currentSongId || undefined}
              />
            ) : view === 'now-playing' && currentSong ? (
              <NowPlaying song={currentSong} />
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-muted-foreground">Select a playlist to start listening</p>
              </div>
            )}
          </div>
        </main>
      </div>
      
      {/* Player */}
      {currentSong && (
        <Player 
          currentSong={currentSong}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onNext={handleNextSong}
          onPrevious={handlePreviousSong}
        />
      )}
    </div>
  );
};

export default Index;
