/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import LinkedInLogo from '../assets/images/LinkedInLogo.png';

const BioBox = ({ bio, key }) => {
  console.log(bio, key);
  return (
    <div>
      <div style={{ marginTop: '3.75rem' }} />
      <div key={bio.id} className="box">
        <div className="columns is-vcentered">
          <div className="column is-one-fifth">
            <img src={bio.poster} alt={bio.name} />
          </div>
          <div className="column is-three-fifths" style={{ width: '480px' }}>
            <div className="field">
              <p className="title is-4">{`${bio.firstName} ${bio.lastName}`}</p>
              <a href={bio.LinkedIn}>
                <img src={LinkedInLogo} alt="LinkedIn-logo" height="21px" width="21px"/>
              </a>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <p className="subtitle is-6" style={{ marginTop: '20px' }}>
                {bio.title}
              </p>
              <p className="subtitle is-6" style={{ marginTop: '20px' }}>
                {bio.email}
              </p>
              <p className="subtitle is-6" style={{ marginTop: '20px' }}>
                {bio.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioBox;
