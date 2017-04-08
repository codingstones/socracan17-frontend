import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import { RetrieveSessions, CreateSession } from './actions';
import { FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS, CREATE_SESSION, CREATE_SESSION_SUCCESS, CREATE_SESSION_ERROR } from './mutations';

describe('Session actions', () => {
  let retrieveSessions,
    createSession,
    sessionsApiStub,
    createSessionsApiStub;

  beforeEach(() => {
    sessionsApiStub = resolvedStub('retrieveSessions', []);
    retrieveSessions = new RetrieveSessions(sessionsApiStub);

    createSessionsApiStub = resolvedStub('createSession', {});
  });

  describe('When retrieving sessions', () => {
    let commit,
      state;
    beforeEach(() => {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      retrieveSessions.run({ commit, state });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_SUCCESS);
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      sessionsApiStub = rejectedStub('retrieveSessions', backendError);

      retrieveSessions = new RetrieveSessions(sessionsApiStub);

      retrieveSessions.run({ commit, state });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_ERROR, backendError);
    });
  });

  describe('When creating a session', () => {
    let commit,
      state;
    beforeEach(() => {
      createSession = new CreateSession(createSessionsApiStub);
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      return createSession.run({ commit, state }).then(() => {
        expect(commit).calledWith(CREATE_SESSION);
        expect(commit).calledWith(CREATE_SESSION_SUCCESS);
      });
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      createSessionsApiStub = rejectedStub('createSession', backendError);
      createSession = new CreateSession(createSessionsApiStub);

      createSession.run({ commit, state });

      expect(commit).calledWith(CREATE_SESSION);
      expect(commit).calledWith(CREATE_SESSION_ERROR, backendError);
    });
  });
});

