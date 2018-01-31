import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import PropTypes from 'prop-types';
import Item from './Item';

/**
 * Component for render bestSellers block on main screen
 */
export default class BestSellers extends Component {
  static propTypes = {
    bestSellers: PropTypes.array.isRequired,
  };

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
        <OptimizedFlatList
          data={this.props.bestSellers}
          renderItem={({ item, index }) => (
            <Item
              data={item}
              index={index}
            />
          )}
          keyExtractor={(item, index) => index}
          horizontal={true}
        />
      </View>
    );
  }
}
