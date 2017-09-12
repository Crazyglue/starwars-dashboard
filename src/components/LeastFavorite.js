import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { initFilms } from '../reducers/app'

class LeastFavorite extends Component {

  render() {
    return (
      <Panel header="Least Favorite Character">
        <h5>Jar jar binks. Need I say more?</h5>
      </Panel>
    );
  }
}

export default LeastFavorite;
