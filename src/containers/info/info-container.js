import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InfoComponent from '../../components/info/info-component';
import { getLabelsSelector } from '../../selectors/labels-selector';

export default class InfoContainer extends Component {
  static propTypes = {
    category: PropTypes.string,
    labels: PropTypes.object
  };

  render() {
    const { labels } = this.props;
    const infoData = [
      {
        id: 'lokalizacja',
        titleId: 'mainMenu.info.location',
        descriptionId: 'info.location.description',
        iframe: <iframe width="640" height="480" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=Micha%C5%82%C3%B3w+lubin&amp;aq=&amp;sll=51.165997,16.587982&amp;sspn=0.230787,0.676346&amp;ie=UTF8&amp;hq=&amp;hnear=Micha%C5%82%C3%B3w,+polkowicki,+dolno%C5%9Bl%C4%85skie&amp;t=m&amp;ll=51.355489,15.999527&amp;spn=0.205824,0.439453&amp;z=11&amp;iwloc=A&amp;output=embed"></iframe>
      },
      {
        id: 'regulamin',
        titleId: 'mainMenu.info.terms',
        descriptionId: 'info.terms.description',
        iframe: <embed src="http://watramichalow.pl/pdf/watra_regulamin.pdf#zoom=90" width="675px" height="600px"></embed>
      },
      {
        id: 'cennik',
        titleId: 'mainMenu.info.pricing',
        descriptionId: 'info.pricing.description'
      },
      {
        id: 'parking',
        titleId: 'mainMenu.info.parking',
        descriptionId: 'info.parking.description'
      },
      {
        id: 'baza',
        titleId: 'mainMenu.info.accommodation',
        descriptionId: 'info.accommodation.description'
      },
      {
        id: 'rozliczenia',
        titleId: 'mainMenu.info.financialSettlement',
        descriptionId: 'info.financialSettlement.description',
        iframe: <embed src="http://watramichalow.pl/pdf/rozliczenie.pdf#zoom=90" width="675px" height="600px"></embed>
      },
      {
        id: 'oferta',
        titleId: 'mainMenu.info.cooperation',
        descriptionId: 'info.cooperation.description',
        iframe: <embed src="http://watramichalow.pl/pdf/oferta_watra.pdf#zoom=90" width="675px" height="600px"></embed>
      },
      {
        id: 'udzial',
        titleId: 'mainMenu.info.takePart',
        descriptionId: 'info.takePart.description'
      }
    ];

    return (
      <div className="info-container">
        <h2 className="info-header">
          <a className="info-header-title">{labels['mainMenu.info']}</a>
        </h2>
        <section className="news-content">
          <InfoComponent
            items={infoData}
            labels={labels}
            category={this.props.category}
          />
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    { labels: getLabelsSelector(state) }
  ),
)(InfoContainer);
