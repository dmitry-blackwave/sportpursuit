import React, { Component } from 'react';
import { Dimensions, Linking, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import PromoCard from '../../common/PromoCard';
import Config from '../../../config/Config';

/**
 * Component for render item from Banner block
 */
export default class BannerItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
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
