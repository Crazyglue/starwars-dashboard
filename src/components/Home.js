import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { initFilms } from '../reducers/app'
import Favorite from './Favorite'
import LeastFavorite from './LeastFavorite'

class Home extends Component {
  componentDidMount() {
    this.props.initFilms()
  }

  render() {
    return (
      <div>
        <Col md={3} style={{ padding: 20 }}>
          <Favorite />
          <LeastFavorite />
        </Col>

        <Col md={9} style={{ backgroundColor: "green", height: 100 }}>

        </Col>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    initFilms: () => dispatch(initFilms()),
  }
}
export default connect(null, mapDispatchToProps)(Home);
