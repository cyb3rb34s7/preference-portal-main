
import { SurveySet } from '../types';

// Mock survey data
export const surveySets: SurveySet[] = [
  {
    id: 'set1',
    name: 'Entertainment Preferences',
    topicBaits: [
      {
        id: 'topic-simple-1',
        style: 'simple',
        title: 'Top Picks This Week'
      },
      {
        id: 'topic-attractive-1',
        style: 'attractive',
        title: '🔥 Trending Now'
      },
      {
        id: 'topic-genz-1',
        style: 'genz',
        title: 'Vibe Check – What\'s Poppin?'
      }
    ],
    contentItems: [
      {
        id: 'content1',
        title: 'Squid Games',
        imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'A South Korean survival drama where contestants face deadly games.',
          attractive: 'A gripping thriller that hooks you with intense visuals and plot twists.',
          genz: 'This show is LIT 🔥 - Korean hunger games but crazier!'
        }
      },
      {
        id: 'content2',
        title: 'Stranger Things',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'A sci-fi series set in the 1980s featuring supernatural events in a small town.',
          attractive: 'Dive into a nostalgic mystery where darkness lurks beneath suburban normality.',
          genz: 'Major 80s throwback vibes with monsters and mind powers - no cap!'
        }
      },
      {
        id: 'content3',
        title: 'Money Heist',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'A Spanish heist crime drama series following a group of robbers.',
          attractive: 'Experience the adrenaline rush of the most elaborate heists ever planned.',
          genz: 'Squad goals! These robbers are straight up savage and low-key geniuses 🧠'
        }
      },
      {
        id: 'content4',
        title: 'The Witcher',
        imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'A fantasy series based on books about a monster hunter with supernatural abilities.',
          attractive: 'Immerse yourself in a dark fantasy realm where destiny and magic collide.',
          genz: 'Fantasy vibes on fleek! Geralt is such a mood when he fights those monsters ⚔️'
        }
      },
      {
        id: 'content5',
        title: 'Bridgerton',
        imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'A period drama set in the competitive world of Regency London high society.',
          attractive: 'Indulge in the scandalous secrets and romantic pursuits of London\'s elite.',
          genz: 'The OG reality show but make it 1800s - spilling all the tea about the royal gossip! 👑'
        }
      }
    ]
  },
  {
    id: 'set2',
    name: 'Technology Trends',
    topicBaits: [
      {
        id: 'topic-simple-2',
        style: 'simple',
        title: 'New Tech Releases'
      },
      {
        id: 'topic-attractive-2',
        style: 'attractive',
        title: '✨ Revolutionary Innovations'
      },
      {
        id: 'topic-genz-2',
        style: 'genz',
        title: 'Tech Drip - What\'s Bussin?'
      }
    ],
    contentItems: [
      {
        id: 'tech1',
        title: 'Foldable Phones',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'Smartphones with displays that can be folded in half.',
          attractive: 'Experience the future of mobile devices with revolutionary flexible displays.',
          genz: 'These phones literally fold! No cap, the screen tech is straight fire 📱'
        }
      },
      {
        id: 'tech2',
        title: 'Smart Home Devices',
        imageUrl: 'https://images.unsplash.com/photo-1558002038-1055908a0d25?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'Internet-connected devices that automate home functions.',
          attractive: 'Transform your living space into an intelligent environment responding to your needs.',
          genz: 'Your crib but make it talk back - these gadgets are basically your home besties 🏠'
        }
      },
      {
        id: 'tech3',
        title: 'Virtual Reality',
        imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'Technology that simulates environments and experiences.',
          attractive: 'Immerse yourself in breathtaking digital realms that transcend reality.',
          genz: 'Living for these other dimensions - catch me in the metaverse flexin\' 🌐'
        }
      },
      {
        id: 'tech4',
        title: 'Electric Vehicles',
        imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'Cars powered by electricity rather than gasoline.',
          attractive: 'Drive the future with zero-emission vehicles combining luxury and sustainability.',
          genz: 'Fossil fuels? We don\'t know her. These rides are clean AF and charging is the new gas station 🔋'
        }
      },
      {
        id: 'tech5',
        title: 'AI Assistants',
        imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
        descriptions: {
          simple: 'Digital helpers that can respond to voice commands and questions.',
          attractive: 'Discover the power of intuitive AI companions designed to enhance your daily routine.',
          genz: 'These bots are low-key smarter than some people - they\'re the real MVPs of multitasking 🧠'
        }
      }
    ]
  }
];
