import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

class Histogram extends Component {
  render() {
    var data = this.props.films.map(film => {
      return {
        title: film.title,
        length: film.opening_crawl.length
      }
    })

    console.log("data", data)

    return(
      <Panel header="Crawl Lengths (by release date)">
        <BarChart data={data} width={220} height={300} margin={{left: 0}} >
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="length" fill="#8884d8" />
        </BarChart>
      </Panel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.app.films
  }
}

export default connect(mapStateToProps, null)(Histogram)
