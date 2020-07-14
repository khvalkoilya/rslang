import React from 'react';

import SavanGame from '../components/savanGame/SavanGame';
import SprintGame from '../components/sprintGame/SprintGame';
// import AudioCallGame from '../components/audioCall/AudioCall';

const GAMES_VARIABLES = [
  {
    id: 0,
    icon: '../../assets/images/games-page-icons/interaction.svg',
    title: 'speackIt',
    render: (id, title) => <div key={`${id}-${title}`}>SpeackIt</div>,
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
    render: (id, title, setPage) => <SavanGame key={`${id}-${title}`} setPage={setPage} />,
  },
  {
    id: 3,
    icon: '../../assets/images/games-page-icons/phone.svg',
    title: 'audioCall',
    render: (id, title) => <div key={`${id}-${title}`}>AudioCall</div>,
    // <AudioCallGame key={`${id}-${title}`} />,
  },
  {
    id: 4,
    icon: '../../assets/images/games-page-icons/sprint.svg',
    title: 'sprint',
    render: (id, title) => <SprintGame key={`${id}-${title}`} />,
  },
  {
    id: 5,
    icon: '../../assets/images/games-page-icons/vr-gaming.svg',
    title: 'vrGaming',
    render: (id, title) => <div key={`${id}-${title}`}>VR Gaming</div>,
  },
];

export default GAMES_VARIABLES;
