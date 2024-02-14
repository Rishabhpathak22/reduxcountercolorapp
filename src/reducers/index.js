import { combineReducers } from 'redux';
import updateValue from './updater'; // Corrected import path
import updateColor from './updatecolor';

const rootReducer = combineReducers({
    updateValue,
    updateColor
});

export default rootReducer;
