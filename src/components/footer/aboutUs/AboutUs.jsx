import React, { useState } from 'react';
import AboutUsItem from '../aboutUsItem/AboutUsItem';
import TEAMMATES_DATA from '../../../variables/teammates';

const AboutUs = () => {
  const [currentTeammate, setCurrentTeammate] = useState(TEAMMATES_DATA[0]);
  const sortedArr = TEAMMATES_DATA.filter((obj, ind) => ind > 0);
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="member">
          <div className="member_icon" style={(currentTeammate.style)} />
          <div className="member_description">
            <h4>{currentTeammate.name}</h4>
            <p>{currentTeammate.text}</p>
          </div>
        </div>
        <div className="team">
          {
           sortedArr.map((el) => <AboutUsItem key={el.id} data={el} handler={setCurrentTeammate} />)
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
