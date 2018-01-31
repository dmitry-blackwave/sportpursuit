import React from 'react';
import { connect } from 'react-redux';
import { makeDispatch, makeState } from '../reducers/index';
import SportPursuit from '../components/SportPursuit';

export default connect(state => makeState, dispatch => makeDispatch)(SportPursuit);
