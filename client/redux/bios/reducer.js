import BIO_TYPES from './types';

const initialState = {
  bios: [],
};

const bioReducer = (state = initialState, action) => {
console.log('action', action);
  switch (action.type) {
    case BIO_TYPES.GET_BIOS:
      return {
        ...state,
        bios: action.bios,
      };
    default: return state;
  }
};

export default bioReducer;
