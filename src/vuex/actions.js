import { ConectaApi, ErrorApi } from '../services/conecta-api-service';
import { FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS } from './mutations';

// export class CreateIssue {
//   constructor(conectaApi) {
//     console.log("Building Create Issue Action");
//     this.commit = commit;
//     this.state = state;
//     this.conectaApi = conectaApi;
//   }
//
//   run(issue) {
//     console.log('Running Create Issue');
//   }
// }

export class RetrieveIssues {
  constructor(conectaApi) {
    this.conectaApi = conectaApi;
  }

  run = ({ state, commit }) => {
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
  const FETCH_LIBRARY = {};
  return new RetrieveIssues(new ConectaApi(FETCH_LIBRARY)).run;
}

export function buildRetrieveIssuesWithError() {
  return new RetrieveIssues(new ErrorApi()).run;
}

