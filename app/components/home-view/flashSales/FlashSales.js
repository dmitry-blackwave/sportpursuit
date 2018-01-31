import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import PropTypes from 'prop-types';
import Item from './Item';

const styles = StyleSheet.create({
  separator: {
    height: 5,
    marginLeft: 0,
  },
});

/**
 * Component for show list of flash sales on main screen
 */
export default class FlashSales extends Component {
  static propTypes = {
    flashSales: PropTypes.array.isRequired,
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
          data={this.props.flashSales}
          renderItem={({ item }) => (
            <Item
              data={item}
            />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={styles.separator}/>
          )}
          initialNumToRender={5}
        />
      </View>
    );
  }
}
