import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { initFilms } from '../reducers/app'

class Favorite extends Component {

  render() {
    return (
      <Panel header="Favorite Character">
        <h5>Gotta be Han Solo. So dashing. So charismatic. And a total bad ass</h5>
      </Panel>
    );
  }
}

export default Favorite;
