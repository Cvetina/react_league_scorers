import { Map, List, fromJS } from 'immutable';
import Api from '../../api/Api';

export const GET_PLAYERS = 'sport/GET_PLAYERS';
export const GET_SEASONS = 'sport/GET_SEASONS';

export const DEFAULT_STATE = Map({
    players: List(),
    statistics: List()
});

export default function(state=DEFAULT_STATE, action) {

    if (action.type === `${GET_PLAYERS}_FULFILLED`) {
        return state.set('players', fromJS(action.payload).get('data'))
    }

    if (action.type === `${GET_SEASONS}_FULFILLED`) {
        return state.set('statistics', fromJS(action.payload).get('data'))
    }

    return state;
}

export const getPlayers = () => ({
    type: GET_PLAYERS,
    payload: Api.getPlayers()
});

export const getStatistics = () => ({
    type: GET_SEASONS,
    payload: Api.getStatistics()
});
