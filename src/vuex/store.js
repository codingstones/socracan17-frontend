import Vue from 'vue';
import Vuex from 'vuex';

import {
  buildRetrieveIssues, buildRetrieveIssuesWithError } from './actions';
import { fetchIssue, fetchIssueError, fetchIssueSuccess } from './mutations';


Vue.config.debug = true;
Vue.use(Vuex);

const initialState = { issues: [], loading: false, error: '' };

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_ISSUE: fetchIssue,
    FETCH_ISSUE_SUCCESS: fetchIssueSuccess,
    FETCH_ISSUE_ERROR: fetchIssueError,
  },
  actions: {
    retrieveIssues: buildRetrieveIssues(),
    retrieveIssuesWithError: buildRetrieveIssuesWithError(),
  },
  getters: {
    issues: state => state.issues,
    isLoading: state => state.loading,
    error: state => state.error,
  },
});

