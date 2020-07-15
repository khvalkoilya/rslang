import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AboutUsItem from '../aboutUsItem/AboutUsItem';

const AboutUs = ({ data }) => {
  const [currentTeammate, setCurrentTeammate] = useState(data[0]);
  console.log(data);
  const sortedArr = data.filter((obj, ind) => ind > 0);
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="member">
          <div className="member_icon">
            <img src={currentTeammate.icon} alt="icon" />
          </div>
          <div className="member_description">
            <h3>{currentTeammate.name}</h3>
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

AboutUs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default AboutUs;
