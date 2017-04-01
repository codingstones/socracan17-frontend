import { ConectaApi, ErrorApi } from '../services/conecta-api-service';
import { FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS, CREATE_ISSUE, CREATE_ISSUE_ERROR, CREATE_ISSUE_SUCCESS } from './mutations';

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
  constructor(conectaApi) {
    this.conectaApi = conectaApi;
  }

  run = ({ commit }) => {
    console.log('creating an issue');
    commit(CREATE_ISSUE);

    this.conectaApi.retrieveIssues().then((result) => {
      commit(CREATE_ISSUE_SUCCESS, result);
    }
    , (error) => {
      commit(CREATE_ISSUE_ERROR, error);
    });
  };
}

export function buildCreateAnIssue() {
  return new CreateIssue(new ConectaApi(FETCH_LIBRARY)).run;
}

