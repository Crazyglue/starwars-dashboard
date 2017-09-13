import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Movie from './Movie'

class MoviePair extends Component {
  render() {
    var { pair } = this.props

    return(
      <div>
        <Col md={6} style={{display: "flex", minHeight: 450}}>
          {
            pair.map(movie => <Movie key={movie.episode_id} movie={movie} />)
          }
        </Col>
      </div>
    )
  }
}

export default MoviePair;
