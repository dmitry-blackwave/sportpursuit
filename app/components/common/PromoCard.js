import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-image-progress';
import PropTypes from 'prop-types';
import { CustomCachedImage } from 'react-native-img-cache';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  image: {
    height: 150,
    top: 0,
  },
  logo: {
    flex: 1,
    margin: 10,
  },
  icon: {
    color: Colors.DEFAULT_TEXT_COLOR,
  },
  imageLogo: {
    width: '40%',
  },
  extraText: {
    color: Colors.DEFAULT_TEXT_COLOR,
    textAlign: 'right',
    fontSize: 12,
  },
  container: {
    flex: 1,
    height: 150,
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.TRANSPARENT_BACKGROUND,
    height: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  descriptionContainer: {
    backgroundColor: Colors.TERTIARY_COLOR,
    height: 'auto',
    padding: 5,
  },
  containerHeader: {
    color: Colors.DEFAULT_TEXT_COLOR,
    fontSize: 12,
  },
  containerSubHeader: {
    fontSize: 10,
  },
  brandContainer: {
    padding: 0,
    backgroundColor: Colors.BRAND_BACKGROUND,
    height: '50%',
  },
  extraContainer: {
    backgroundColor: Colors.SPECIAL_OFFER_BACKGROUND,
    paddingRight: 10,
  },
  timerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.TRANSPARENT_BACKGROUND,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
});

/**
 * Base component for  render item of carousel. Used in Banner and FlashSales components
 *
 * @see Banner
 * @see FlashSales
 */
export default class PromoCard extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: Dimensions.get('window').width - 10,
        height: Dimensions.get('window').height,
      },
    };
  }

  render() {
    const {
      data: {
        title, logo, extra, description, image, timer,
      },
    } = this.props;
    return (
      <View
        style={[styles.container, { width: this.state.viewport.width }]}
        onLayout={() => {
          this.setState({
            viewport: {
              width: Dimensions.get('window').width - 10,
              height: Dimensions.get('window').height,
            },
          });
        }}
      >
        <CustomCachedImage
          component={Image}
          source={{ uri: image }}
          style={[
            styles.image,
            { width: this.state.viewport.width },
          ]}/>
        <View style={styles.contentContainer}>
          <View/>
          {logo && extra ? <View style={styles.imageLogo}>
              <View style={styles.brandContainer}>
                {logo
                  ? <CustomCachedImage
                    component={Image}
                    source={{ uri: logo }}
                    style={styles.logo}
                    renderError={({ error }) => (<Text>error</Text>)}
                  />
                  : <View/>}
              </View>
              <View style={styles.extraContainer}>
                <Text style={styles.extraText}>{extra}</Text>
              </View>
            </View>
            : <View/>}
          <View style={styles.descriptionContainer}>
            <View>
              <Text style={styles.containerHeader}>{title}</Text>
              <Text style={[styles.containerHeader, styles.containerSubHeader]}>{description}</Text>
            </View>
            <View style={styles.timerContainer}>
              <Icon name={'clock-o'} size={14} style={styles.icon}/>
              <Text style={[styles.containerHeader, styles.containerSubHeader]}> {timer}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
