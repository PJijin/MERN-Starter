import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Container className="mt-3">
            <div className="App">
              <ul>
                <li>MongoDB</li>
                <li>Express JS</li>
                <li>React JS</li>
                <li>Node JS</li>

                <li>Redux</li>
              </ul>
            </div>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
