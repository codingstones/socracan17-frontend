'use strict';

import {expect} from "../../test/utils/test-helpers";
import {
  createIssue, createIssueSuccess,
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


  it('createIssue', () => {
    let state = {};
    createIssue(state)
    expect(state).eql({ loading: true, error: "" });
  });

  it('createIssueSuccess', () => {
    let state = {issues: []};
    const ANY_ISSUE = {id: 'any_id'};
    createIssueSuccess(state, ANY_ISSUE)
    expect(state).eql({ loading: false, issues: [ANY_ISSUE], error: "" });
  });
});

