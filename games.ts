import type { Game, TeamMember } from '@/types';

export const games: Game[] = [
  {
    id: 'cyber-odyssey',
    title: 'Cyber Odyssey',
    description: 'Neon-drenched districts, high-stakes contracts, and a soundtrack that hits.',
    longDescription: 'Immerse yourself in a sprawling cyberpunk metropolis where every shadow hides a secret. Take on high-risk contracts, upgrade your augmentations, and navigate the treacherous underworld of 2087 Neo-Tokyo. With branching narratives and multiple endings, every choice shapes your destiny.',
    price: 29.99,
    category: 'New Release',
    image: '/images/cyber_odyssey.jpg',
    rating: 4.8,
    tags: ['Cyberpunk', 'Action', 'RPG', 'Open World'],
    releaseDate: '2024-01-15',
    developer: 'SXD Studios',
    features: ['Ray Tracing', 'DLSS Support', 'Controller Support', 'Cloud Saves']
  },
  {
    id: 'shadow-veil',
    title: 'Shadow Veil',
    description: 'Atmospheric stealth where light is your weapon and silence is your shield.',
    longDescription: 'In the realm of eternal twilight, master the art of shadows. Shadow Veil combines gothic horror with tactical stealth gameplay. Use light manipulation, sound distractions, and supernatural abilities to outwit your enemies in this haunting adventure.',
    price: 24.99,
    category: 'Top Rated',
    image: '/images/shadow_veil.jpg',
    rating: 4.9,
    tags: ['Stealth', 'Horror', 'Atmospheric', 'Single Player'],
    releaseDate: '2023-10-31',
    developer: 'Dark Arts Studio',
    features: ['4K Support', 'HDR', 'Achievements', 'Trading Cards']
  },
  {
    id: 'starfield-renegade',
    title: 'Starfield Renegade',
    description: 'Open-world space combat with faction warfare, crafting, and a living economy.',
    longDescription: 'Forge your legend among the stars. Starfield Renegade offers unprecedented freedom in a procedurally generated galaxy. Join factions, build your fleet, trade across systems, and engage in epic space battles. The universe is yours to conquer.',
    price: 39.99,
    category: 'Upcoming',
    image: '/images/starfield_renegade.jpg',
    rating: 0,
    tags: ['Space', 'Simulation', 'Open World', 'Multiplayer'],
    releaseDate: '2024-06-01',
    developer: 'SXD Studios',
    features: ['Cross-Platform', 'VR Support', 'Mod Support', 'Dedicated Servers']
  },
  {
    id: 'neon-nexus',
    title: 'Neon Nexus',
    description: 'A tactical runner where every route is a puzzle and every second counts.',
    longDescription: 'Speed through neon-lit cityscapes in this adrenaline-pumping tactical runner. Plan your route, execute perfect parkour moves, and outrun the corporate enforcers. With daily challenges and leaderboards, competition never sleeps.',
    price: 19.99,
    category: 'Latest Release',
    image: '/images/neon_nexus.jpg',
    rating: 4.6,
    tags: ['Runner', 'Parkour', 'Fast-Paced', 'Competitive'],
    releaseDate: '2024-02-01',
    developer: 'Velocity Games',
    features: ['Leaderboards', 'Speedrun Mode', 'Level Editor', 'Steam Workshop']
  },
  {
    id: 'echoes-of-war',
    title: 'Echoes of War',
    description: 'Squad-based tactics across dynamic battlefields. Your choices echo across campaigns.',
    longDescription: 'Lead your squad through the most intense conflicts in modern gaming history. Every decision has consequences that ripple through the entire campaign. Customize your loadouts, develop your soldiers, and write your own war story.',
    price: 34.99,
    category: 'Most Played',
    image: '/images/echoes_of_war.jpg',
    rating: 4.7,
    tags: ['Tactical', 'Military', 'Strategy', 'Co-op'],
    releaseDate: '2023-08-15',
    developer: 'Tactical Forge',
    features: ['4-Player Co-op', 'PvP Mode', 'Season Pass', 'Battle Royale']
  },
  {
    id: 'chrono-shift',
    title: 'Chrono Shift',
    description: 'Time-bending platforming with precision controls and a haunting score.',
    longDescription: 'Manipulate time itself in this mind-bending platformer. Rewind mistakes, freeze enemies, and create time clones to solve increasingly complex puzzles. With a soundtrack that adapts to your actions, every moment is uniquely yours.',
    price: 22.99,
    category: 'Recommended',
    image: '/images/chrono_shift.jpg',
    rating: 4.8,
    tags: ['Platformer', 'Puzzle', 'Indie', 'Time Manipulation'],
    releaseDate: '2023-11-20',
    developer: 'Chrono Works',
    features: ['Speedrun Mode', 'Ghost Replays', 'Level Editor', 'Full Controller']
  },
  {
    id: 'skybound',
    title: 'Skybound',
    description: 'Soar through collapsing skies. Easy to pick up, hard to put down—completely free.',
    longDescription: 'Take to the skies in this breathtaking aerial adventure. Pilot customizable airships through floating islands, ancient ruins, and treacherous storms. With regular content updates and a vibrant community, the adventure never ends.',
    price: 'Free',
    category: 'Free',
    image: '/images/skybound.jpg',
    rating: 4.5,
    tags: ['Free to Play', 'Adventure', 'Exploration', 'Multiplayer'],
    releaseDate: '2023-05-01',
    developer: 'SXD Studios',
    features: ['Free Updates', 'Cosmetic Shop', 'Guild System', 'Events']
  },
  {
    id: 'aether-chronicles',
    title: 'Aether Chronicles',
    description: 'A hand-drawn RPG with real-time co-op. On sale for a limited time.',
    longDescription: 'Journey through a beautifully hand-drawn world in this story-driven RPG. Team up with friends in seamless co-op combat, craft legendary gear, and uncover the mysteries of the Aether. Every playthrough offers new discoveries.',
    price: 14.99,
    originalPrice: 29.99,
    category: 'Specials',
    image: '/images/aether_chronicles.jpg',
    rating: 4.9,
    tags: ['RPG', 'Co-op', 'Hand-Drawn', 'Story Rich'],
    releaseDate: '2023-09-10',
    developer: 'Aether Studio',
    features: ['Online Co-op', 'Local Co-op', 'New Game+', 'DLC Available']
  },
  {
    id: 'ironclad',
    title: 'Ironclad',
    description: 'New maps, new modes, and a rebuilt netcode—now smoother than ever.',
    longDescription: 'Pilot massive mechanized warriors in the ultimate mech combat experience. With fully customizable loadouts, destructible environments, and intense 12v12 battles, Ironclad delivers the mech fantasy you have been waiting for.',
    price: 27.99,
    category: 'Updates',
    image: '/images/ironclad.jpg',
    rating: 4.4,
    tags: ['Mech', 'Action', 'Multiplayer', 'PvP'],
    releaseDate: '2023-07-22',
    developer: 'Mech Forge',
    features: ['12v12 Battles', 'Mech Customization', 'Ranked Mode', 'Esports Ready']
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sulfux Darkon',
    role: 'Creative Director & Lead Designer',
    bio: 'Visionary game designer with over 15 years of experience crafting immersive worlds. Previously worked on award-winning titles at major studios before founding SXD Game Center.',
    socials: {
      twitter: 'https://twitter.com/sulfux',
      github: 'https://github.com/sulfux',
      discord: 'https://discord.gg/sulfux'
    }
  },
  {
    name: 'DarkerYT',
    role: 'Technical Director & Lead Developer',
    bio: 'Full-stack developer and engine specialist passionate about pushing technical boundaries. Expert in graphics programming and multiplayer architecture.',
    socials: {
      twitter: 'https://twitter.com/darkeryt',
      github: 'https://github.com/darkeryt',
      linkedin: 'https://linkedin.com/in/darkeryt',
      discord: 'https://discord.gg/darkeryt'
    }
  }
];

export const categories = [
  'All',
  'Free',
  'Action',
  'Adventure',
  'RPG',
  'Horror',
  'Strategy',
  'New Release',
  'Top Rated',
  'Specials'
] as const;

export const navItems = [
  { label: 'Store', path: '/' },
  { label: 'Library', path: '/library' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];
