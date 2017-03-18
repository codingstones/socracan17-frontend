'use strict';

import {expect} from "../../test/utils/test-helpers";
import {
  FETCH_ISSUE, FETCH_ISSUE_ERROR, FETCH_ISSUE_SUCCESS, fetchIssue, fetchIssueError,
  fetchIssueSuccess
} from "./mutations";

describe('Issue mutations', () => {

  it('fetchIssue', () => {
    let state = {};
    fetchIssue(state)
    expect(state).eql({ loading: true, issues: [], error: "" });
  });

  it('fetchIssueSuccess', () => {
    let state = {};
    fetchIssueSuccess(state)
    expect(state).eql({ loading: false, issues: undefined, error: "" });
  });

  it('fetchIssueError', () => {
    let state = {};
    fetchIssueError(state, Error('any error'))
    expect(state).eql({ loading: false, error: "Error: any error" });
  });
});

