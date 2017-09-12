import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Home from './components/Home'
import configureStore from './configureStore'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: null
    }
  }

  async componentWillMount() {
    const store = await configureStore()
    this.setState({ store })
  }

  render() {
    if (this.state.store === null) {
      return (
        <p>Loading...</p>
      )
    }
    else
      return (
        <Provider store={this.state.store}>
          <Home />
        </Provider>
      );
  }
}

export default App;
