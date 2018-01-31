import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.BUTTON_COLOR_BACKGROUND,
    margin: 0,
    borderRadius: 2,
  },
  buttonText: {
    color: Colors.DEFAULT_TEXT_COLOR,
    fontSize: 14,
    fontWeight: '500',
  },
});

/**
 * Component for render stylized button in other components
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const Button = (props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  text: 'Submit',
  onPress: () => console.log('Button Pressed'),
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Button;
