import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getLabelsSelector } from '../../selectors/labels-selector';
import HomeInfoComponent from '../../components/home-info/home-info-component';

export default class HomeInfoContainer extends Component {
  static propTypes = {
    labels: PropTypes.object
  }

  render() {
    const infoData = [
      {
        labelId: 'home.childsStage.title',
        description: 'W tym roku wszystkie dzieci zapraszamy na SWOJĄ scenę.W programie sceny:- lepienie garnuszków z gliny- malowanie- nauka łemkowskich liter "na wesoło"- i wszystko inne czego dzieci zapragną ;)Startujemy w sobotę o godz. 14.00. Szukajcie nas na watrowisku pod gruszą.'
      }
    ];

    const style = {
      border: 'none',
      visibility: 'visible',
      height: '725px',
      width: '340px',
      overflow: 'hidden'
    };

    return (

      <div>
        {
          infoData.map((item, index) => (
            <HomeInfoComponent description={this.props.labels['home.childsStage.description']} key={index} title={this.props.labels[item.labelId]}/>
          ))
        }
        <div className="news-page-plugin">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWatraMichalow&tabs=timeline&width=340&height=1000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=311456735639471" width="350" height="1000" style={style} scrolling="no" frameBorder="0" allowTransparency="false"></iframe>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    { labels: getLabelsSelector(state) }
  ),
)(HomeInfoContainer);
