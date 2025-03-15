
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  liked: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  cover?: string;
  songs: Song[];
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 203,
    cover: 'https://picsum.photos/id/1/300/300',
    liked: true,
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: 'Divide',
    duration: 234,
    cover: 'https://picsum.photos/id/2/300/300',
    liked: false,
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 203,
    cover: 'https://picsum.photos/id/3/300/300',
    liked: true,
  },
  {
    id: '4',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: 174,
    cover: 'https://picsum.photos/id/4/300/300',
    liked: false,
  },
  {
    id: '5',
    title: 'Don\'t Start Now',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: 183,
    cover: 'https://picsum.photos/id/5/300/300',
    liked: true,
  },
  {
    id: '6',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    duration: 194,
    cover: 'https://picsum.photos/id/6/300/300',
    liked: false,
  },
  {
    id: '7',
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    album: 'Uptown Special',
    duration: 270,
    cover: 'https://picsum.photos/id/7/300/300',
    liked: true,
  },
  {
    id: '8',
    title: 'Shallow',
    artist: 'Lady Gaga, Bradley Cooper',
    album: 'A Star Is Born',
    duration: 216,
    cover: 'https://picsum.photos/id/8/300/300',
    liked: false,
  },
  {
    id: '9',
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    album: 'Divinely Uninspired to a Hellish Extent',
    duration: 182,
    cover: 'https://picsum.photos/id/9/300/300',
    liked: true,
  },
  {
    id: '10',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: 141,
    cover: 'https://picsum.photos/id/10/300/300',
    liked: false,
  },
];

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music.',
    cover: 'https://picsum.photos/id/20/300/300',
    songs: [songs[0], songs[2], songs[4], songs[6], songs[8]],
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relaxing tunes for your day.',
    cover: 'https://picsum.photos/id/21/300/300',
    songs: [songs[1], songs[3], songs[7], songs[9]],
  },
  {
    id: '3',
    name: 'Workout Mix',
    description: 'High energy tracks to power your workout.',
    cover: 'https://picsum.photos/id/22/300/300',
    songs: [songs[0], songs[1], songs[4], songs[6]],
  },
  {
    id: '4',
    name: 'Focus',
    description: 'Music to help you concentrate.',
    cover: 'https://picsum.photos/id/23/300/300',
    songs: [songs[2], songs[5], songs[8]],
  },
  {
    id: '5',
    name: 'Throwbacks',
    description: 'Classic hits from the past.',
    cover: 'https://picsum.photos/id/24/300/300',
    songs: [songs[3], songs[6], songs[9]],
  },
];

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
