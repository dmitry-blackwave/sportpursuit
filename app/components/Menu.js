import React, { Component } from 'react';
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from '../config/Config';
import * as Colors from '../constants/Colors';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    color: Colors.DEFAULT_TEXT_COLOR,
  },
  label: {
    color: Colors.DEFAULT_TEXT_COLOR,
    fontSize: 12,
  },
  labelActive: {
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.PRIMARY_COLOR,
    alignItems: 'stretch',
  },
  centerContainer: {
    justifyContent: 'center',
  },
  topContainer: {
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  iconContainer: {
    width: 20,
  },
  backButtonContainer: {
    flexDirection: 'row',
  },
});

/**
 * Component for render main menu screen
 */
export default class Menu extends Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isChildren: false,
      childrenList: [],
      activeParent: null,
    };
  }

  renderItem({ item, index }) {
    const {
      iconFont, label, url, type, children,
    } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (url.length) {
            Linking.openURL(type === 'link' && url.length > 10 ? url : Config.options.main + url);
          } else {
            this.setState({
              isChildren: true,
              childrenList: children,
              activeParent: label,
            });
          }
        }}
      >
        <View style={styles.item}>
          {iconFont
            ? <View style={styles.iconContainer}>
              <Icon name={iconFont.substr(3, iconFont.length)} size={14}
                    style={styles.icon}/>
            </View>
            : <View/>}
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[
        styles.container,
        this.state.isChildren ? styles.topContainer : styles.centerContainer,
      ]}>
        <View>
          {this.state.isChildren
            ? <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.setState({
                  isChildren: false,
                  childrenList: [],
                  activeParent: null,
                });
              }}
            >
              <View style={styles.backButtonContainer}>
                <View style={styles.iconContainer}>
                  <Icon name='chevron-left' size={14} style={styles.icon}/>
                </View>
                <Text style={[styles.label, styles.labelActive]}>{this.state.activeParent}</Text>
              </View>
            </TouchableOpacity>
            : <View/>}
          <FlatList
            data={this.state.isChildren ? this.state.childrenList : this.props.menu.items}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={({ highlighted }) => (
              <View style={styles.separator}/>
            )}
          />
        </View>
      </View>
    );
  }
}

