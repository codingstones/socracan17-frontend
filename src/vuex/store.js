import Vue from 'vue';
import Vuex from 'vuex';

import { buildCreateASession, buildRetrieveSessions, buildUpdateFormField } from './actions';
import {
  createSession, createSessionSuccess, fetchSessions, fetchSessionsError, fetchSessionsSuccess,
  updateFormField
} from './mutations';


Vue.config.debug = true;
Vue.use(Vuex);

const initialState = {
  sessions: [],
  loading: false,
  error: '',
  newSession: { title: '', description: '', facilitator: '', datetime: '', place: '' }
};

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_SESSIONS: fetchSessions,
    FETCH_SESSIONS_SUCCESS: fetchSessionsSuccess,
    FETCH_SESSIONS_ERROR: fetchSessionsError,
    CREATE_SESSION: createSession,
    CREATE_SESSION_SUCCESS: createSessionSuccess,
    CREATE_SESSION_ERROR: createSessionSuccess,
    UPDATE_FORM_FIELD: updateFormField,
  },
  actions: {
    retrieveSessions: buildRetrieveSessions(),
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

