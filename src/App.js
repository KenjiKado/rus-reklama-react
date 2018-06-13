import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Cart from './components/Cart';


class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <Cart/>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <ItemsList/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
