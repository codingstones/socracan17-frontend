'use strict';

import {sinon, expect, stubFor, resolvedStub, rejectedStub} from "../../test/utils/test-helpers";
import {RetrieveIssues} from "./actions";
import {FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS} from "./mutations";

describe('Issue actions', () => {

  let retrieveIssues, conectaApiStub;
  beforeEach(() => {

    conectaApiStub = resolvedStub('retrieveIssues', []);

    retrieveIssues = new RetrieveIssues(conectaApiStub);
  });

  describe('When retrieving issues', () => {

    let commit, state;
    beforeEach(()=> {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      retrieveIssues.run({commit, state});

      expect(commit).calledWith(FETCH_ISSUE);
      expect(commit).calledWith(FETCH_ISSUE_SUCCESS);
    });

    it('finishes with error', () => {
      let backendError = Error('Backend Error');
      conectaApiStub = rejectedStub('retrieveIssues', backendError);

      retrieveIssues = new RetrieveIssues(conectaApiStub);

      retrieveIssues.run({commit, state});

      expect(commit).calledWith(FETCH_ISSUE);
      expect(commit).calledWith(FETCH_ISSUE_ERROR, backendError);
    });
  });
});

