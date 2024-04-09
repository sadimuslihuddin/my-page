import './App.css';
import LandingPage from './pages/landingPage';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from './utils/logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/projects';

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
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route index element={<LandingPage/>}></Route>
          <Route path="project/:title" element={<Projects/>}></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
