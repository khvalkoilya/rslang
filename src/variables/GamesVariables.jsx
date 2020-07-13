import React from 'react';
import SpeakItContainer from '../components/speakIt/SpeakItContainer';
import DEFAULT_WORDS from './defaultWords';

const GAMES_VARIABLES = [
  {
    id: 0,
    icon: '../../assets/images/games-page-icons/interaction.svg',
    title: 'speackIt',
    render: () => <SpeakItContainer words={DEFAULT_WORDS.slice(0, 10)} />,
  },
  {
    id: 1,
    icon: '../../assets/images/games-page-icons/puzzle.svg',
    title: 'englishPuzzle',
    render: (id, title) => <div key={`${id}-${title}`}>English puzzle</div>,
  },
  {
    id: 2,
    icon: '../../assets/images/games-page-icons/savannah.svg',
    title: 'savannah',
    render: (id, title) => <div key={`${id}-${title}`}>Savannah</div>,
  },
  {
    id: 3,
    icon: '../../assets/images/games-page-icons/phone.svg',
    title: 'audioCall',
    render: (id, title) => <div key={`${id}-${title}`}>Audio Call</div>,
  },
  {
    id: 4,
    icon: '../../assets/images/games-page-icons/sprint.svg',
    title: 'sprint',
    render: (id, title) => <div key={`${id}-${title}`}>Sprint</div>,
  },
  {
    id: 5,
    icon: '../../assets/images/games-page-icons/vr-gaming.svg',
    title: 'vrGaming',
    render: (id, title) => <div key={`${id}-${title}`}>VR Gaming</div>,
  },
];

export default GAMES_VARIABLES;
