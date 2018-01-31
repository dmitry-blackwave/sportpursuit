import React from 'react';
import { connect } from 'react-redux';
import HomeView from '../components/home-view';
import { makeState, makeDispatch } from '../reducers/index';

export default connect(state => makeState, dispatch => makeDispatch)(HomeView);
