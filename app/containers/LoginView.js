import React from 'react';
import { connect } from 'react-redux';
import LoginView from '../components/login-view';
import { makeState, makeDispatch } from '../reducers/index';

export default connect(state => makeState, dispatch => makeDispatch)(LoginView);
