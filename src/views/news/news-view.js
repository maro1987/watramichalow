import React, { Component } from 'react';
import NewsContainer from '../../containers/news/news-container';

export default class NewsView extends Component {
  static propTypes = {};

  render() {
    return (
      <main className="news-view">
        <NewsContainer/>
      </main>
    );
  }
}
