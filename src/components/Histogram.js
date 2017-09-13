import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import _ from 'lodash'
import './Histogram.css'

class Histogram extends Component {
  render() {
    var data = this.props.films.map(film => {
      return {
        title: film.title,
        length: film.opening_crawl.length
      }
    })

    return(
      <Panel header="Crawl Lengths (by release date)" style={{ height: 370 }}>
        <BarChart label={true} data={data} width={220} height={300} margin={{left: 0, bottom: 60}} style={{height: 500}}>
          <XAxis interval={0} tick={{fontSize: 10}} dataKey="title" angle={-45} textAnchor="end" />
          <YAxis height={200} />
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
