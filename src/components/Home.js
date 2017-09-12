import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { initFilms } from '../reducers/app'

class Home extends Component {
  componentDidMount() {
    this.props.initFilms()
  }

  render() {
    return (
      <Row>
        <Col md={4} style={{ backgroundColor: "red", height: 100 }}>

        </Col>

        <Col md={8} style={{ backgroundColor: "green", height: 100 }}>

        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    initFilms: () => dispatch(initFilms()),
  }
}
export default connect(null, mapDispatchToProps)(Home);
