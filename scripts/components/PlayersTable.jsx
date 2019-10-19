  import React from 'react';
  import classnames from 'classnames';
  import style from './styles/Styles.scss';

  const PlayersTable = ({ players, playersIds }) => {
    const hilightStyle = (player) => classnames(style.row, {[style.hilightRow]: playersIds.get(player.getIn(['player', 'id'])) === true});
    return (
      <div class={style.container}>
          <div class={style.row}>
              <div class={style.flexOne}>No</div>
              <div class={style.flexOne}>Rank</div>
              <div class={style.flexFive}>Name</div>
              <div class={style.flexFive}>Team</div>
              <div class={style.flexOne}>Goals</div>
          </div>
          { 
          players.map((player, index) => (
            <div key={player.getIn(['player', 'id'])} class={hilightStyle(player)}>
                <div class={style.flexOne}>{index + 1}</div>
                <div class={style.flexOne}>{player.get('rank')}</div>
                <div class={style.flexFive}>{player.getIn(['player', 'name'])}</div>
                <div class={style.flexFive}>{player.getIn(['team', 'name'])}</div>
                <div class={style.flexOne}>{player.get('goals')}</div>
            </div>
            ))
          }
      </div>
    );
  }

  export default PlayersTable;
