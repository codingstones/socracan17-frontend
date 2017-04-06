import Vue from 'vue';
import Vuex from 'vuex';

import { buildCreateASession, buildRetrieveSessions, buildRetrieveSessionsWithError, buildUpdateFormField } from './actions';
import {
  createSession, createSessionSuccess, fetchSession, fetchSessionError, fetchSessionSuccess,
  updateFormField
} from './mutations';


Vue.config.debug = true;
Vue.use(Vuex);

const initialState = {
  sessions: [],
  loading: false,
  error: '',
  newSession: { id: '1', title: '', description: '', facilitator: '' }
};

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_SESSION: fetchSession,
    FETCH_SESSION_SUCCESS: fetchSessionSuccess,
    FETCH_SESSION_ERROR: fetchSessionError,
    CREATE_SESSION: createSession,
    CREATE_SESSION_SUCCESS: createSessionSuccess,
    CREATE_SESSION_ERROR: createSessionSuccess,
    UPDATE_FORM_FIELD: updateFormField,
  },
  actions: {
    retrieveSessions: buildRetrieveSessions(),
    retrieveSessionsWithError: buildRetrieveSessionsWithError(),
    createASession: buildCreateASession(),
    updateFormField: buildUpdateFormField(),
  },
  getters: {
    sessions: state => state.sessions,
    isLoading: state => state.loading,
    error: state => state.error,
    newSession: state => state.newSession,
  },
});

