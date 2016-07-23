import React, { Component } from 'react';
import HomeContainer from '../../containers/home/home-container';

export default class HomeView extends Component {
  static propTypes = {};

  render() {
    return (
      <main className="home-view">
        <HomeContainer/>
      </main>
    );
  }
}
