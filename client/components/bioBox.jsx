/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';;

const BioBox = (bio) => {
  return (
    <div key={bio.id} className="box">
      <div className="columns is-vcentered">
        <div className="column is-one-fifth">
          <img src={bio.poster} alt={bio.name} width="80" height="100" />
        </div>
        <div className="column is-three-fifths" style={{ width: '480px' }}>
          <div className="field">
            <p>{`${bio.firstName} ${bio.lastName}`}</p>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <p className="subtitle is-6" style={{ marginTop: '20px' }}>
              {bio.title}
              {' '}
              {movie.actors.join(', ')}
            </p>
            <p className="subtitle is-6" style={{ marginTop: '20px' }}>
              {bio.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioBox;
