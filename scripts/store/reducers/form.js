import { Map } from 'immutable';

export const UPDATE_LIMIT = 'form/UPDATE_LIMIT';
export const UPDATE_IDS = 'form/UPDATE_IDS';

export const DEFAULT_STATE = Map({
    limit: 10,
    playersIds: Map()
});

export default function(state=DEFAULT_STATE, action) {

    if (action.type === UPDATE_LIMIT) {
        return state.set('limit', action.payload);
    }

    if (action.type === UPDATE_IDS) {
        return state.updateIn(['playersIds', action.payload], (v) => !v);
    }

    return state;
}

export const updateLimit = (limit) => ({
    type: UPDATE_LIMIT,
    payload: limit
});

export const updateIds = (ids) => ({
    type: UPDATE_IDS,
    payload: ids
});
