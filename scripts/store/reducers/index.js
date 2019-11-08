import { combineReducers } from 'redux';
import sport from './sport';
import form from './form';
import status from './status';

export default combineReducers({
    sport,
    form,
    status
});