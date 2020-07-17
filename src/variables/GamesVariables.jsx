import React from 'react';
import SpeakItContainer from '../components/speakIt/SpeakItContainer';
import DEFAULT_WORDS from './defaultWords';

import SavanGame from '../components/savanGame/SavanGame';
import SprintGame from '../components/sprintGame/SprintGame';
import AudioCallGame from '../components/audioCall/AudioCall';

const GAMES_VARIABLES = [
  {
    id: 0,
    icon: '../../assets/images/games-page-icons/interaction.svg',
    title: 'speackIt',
    render: () => <SpeakItContainer words={DEFAULT_WORDS.slice(0, 10)} />,
  },
  {
    id: 1,
    icon: '../../assets/images/games-page-icons/savannah.svg',
    title: 'savannah',
    render: (id, title, setPage) => <SavanGame key={`${id}-${title}`} setPage={setPage} />,
  },
  {
    id: 3,
    icon: '../../assets/images/games-page-icons/phone.svg',
    title: 'audioCall',
    render: (id, title) => <AudioCallGame key={`${id}-${title}`} />,
  },
  {
    id: 4,
    icon: '../../assets/images/games-page-icons/sprint.svg',
    title: 'sprint',
    render: (id, title) => <SprintGame key={`${id}-${title}`} />,
  },
];

export default GAMES_VARIABLES;
