import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  iconStyle: {
    color: Colors.DEFAULT_TEXT_COLOR,
  },
});

/**
 * Component for render cart button with icon in bottom navbar.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const CartButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name='shopping-cart' size={25} style={styles.iconStyle}/>
    </TouchableOpacity>
  );
};

CartButton.defaultProps = {
  onPress: () => console.log('Button Pressed'),
};

CartButton.propTypes = {
  onPress: PropTypes.func,
};

export default CartButton;
