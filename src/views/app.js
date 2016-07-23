import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes/routes';
import { initializeApp } from '../actions/app/app-actions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    injectTapEventPlugin();
  }

  componentWillMount() {
    const { store } = this.props;
    store.dispatch(initializeApp());
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={this.props.store}>
          <Router history={this.props.history}>
            {routes}
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
