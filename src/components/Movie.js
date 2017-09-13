import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Image } from 'react-bootstrap'
import _ from 'lodash'
import ContentLoader, { Rect } from 'react-content-loader'

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

        {
          filteredCharacters.length > 0 ?
            <ul>
              {filteredCharacters.map(character => {
                return(
                  <li key={character.name}>
                    {character.name}
                  </li>
                )
              })}
            </ul>
          :
          <ContentLoader>
            <Rect x={0} y={0} height={20} radius={1} width={250} />
            <Rect x={0} y={25} height={20} radius={1} width={250} />
            <Rect x={0} y={50} height={20} radius={1} width={250} />
          </ContentLoader>
        }
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
