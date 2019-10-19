import { Map, List, fromJS } from 'immutable';
import Api from '../../api/Api';

export const GET_PLAYERS = 'sport/GET_PLAYERS';

export const DEFAULT_STATE = Map({
    players: List()
});

export default function(state=DEFAULT_STATE, action) {

    if (action.type === `${GET_PLAYERS}_FULFILLED`) {
        return state.set('players', fromJS(action.payload).get('data'))
    }

    return state;
}

export const getPlayers = () => ({
    type: GET_PLAYERS,
    payload: Api.getPlayers()
});
