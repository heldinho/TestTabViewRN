import { combineReducers } from 'redux';
import { language } from './modules/language';

const rootReducer = combineReducers({
  language,
});

export default rootReducer;
