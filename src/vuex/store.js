import Vue from 'vue'
import Vuex from "vuex";

import {
  buildRetrieveIssues, buildRetrieveIssuesWithError} from "./actions";
import {fetchIssue, fetchIssueError, fetchIssueSuccess} from "./mutations";


Vue.config.debug = true;
Vue.use(Vuex);

let initialState = {issues: [], loading: false, error: '' };

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_ISSUE: fetchIssue,
    FETCH_ISSUE_SUCCESS: fetchIssueSuccess,
    FETCH_ISSUE_ERROR: fetchIssueError
  },
  actions: {
     retrieveIssues: buildRetrieveIssues(),
     retrieveIssuesWithError: buildRetrieveIssuesWithError()
  },
  getters: {
    issues: state => {
      return state.issues;
    },
    isLoading: state => {
      return state.loading;
    },
    error: state => {
      return state.error;
    }
  }
});

