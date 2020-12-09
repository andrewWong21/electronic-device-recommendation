import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';
import Test2 from './components/pages/Test2';
import Header from './components/layout/Header';

class App extends Component {

  render () {
    return (
      <Router>
            <Header />
            <Route exact path="/test1" render={props => (
              <React.Fragment>
            <div className="descBoxStyle">
              <p style={descStyle}> This page is dedicated to  </p>
            </div>
                <div className="container">
                  <Questions />
                </div>
              </React.Fragment>
            )} />
            <Route path="/test2" component={Test2} />
      </Router>
    );
  }
}

const descStyle = {
  color: "cyan",
  textDecoration: "underline",
}

export default App;
