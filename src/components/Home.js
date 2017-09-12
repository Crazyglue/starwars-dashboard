import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { initFilms } from '../reducers/app'

class Home extends Component {
  componentDidMount() {
    this.props.initFilms()
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    initFilms: () => dispatch(initFilms()),
  }
}
export default connect(null, mapDispatchToProps)(Home);
