import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { initFilms } from '../reducers/app'
import Favorite from './Favorite'
import LeastFavorite from './LeastFavorite'
import MoviePair from './MoviePair'
import Histogram from './Histogram'

class Home extends Component {
  componentDidMount() {
    this.props.initFilms()
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={3} style={{ padding: 20 }}>
            <Favorite />
            <LeastFavorite />
            <Histogram />
          </Col>

          <Col md={9}>
            <Row style={{padding: 20}}>
              {
                _.chunk(this.props.films, 2).map((pair, index) => {
                  return(<MoviePair key={index} pair={pair} />)
                })
              }
            </Row>
          </Col>
        </Row>
        <Row>
          <footer>
            <p>By <a href="http://ericdobroveanu.com">Eric Dobroveanu</a></p>
            <p>View on <a href="https://github.com/Crazyglue/starwars-dashboard">Github</a></p>
          </footer>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    initFilms: () => dispatch(initFilms()),
  }
}

const mapStateToProps = function(state) {
  return {
    films: state.app.films,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
