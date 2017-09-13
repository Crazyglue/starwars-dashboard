import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

class Favorite extends Component {

  render() {
    return (
      <Panel header="Favorite Character">
        <h5>Gotta be Han Solo. He's a scoundrel/smuggler/thief, with a heart of gold. Also what lady killer.</h5>
      </Panel>
    );
  }
}

export default Favorite;
