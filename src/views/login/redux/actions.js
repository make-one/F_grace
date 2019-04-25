import * as actionTypes from './actionTypes';
import api from '@/api/login';

export function onLoadBookingList(params) {
  return async dispatch => {
    try {
      const res = await api.get(params);
      if (res.status === '1') {
        dispatch({
          type: actionTypes.DUMMY_1,
          data: { list: res.data },
        });
      }
      return { list: 1 };
    } catch (error) {
      return error;
    }
  };
}
