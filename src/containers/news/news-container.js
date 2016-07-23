import React, { Component, PropTypes } from 'react';

export default class NewsContainer extends Component {
  static propTypes = {}

  render() {
    const style = {
      border: 'none',
      visibility: 'visible',
      width: '1000px',
      height: '1000px',
      overflow: 'hidden'
    };

    return (
      <div className="news-container">
        <h2 className="news-header">
          <a className="news-header-title">Aktualnosci</a>
        </h2>
        <div className="news-image"/>
        <section className="news-content">
          <div className="news-page-plugin">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWatraMichalow&tabs=timeline&width=1000&height=1000&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=311456735639471" width="1000" height="1000" style={style} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
          </div>
        </section>
      </div>
    );
  }
}
