import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Component for render login screen
 */
export default class ItemView extends Component {
  static propTypes = {
    id: PropTypes.int,
  };

  render() {
    return (
      <View>
        <Text>test {this.props.id}</Text>
      </View>
    );
  }
}
