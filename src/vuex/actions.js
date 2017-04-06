import { SessionsAPI, ErrorApi } from '../services/sessions-api-service';
import {HttpClient} from "../services/http-client-service";
import {
  FETCH_SESSION, FETCH_SESSION_ERROR, FETCH_SESSION_SUCCESS, CREATE_SESSION,
  CREATE_SESSION_ERROR, CREATE_SESSION_SUCCESS, UPDATE_FORM_FIELD,
} from './mutations';

const FETCH_LIBRARY = {};

export class RetrieveSessions {
  constructor(sessionsApi) {
    this.sessionsApi = sessionsApi;
  }

  run = ({ commit }) => {
    commit(FETCH_SESSION);

    this.sessionsApi.retrieveSessions().then((result) => {
      commit(FETCH_SESSION_SUCCESS, result);
    }
    , (error) => {
      commit(FETCH_SESSION_ERROR, error);
    });
  };
}

export function buildRetrieveSessions() {
  return new RetrieveSessions(new SessionsAPI(new HttpClient())).run;
}

export function buildRetrieveSessionsWithError() {
  return new RetrieveSessions(new ErrorApi()).run;
}


export class CreateSession {

  constructor(conectaApi) {
    this.conectaApi = conectaApi;
  }

  run = ({ commit, state }) => {
    commit(CREATE_SESSION);

    return new Promise((resolve, reject) => {
      this.conectaApi.createSession(state.newSession).then((result) => {
        commit(CREATE_SESSION_SUCCESS, state.newSession);
        resolve();
        console.log('sessions after adding', state.sessions);
      }, (error) => {
        commit(CREATE_SESSION_ERROR, error);
        reject();
      });
    });
  };
}

export function buildCreateASession() {
  return new CreateSession(new SessionsAPI(new HttpClient())).run;
}

export function buildUpdateFormField() {
  return ({ commit }, payload) => {
    commit(UPDATE_FORM_FIELD, payload);
  };
}
