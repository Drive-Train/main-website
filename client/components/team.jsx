/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getBios } from '../redux/bios/actions';
import BioBox from './bioBox';

const Team = (props) => {
  useEffect(() => {
    props.getBios();
  }, []);

  const bioArr = props.bios.sort((a, b) => ((a.lastName > b.lastName) ? 1 : -1));

  return (
    <div style={{ marginTop: '3.75rem' }}>
      <div>
        <ul>
          {bioArr.map((bio) => (
            <BioBox key={bio.id} bio={bio} />
          ))}
        </ul>
      </div>
    </div>
  );
};

Team.propTypes = {
  getBios: propTypes.func.isRequired,
  bios: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStatetoProps = (state) => ({
  bios: state.bioReducer.bios,
});

const mapDispatchToProps = (dispatch) => ({
  getBios: () => dispatch(getBios()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Team);
