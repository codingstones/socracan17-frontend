import Vue from 'vue';
import Vuex from 'vuex';

import { buildCreateAnIssue, buildRetrieveIssues, buildRetrieveIssuesWithError, buildUpdateFormField } from './actions';
import {
  createIssue, createIssueSuccess, fetchIssue, fetchIssueError, fetchIssueSuccess,
  updateFormField
} from './mutations';


Vue.config.debug = true;
Vue.use(Vuex);

const initialState = { issues: [],
  loading: false,
  error: '',
  newIssue: { id: 1, name: '', description: '', person: { full_name: 'Person Name' } }
};

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_ISSUE: fetchIssue,
    FETCH_ISSUE_SUCCESS: fetchIssueSuccess,
    FETCH_ISSUE_ERROR: fetchIssueError,
    CREATE_ISSUE: createIssue,
    CREATE_ISSUE_SUCCESS: createIssueSuccess,
    CREATE_ISSUE_ERROR: createIssueSuccess,
    UPDATE_FORM_FIELD: updateFormField,
  },
  actions: {
    retrieveIssues: buildRetrieveIssues(),
    retrieveIssuesWithError: buildRetrieveIssuesWithError(),
    createAnIssue: buildCreateAnIssue(),
    updateFormField: buildUpdateFormField(),
  },
  getters: {
    issues: state => state.issues,
    isLoading: state => state.loading,
    error: state => state.error,
    newIssue: state => state.newIssue,
  },
});

