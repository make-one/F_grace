import * as actionTypes from './actionTypes';

const initialState = {
  list: [
    {
      name: 'xiao',
      id: '2323',
    },
  ],
  dummy: '',
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.GET_USER: {
      return { ...state };
    }
    case actionTypes.DUMMY_1: {
      const { list } = action.data;
      return Object.assign({
        ...state,
        list: [...state.list, ...list],
        dummy: 'dummy1',
      });
    }

    default: {
      return state;
    }
  }
}
