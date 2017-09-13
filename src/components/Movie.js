import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Image } from 'react-bootstrap'
import _ from 'lodash'

class Movie extends Component {
  render() {
    var { movie } = this.props
    var characters = movie.characters.slice(0, 3)
    var filteredCharacters = []
    if (this.props.characters) {
      filteredCharacters = this.props.characters.filter(character => {
        return _.indexOf(characters, character.url) > -1
      })
    }

    return(
      <div style={{ width: 200 }}>
        <Image src={movie.poster_path} style={{ width: 200 }} alt="242x200" />
        <h4>{movie.title}</h4>
        <p>{movie.director}</p>
        <ul>
          {
            filteredCharacters.length > 0 ?
              filteredCharacters.map(character => {
                return(
                  <li>
                    {character.name}
                  </li>
                )
              })
            :
              null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.app.characters
  }
}

export default connect(mapStateToProps, null)(Movie)
