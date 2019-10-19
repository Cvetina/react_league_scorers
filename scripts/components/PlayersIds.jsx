import React from 'react';
import style from './styles/Styles.scss';

const PlayersIds = ({ sortedPlayers, handleCheck, playersIds }) => {
    return (
        <div class={style.topRow}>
          <label class={style.label}>Players Ids:</label>
          {sortedPlayers.map((player) => (
              <div class={style.row} key={player.getIn(['player', 'id'])}>
                <input
                  type='checkbox'
                  value={player.getIn(['player', 'id'])}
                  checked={playersIds.get(player.getIn(['player', 'id']))}
                  onClick={handleCheck}
                />
                <span>{player.getIn(['player', 'id'])}</span>
              </div>
              ))
            }
          </div>
          )}
export default PlayersIds;
