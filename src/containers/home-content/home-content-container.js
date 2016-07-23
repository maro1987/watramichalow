import React, { Component } from 'react';
import HomeArtistsContainer from '../home-artists/home-artists-container';
import HomeInfoContainer from '../home-info/home-info-container';

export default class HomeContentContainer extends Component {
  static propTypes = {}

  render() {
    return (
      <main className="home-content-container">
        <div className="home-content-left-column">
          <HomeArtistsContainer/>
        </div>
        <div className="home-content-right-column">
          <HomeInfoContainer/>
        </div>
      </main>
    );
  }
}
