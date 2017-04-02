

import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import { RetrieveIssues, CreateIssue } from './actions';
import { FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS, CREATE_ISSUE, CREATE_ISSUE_SUCCESS } from './mutations';

describe('Issue actions', () => {
  let retrieveIssues, createIssue,
    conectaApiStub;
  beforeEach(() => {
    conectaApiStub = resolvedStub('retrieveIssues', []);

    retrieveIssues = new RetrieveIssues(conectaApiStub);
    createIssue = new CreateIssue(conectaApiStub);
  });

  describe('When retrieving issues', () => {
    let commit,
      state;
    beforeEach(() => {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      retrieveIssues.run({ commit, state });

      expect(commit).calledWith(FETCH_ISSUE);
      expect(commit).calledWith(FETCH_ISSUE_SUCCESS);
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      conectaApiStub = rejectedStub('retrieveIssues', backendError);

      retrieveIssues = new RetrieveIssues(conectaApiStub);

      retrieveIssues.run({ commit, state });

      expect(commit).calledWith(FETCH_ISSUE);
      expect(commit).calledWith(FETCH_ISSUE_ERROR, backendError);
    });
  });

  describe('When creating an issue', () => {
    let commit,
      state;
    beforeEach(() => {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      createIssue.run({ commit, state });

      expect(commit).calledWith(CREATE_ISSUE);
      expect(commit).calledWith(CREATE_ISSUE_SUCCESS);
    });

    // it('finishes with error', () => {
    //   const backendError = Error('Backend Error');
    //   conectaApiStub = rejectedStub('retrieveIssues', backendError);
    //
    //   retrieveIssues = new RetrieveIssues(conectaApiStub);
    //
    //   retrieveIssues.run({ commit, state });
    //
    //   expect(commit).calledWith(FETCH_ISSUE);
    //   expect(commit).calledWith(FETCH_ISSUE_ERROR, backendError);
    // });
  });
});

