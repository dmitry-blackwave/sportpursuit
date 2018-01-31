import React, { Component } from 'react';
import { InteractionManager, Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import HomeView from '../containers/HomeView';
import Menu from '../components/Menu';
import * as Colors from '../constants/Colors';
import LoginView from '../containers/LoginView';
import ItemView from "./item-view/index";

const styles = StyleSheet.create({
  icon: {
    paddingTop: 2,
    color: Colors.DEFAULT_TEXT_COLOR,
    height: 30,
    width: 30,
  },
  profileIcon: {
    paddingRight: 5,
  },
  barsIcon: {
    paddingLeft: 15,
  },
  navBar: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  navBarImage: {
    height: 30,
    width: 190,
  },
  navBarImageAndroid: {
    alignSelf: 'center',
    backgroundColor: Colors.TRANSPARENT_BACKGROUND,
  },
  navBarImageIOS: {
    width: 140,
  },
});

/**
 * Component for render base application screen with drawer menu events and home screen
 */
export default class SportPursuit extends Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
    onGetHome: PropTypes.func,
    onGetMenu: PropTypes.func,
    onGetBestSellers: PropTypes.func,
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ renderPlaceholderOnly: false });
    });
    this.props.onGetHome();
    this.props.onGetMenu();
    this.props.onGetBestSellers();
  }

  /**
   * Open drawer menu event
   */
  openControlPanel = () => {
    this.drawer.open();
  };

  /**
   * Render profile button
   * @param props
   */
  renderRightButton = props => (
    <TouchableOpacity
      onPress={() => {
        Actions.login();
      }}
      style={styles.profileIcon}
    >
      <Icon name='user' size={22} style={styles.icon}/>
    </TouchableOpacity>
  );

  /**
   * Render menu button
   * @param props
   */
  renderLeftButton = props => (
    <TouchableOpacity onPress={this.openControlPanel}
                      style={styles.barsIcon}>
      <Icon name='bars' size={22} style={styles.icon}/>
    </TouchableOpacity>
  );

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<Menu menu={this.props.menu}/>}
        openDrawerOffset={0.55}
        tapToClose={true}
        panOpenMask={0.3}
      >
        <StatusBar
          backgroundColor={Colors.PRIMARY_COLOR}
          barStyle="light-content"
        />
        <Router>
          <Stack key="root">
            <Scene
              key="home"
              component={HomeView}
              title="Main page"
              navigationBarTitleImage={require('../../assets/logo.png')}
              navigationBarTitleImageStyle={[styles.navBarImage, Platform.OS !== 'ios' ? styles.navBarImageAndroid : styles.navBarImageIOS]}
              navigationBarStyle={styles.navBar}
              right={this.renderRightButton}
              left={this.renderLeftButton}
              initial
            />
            <Scene
              key="login"
              component={LoginView}
              navigationBarStyle={styles.navBar}
              title="login page"
            />
            <Scene
              key="item"
              component={ItemView}
              navigationBarStyle={styles.navBar}
              title="item view"
            />
          </Stack>
        </Router>
      </Drawer>
    );
  }
}
