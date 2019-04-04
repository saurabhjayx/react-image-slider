import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }from 'redux';
import ReduxThunk from 'redux-thunk';
import './styles/index.css'; //overwritten css file
import Feed from './components/feed';
import reducers from './reducers';

class App extends Component {
  constructor(props){
    super(props);
    this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }

  render() {
    return (
      <Provider store={this.store}>
        <Feed />
      </Provider>
    );
  }
}

export default App;
