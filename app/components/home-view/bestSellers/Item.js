import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Linking, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Config from '../../../config/Config';
import * as Colors from '../../../constants/Colors';

const imageSize = 120;

const styles = StyleSheet.create({
  parentContainer: {
    paddingHorizontal: 2,
    width: imageSize + 4,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
  descriptionContainer: {
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 5,
  },
  text: {
    color: Colors.DEFAULT_TEXT_COLOR,
  },
  brand: {
    fontSize: 10,
  },
  name: {
    fontSize: 9,
  },
  price: {
    fontSize: 10,
  },
});

/**
 * Component for render item from Best Sellers block
 */
export default class Item extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  get image() {
    const { data: { imageUrl } } = this.props;
    return (
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    );
  }

  render() {
    const {
      data: {
        entity_id,
        brand,
        name,
        prices,
      },
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Linking.openURL(Config.options.urlList.item + entity_id);
        }}
        style={styles.parentContainer}
      >
        <View style={styles.container}>
          <View>
            {this.image}
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.text, styles.brand]}>{brand}</Text>
            <Text style={[styles.name, styles.text]}>{name.substr(0, 18)}...</Text>
            <Text style={[styles.text, styles.price]}>{prices.current} RRP {prices.old}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
