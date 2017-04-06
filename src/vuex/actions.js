import { ConectaApi, ErrorApi } from '../services/sessions-api-service';
import router from '../../vue-config/router';
import {
  FETCH_SESSION, FETCH_SESSION_ERROR, FETCH_SESSION_SUCCESS, CREATE_SESSION,
  CREATE_SESSION_ERROR, CREATE_SESSION_SUCCESS, UPDATE_FORM_FIELD,
} from './mutations';

const FETCH_LIBRARY = {};

export class RetrieveSessions {
  constructor(conectaApi) {
    this.conectaApi = conectaApi;
  }

  run = ({ commit }) => {
    commit(FETCH_SESSION);

    this.conectaApi.retrieveSessions().then((result) => {
      commit(FETCH_SESSION_SUCCESS, result);
    }
    , (error) => {
      commit(FETCH_SESSION_ERROR, error);
    });
  };
}

export function buildRetrieveSessions() {
  return new RetrieveSessions(new ConectaApi(FETCH_LIBRARY)).run;
}

export function buildRetrieveSessionsWithError() {
  return new RetrieveSessions(new ErrorApi()).run;
}


export class CreateSession {

  constructor(conectaApi, router) {
    this.conectaApi = conectaApi;
    this.router = router;
  }

  run = ({ commit, state }) => {
    commit(CREATE_SESSION);

    console.log('ROUTER', this.router);

    this.conectaApi.createSession(state.newSession).then((result) => {
      commit(CREATE_SESSION_SUCCESS, JSON.stringify(state.newSession));
      this.router.push('/sessions');
      console.log('sessions after adding', state.sessions);
    }
    , (error) => {
      commit(CREATE_SESSION_ERROR, error);
    });
  };
}

export function buildCreateASession() {
  return new CreateSession(new ConectaApi(FETCH_LIBRARY), router).run;
}

export function buildUpdateFormField() {
  return ({ commit }, payload) => {
    commit(UPDATE_FORM_FIELD, payload);
  };
}

