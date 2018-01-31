import React, { Component } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BestSellers from './bestSellers/BestSellers';
import Banner from './banner/Banner';
import FlashSales from './flashSales/FlashSales';
import * as Colors from '../../constants/Colors';
import CartButton from '../common/CartButton';
import Button from '../common/Button';
import * as LimitItems from '../../constants/LimitItems';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  globalPadding: {
    padding: 5,
  },
  cartArea: {
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.SECONDARY_COLOR,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeSubHeader: {
    backgroundColor: Colors.PRIMARY_COLOR,
    flex: 1,
  },
  homeSubHeaderText: {
    color: Colors.DEFAULT_TEXT_COLOR,
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
});

/**
 * Component for render main screen
 */
export default class HomeView extends Component {
  static propTypes = {
    banners: PropTypes.object.isRequired,
    bestSellers: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 2,
      flashSales: this.getDefaultFlashSalesList(),
      pos: 1,
    };
  }

  getDefaultFlashSalesList() {
    return this.props.banners.banners.featuredSales; //.slice(0, LimitItems.FLASH_SALES_PER_PAGE)
  }

  // getMoreItemsFlashSales(loadMore) {
  //   const currentSize = LimitItems.FLASH_SALES_PER_PAGE * this.state.page;
  //   if (currentSize >= this.props.banners.banners.featuredSales.length) {
  //     return this.state.flashSales;
  //   }
  //
  //   this.setState({
  //     flashSales: this.props.banners.banners.featuredSales.slice(0, currentSize),
  //     page: loadMore ? this.state.page + 1 : this.state.page - 1,
  //   });
  //
  //   return this.state.flashSales;
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          // onScroll={(e) => {
          //   let paddingToBottom = 5;
          //   const offsetY = e.nativeEvent.contentOffset.y;
          //   paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          //   if (
          //     offsetY >= e.nativeEvent.contentSize.height - paddingToBottom
          //   ) {
          //     this.getMoreItemsFlashSales(true);
          //   } else if (
          //     offsetY <= e.nativeEvent.layoutMeasurement.height && this.state.page >= 3
          //   ) {
          //     this.getMoreItemsFlashSales(false);
          //   }
          // }}
        >
          <View style={styles.globalPadding}>
            {!this.props.banners ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <Banner
                bannerItems={this.props.banners.banners.topBanner}
              />}
          </View>
          <View style={styles.homeSubHeader}>
            <Text style={styles.homeSubHeaderText}>Bestsellers</Text>
          </View>
          <View style={styles.globalPadding}>
            {!this.props.bestSellers ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <BestSellers
                bestSellers={this.props.bestSellers.items}
              />}
          </View>
          <View style={styles.homeSubHeader}>
            <Text style={styles.homeSubHeaderText}>Flash Sales</Text>
          </View>
          <View style={styles.globalPadding}>
            {!this.props.banners ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <FlashSales
                flashSales={this.state.flashSales}
              />}
          </View>
        </ScrollView>
        <View style={styles.cartArea}>
          <View>
            <CartButton
              onPress={() => {
                Alert.alert(
                  'Shopping cart message',
                  'Go to shopping cart',
                  [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: true },
                );
              }}
            />
          </View>
          <View/>
          <View>
            <Button
              text='Checkout'
              onPress={() => {
                Alert.alert(
                  'Checkout message',
                  'Go to payment system',
                  [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: true },
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
