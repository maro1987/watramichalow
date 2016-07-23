import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../../actions/home/home-actions';
import HomeSlideshowContainer from '../home-slideshow/home-slideshow-container';
import HomeContentContainer from '../home-content/home-content-container';

export class HomeContainer extends Component {
  static propTypes = {
    loadHome: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    return (
      <div className="home-container">
        <HomeSlideshowContainer/>
        <HomeContentContainer/>
      </div>
    );
  }
}

export default connect(
  (state) => state.home.toJS(),
  (dispatch) => bindActionCreators(HomeActions, dispatch)
)(HomeContainer);
