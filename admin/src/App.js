import './App.css';
import LandingPage from './pages/landingPage';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from './utils/logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Component } from 'react';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

class App extends Component { 
  constructor(props) {
    super(props);

    // create redux store.
    this.store = createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  render(){
    return (
      <Provider store={this.store}>
        <LandingPage/>
      </Provider>
    );
  }
}

export default App;
