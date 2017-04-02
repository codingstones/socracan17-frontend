import { expect } from '../../test/utils/test-helpers';
import {
  createIssue, createIssueSuccess, fetchIssue, fetchIssueError, fetchIssueSuccess,
} from './mutations';

describe('Issue mutations', () => {
  it('fetchIssue', () => {
    const state = {};
    fetchIssue(state);
    expect(state).eql({ loading: true, issues: [], error: '' });
  });

  it('fetchIssueSuccess', () => {
    const state = {};
    fetchIssueSuccess(state);
    expect(state).eql({ loading: false, issues: undefined, error: '' });
  });

  it('fetchIssueError', () => {
    const state = {};
    fetchIssueError(state, Error('any error'));
    expect(state).eql({ loading: false, error: 'Error: any error' });
  });


  it('createIssue', () => {
    const state = {};
    createIssue(state);
    expect(state).eql({ loading: true, error: '' });
  });

  it('createIssueSuccess', () => {
    const state = { issues: [] };
    const ANY_ISSUE = { id: 'any_id' };
    createIssueSuccess(state, ANY_ISSUE);
    expect(state).eql({ loading: false, issues: [ANY_ISSUE], error: '' });
  });
});

