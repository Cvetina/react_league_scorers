import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/reducers/sport';
import * as formActions from '../store/reducers/form';
import { sortByGoals } from '../helpers/sorting';
import PlayersTable from './PlayersTable';
import PlayersIds from './PlayersIds';
import LimitInput from './LimitInput';
import style from './styles/Styles.scss';

@connect((store) => ({
  players: store.sport.get('players'),
  limit: store.form.get('limit'),
  playersIds: store.form.get('playersIds')
}))
class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.getPlayers());
  }

  handleInputChange = (event) => {
      this.props.dispatch(formActions.updateLimit(Number(event.target.value)));
  };

  handleCheck = (event) => {
      this.props.dispatch(formActions.updateIds(Number(event.target.value)));
  };

  render () {
    const { limit, players, playersIds } = this.props;
    const expectedLimit =  limit > 2 && limit < 21 ? limit : 10;
    const sortedPlayers = players.sortBy(sortByGoals).slice(0, expectedLimit);

    return (
      <div class={style.mainContainer}>
        <PlayersIds sortedPlayers={sortedPlayers} handleCheck={this.handleCheck} playersIds={playersIds} />
        <LimitInput limit={limit} handleInputChange={this.handleInputChange} />
        <PlayersTable playersIds={playersIds} players={sortedPlayers} />
      </div>
    );
  }
}

export default App;
