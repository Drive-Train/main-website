/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import Alert from 'react-s-alert';
import BIO_TYPES from './types';
import store from '../store';

const axios = require('axios');

export const getBios = () => async (dispatch) => {
  console.log('getBios action hit');
  axios.get('/api/bios')
    .then((res) => {
      console.log('bios from server ', res.data);
      dispatch({
        type: BIO_TYPES.GET_BIOS,
        bios: res.data,
      });
    });
};
