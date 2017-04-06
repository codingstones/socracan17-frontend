import { ConectaApi, ErrorApi } from '../services/conecta-api-service';
import router from '../../vue-config/router';
import {
  FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS, CREATE_ISSUE,
  CREATE_ISSUE_ERROR, CREATE_ISSUE_SUCCESS, UPDATE_FORM_FIELD,
} from './mutations';

const FETCH_LIBRARY = {};

export class RetrieveIssues {
  constructor(conectaApi) {
    this.conectaApi = conectaApi;
  }

  run = ({ commit }) => {
    commit(FETCH_ISSUE);

    this.conectaApi.retrieveIssues().then((result) => {
      commit(FETCH_ISSUE_SUCCESS, result);
    }
    , (error) => {
      commit(FETCH_ISSUE_ERROR, error);
    });
  };
}

export function buildRetrieveIssues() {
  return new RetrieveIssues(new ConectaApi(FETCH_LIBRARY)).run;
}

export function buildRetrieveIssuesWithError() {
  return new RetrieveIssues(new ErrorApi()).run;
}


export class CreateIssue {

  constructor(conectaApi, router) {
    this.conectaApi = conectaApi;
    this.router = router;
  }

  run = ({ commit, state }) => {
    commit(CREATE_ISSUE);

    console.log('ROUTER', this.router);

    this.conectaApi.createIssue(state.newIssue).then((result) => {
      commit(CREATE_ISSUE_SUCCESS, JSON.stringify(state.newIssue));
      this.router.push('/issues');
      console.log('issues after adding', state.issues);
    }
    , (error) => {
      commit(CREATE_ISSUE_ERROR, error);
    });
  };
}

export function buildCreateAnIssue() {
  return new CreateIssue(new ConectaApi(FETCH_LIBRARY), router).run;
}

export function buildUpdateFormField() {
  return ({ commit }, payload) => {
    commit(UPDATE_FORM_FIELD, payload);
  };
}

