import React from 'react';
import { connect } from 'react-redux';
import ItemView from '../components/item-view';
import { makeState, makeDispatch } from '../reducers/index';

export default connect(state => makeState, dispatch => makeDispatch)(ItemView);
