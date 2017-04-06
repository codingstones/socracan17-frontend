import { expect } from '../../test/utils/test-helpers';
import {
  createSession, createSessionSuccess, fetchSession, fetchSessionError, fetchSessionSuccess,
} from './mutations';

describe('Session mutations', () => {
  it('fetchSession', () => {
    const state = {};
    fetchSession(state);
    expect(state).eql({ loading: true, sessions: [], error: '' });
  });

  it('fetchSessionSuccess', () => {
    const state = {};
    fetchSessionSuccess(state);
    expect(state).eql({ loading: false, sessions: undefined, error: '' });
  });

  it('fetchSessionError', () => {
    const state = {};
    fetchSessionError(state, Error('any error'));
    expect(state).eql({ loading: false, error: 'Error: any error' });
  });


  it('createSession', () => {
    const state = {};
    createSession(state);
    expect(state).eql({ loading: true, error: '' });
  });

  it('createSessionSuccess', () => {
    const state = { sessions: [] };
    const ANY_SESSION = { id: 'any_id' };
    createSessionSuccess(state, ANY_SESSION);
    expect(state).eql({ loading: false, sessions: [ANY_SESSION], error: '' });
  });
});

