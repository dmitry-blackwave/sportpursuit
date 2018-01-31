import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import Item from './Item';

/**
 * Component for show banner carousel on main screen
 */
export default class Banner extends Component {
  static propTypes = {
    bannerItems: PropTypes.array.isRequired,
  };

  /**
   * Set default state
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    };
  }

  render() {
    return (
      <View>
        <Carousel
          data={this.props.bannerItems}
          renderItem={({ item, index }) => (
            <Item
              data={item}
              index={index}
            />
          )}
          sliderWidth={this.state.viewport.width - 10}
          itemWidth={this.state.viewport.width - 10}
        />
      </View>
    );
  }
}
