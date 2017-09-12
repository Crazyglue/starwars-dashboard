import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap'

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

class Movie extends Component {
  render() {
    var { movie } = this.props

    return(
      <div>
        <Image src={movie.poster_path} style={{ width: 200 }} alt="242x200" />
        <h3>{movie.title} ({new Date(movie.release_date).getFullYear()})</h3>
        <p>{movie.director}</p>
      </div>
    )
  }
}
