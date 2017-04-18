import { expect } from '../../test/utils/test-helpers';
import {
  createSession, createSessionSuccess, fetchSessions, fetchSessionsError, fetchSessionsSuccess,
} from './mutations';

describe('Session mutations', () => {
  it('fetchSessions', () => {
    const state = {};
    fetchSessions(state);
    expect(state).eql({ loading: true, sessions: [], error: '' });
  });

  it('fetchSessionsSuccess', () => {
    const state = {};
    fetchSessionsSuccess(state);
    expect(state).eql({ loading: false, sessions: undefined, error: '' });
  });

  it('fetchSessionsError', () => {
    const state = {};
    fetchSessionsError(state, Error('any error'));
    expect(state).eql({ loading: false, error: 'Error: any error' });
  });


  it('createSession', () => {
    const state = {};
    createSession(state);
    expect(state).eql({ loading: true, error: '' });
  });

  it('createSessionSuccess', () => {
    const state = { sessions: [] , newSession: {} };
    const ANY_SESSION = { title: 'any_title' };
    createSessionSuccess(state, ANY_SESSION);
    expect(state).eql({
      loading: false,
      newSession: { title: '', facilitator: '', datetime: '', place: '', description: '' },
      sessions: [ANY_SESSION],
      error: ''
    });
  });
});

