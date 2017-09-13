import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { initFilms } from '../reducers/app'
import Favorite from './Favorite'
import LeastFavorite from './LeastFavorite'
import MoviePair from './MoviePair'

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
