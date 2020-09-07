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

  return (
    <div style={{ marginTop: '3.75rem' }}>
      <div>
        <ul>
          {props.bios.map((bio) => (
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
