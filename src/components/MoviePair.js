import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Image } from 'react-bootstrap'
import Movie from './Movie'
import _ from 'lodash'

class MoviePair extends Component {
  render() {
    var { pair } = this.props
    var movies = pair.map(movie => <Movie key={movie.episode_id} movie={movie} />)

    return(
      <div>
        <Col md={6} style={{display: "flex", minHeight: 450}}>
          {movies}
        </Col>
      </div>
    )
  }
}

export default MoviePair;
