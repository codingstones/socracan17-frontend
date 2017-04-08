import { SessionsAPI } from '../services/sessions-api-service';
import { HttpClient } from '../services/http-client-service';
import {
  FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS, CREATE_SESSION,
  CREATE_SESSION_ERROR, CREATE_SESSION_SUCCESS, UPDATE_FORM_FIELD,
} from './mutations';

export class RetrieveSessions {
  constructor(sessionsApi) {
    this.sessionsApi = sessionsApi;
  }

  run = ({ commit }) => {
    commit(FETCH_SESSIONS);

    this.sessionsApi.retrieveSessions().then((sessions) => {
      commit(FETCH_SESSIONS_SUCCESS, sessions);
    }
    , (error) => {
      commit(FETCH_SESSIONS_ERROR, error);
    });
  };
}

export function buildRetrieveSessions() {
  return new RetrieveSessions(new SessionsAPI(new HttpClient())).run;
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
