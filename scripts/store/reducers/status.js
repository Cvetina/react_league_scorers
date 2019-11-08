import { Map, List, fromJS } from 'immutable';
import Api from '../../api/Api';

export const GET_PLAYERS = 'sport/GET_PLAYERS';

export const DEFAULT_STATE = Map({
    statuses: Map()
});

const transformActioToStatus = (action) => {
    const actionTypeWithNoStatus = action.replace(/(_PENDING|_FULFILLED|_REJECTED)/, '');
    return actionTypeWithNoStatus.split('/').pop().toLowerCase();
}

export default function(state=DEFAULT_STATE, action) {
    if (action.type.endsWith('_PENDING')) {
        return state.setIn(['statuses', transformActioToStatus(action.type), 'pending'], true);
    }

    if (action.type.endsWith('_REJECTED')) {
        return state.setIn(['statuses', transformActioToStatus(action.type), 'pending'], false)
                    .setIn(['statuses', transformActioToStatus(action.type), 'rejected'], true);
    }

    if (action.type.endsWith('_FULFILLED')) {
        return state.setIn(['statuses', transformActioToStatus(action.type), 'pending'], false)
                    .setIn(['statuses', transformActioToStatus(action.type), 'fulfilled'], true);
    }

    return state;
}

