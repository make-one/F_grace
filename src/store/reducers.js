import { combineReducers } from 'redux';

import reducers from '@/views/reducers';

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
