import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import HeaderSecondaryNavigationComponent from '../../components/header/header-secondary-navigation/header-secondary-navigation-component';
import HeaderMainNavigationComponent from '../../components/header/header-main-navigation/header-main-navigation-component';
import HeaderDropdownMenuComponent  from '../../components/header/header-dropdown-menu/header-dropdown-menu-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getLabelsSelector } from '../../selectors/labels-selector';
import * as LabelsActionCreators from '../../actions/labels/labels-actions';

export class HeaderContainer extends Component {
  static propTypes = {
    menu: PropTypes.array,
    changeLanguage: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false
    };
  }

  handleMainMenuItemHover = (slug) => {
    this.setState({
      showDropdown: slug === 'info'
    });
  };

  handleDropdownMenuEnter = () => {
    this.setState({
      showDropdown: true
    });
  };

  handleDropdownMenuLeave = () => {
    this.setState({
      showDropdown: false
    });
  };

  handleLanguageIconClick = (lang) => {
    this.props.changeLanguage(lang);
  };

  render() {
    return (
      <section className="header-container">
        <div className="header-container-banner">
          <a href="http://www.stowarzyszenielemkow.pl/">
            <div className="header-container-banner-logo-sl"/>
          </a>
          <Link to="/">
            <div className="header-container-banner-logo-watra"/>
          </Link>
        </div>
        <HeaderSecondaryNavigationComponent
          clickHandler={this.handleLanguageIconClick}
          />
        <HeaderMainNavigationComponent
          items={this.props.menu}
          labels={this.props.labels}
          handleItemHover={this.handleMainMenuItemHover}
          />
        <ReactCSSTransitionGroup
          transitionName="header-dropdown-menu-component-transition"
          transitionLeave={true}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={200}
          >
          {this.state.showDropdown &&
            <HeaderDropdownMenuComponent
              items={this.props.menu[4].subItems}
              labels={this.props.labels}
              handleMenuEnter={this.handleDropdownMenuEnter}
              handleMenuLeave={this.handleDropdownMenuLeave}
              />}
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}

export default connect(
  (state) => Object.assign(
    {},
    state.menu.toJS(),
    { labels: getLabelsSelector(state) }
  ),
  (dispatch) => bindActionCreators(LabelsActionCreators, dispatch)
)(HeaderContainer);
