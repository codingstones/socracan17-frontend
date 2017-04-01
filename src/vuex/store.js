import Vue from 'vue';
import Vuex from 'vuex';

import { buildCreateAnIssue, buildRetrieveIssues, buildRetrieveIssuesWithError } from './actions';
import { createIssue, createIssueSuccess, fetchIssue, fetchIssueError, fetchIssueSuccess } from './mutations';


Vue.config.debug = true;
Vue.use(Vuex);

const initialState = { issues: [], loading: false, error: '' };

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_ISSUE: fetchIssue,
    FETCH_ISSUE_SUCCESS: fetchIssueSuccess,
    FETCH_ISSUE_ERROR: fetchIssueError,
    CREATE_ISSUE: createIssue,
    CREATE_ISSUE_SUCCESS: createIssueSuccess,
    CREATE_ISSUE_ERROR: createIssueSuccess,
  },
  actions: {
    retrieveIssues: buildRetrieveIssues(),
    retrieveIssuesWithError: buildRetrieveIssuesWithError(),
    createAnIssue: buildCreateAnIssue(),
  },
  getters: {
    issues: state => state.issues,
    isLoading: state => state.loading,
    error: state => state.error,
  },
});

