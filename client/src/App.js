import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Page from "./components/Page";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Container className="mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page" component={Page} />
            </Switch>
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
