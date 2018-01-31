import React, { Component } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import PromoCard from '../../common/PromoCard';
import Config from '../../../config/Config';

/**
 * Component for render item from Flash Sales block
 */
export default class FlashSalesItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data: { webUrl } } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Linking.openURL(Config.options.main + webUrl);
        }}
      >
        <PromoCard
          data={this.props.data}
        />
      </TouchableOpacity>
    );
  }
}
