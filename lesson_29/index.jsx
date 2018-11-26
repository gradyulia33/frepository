import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import Main from './main';
import About from './about';
import NotFound from './not_found';

class Result extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/not_found" component={NotFound} />
            <Redirect to='/not_found' />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<HiLinks />, document.getElementById('root'));
