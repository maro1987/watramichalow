import React, { Component, PropTypes } from 'react';
import HomeSlideshowItemComponent from '../../components/home-slideshow-item/home-slideshow-item-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let interval;

export default class HomeSlideshowComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    labels: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      nextIndex: 1,
      showCurrentSlide: true,
      showNextSlide: false
    };
  }

  getIndexToDisplay(index) {
    if (index < this.props.items.length) {
      return index;
    }
    return 0;
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        showCurrentSlide: !this.state.showCurrentSlide,
        showNextSlide: !this.state.showNextSlide
      });

      setTimeout(() => {
        if (!this.state.showCurrentSlide) {
          this.setState({
            currentIndex: this.getIndexToDisplay(this.state.nextIndex + 1)
          });
        } else {
          this.setState({
            nextIndex: this.getIndexToDisplay(this.state.currentIndex + 1)
          });
        }
      }, 500);
    }, 8000);
  }

  render() {
    const currentItem  = this.props.items[this.state.currentIndex];
    const nextItem = this.props.items[this.state.nextIndex];
    const { labels } = this.props;
    return (
      <section className="home-slideshow-component">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionLeave={true}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.state.showCurrentSlide
          && <HomeSlideshowItemComponent
            imgUrl={currentItem.imgUrl}
            name={labels[currentItem.nameId]}
            time={currentItem.time}
            date={currentItem.date}
            description={labels[currentItem.descriptionId]}
            id={currentItem.id}
            moreLabel = {this.props.labels.more}
            hourLabel = {this.props.labels.hour}
          />}
          {this.state.showNextSlide
          && <HomeSlideshowItemComponent
            imgUrl={nextItem.imgUrl}
            name={labels[nextItem.nameId]}
            time={nextItem.time}
            date={nextItem.date}
            description={labels[nextItem.descriptionId]}
            id={nextItem.id}
            moreLabel = {this.props.labels.more}
            hourLabel = {this.props.labels.hour}
          />}
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}
