import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import { RetrieveSessions, CreateSession } from './actions';
import { FETCH_SESSION, FETCH_SESSION_ERROR, FETCH_SESSION_SUCCESS, CREATE_SESSION, CREATE_SESSION_SUCCESS } from './mutations';

describe('Session actions', () => {
  let retrieveSessions,
    createSession,
    sessionsApiStub,
    createSessionsApiStub;

  beforeEach(() => {
    sessionsApiStub = resolvedStub('retrieveSessions', []);
    retrieveSessions = new RetrieveSessions(sessionsApiStub);

    createSessionsApiStub = resolvedStub('createSession', {});
    createSession = new CreateSession(createSessionsApiStub);
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

      expect(commit).calledWith(FETCH_SESSION);
      expect(commit).calledWith(FETCH_SESSION_SUCCESS);
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      sessionsApiStub = rejectedStub('retrieveSessions', backendError);

      retrieveSessions = new RetrieveSessions(sessionsApiStub);

      retrieveSessions.run({ commit, state });

      expect(commit).calledWith(FETCH_SESSION);
      expect(commit).calledWith(FETCH_SESSION_ERROR, backendError);
    });
  });

  describe('When creating a session', () => {
    let commit,
      state;
    beforeEach(() => {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      return createSession.run({ commit, state }).then(() => {
        expect(commit).calledWith(CREATE_SESSION);
        expect(commit).calledWith(CREATE_SESSION_SUCCESS);
      });
    });

    // it('finishes with error', () => {
    //   const backendError = Error('Backend Error');
    //   sessionsApiStub = rejectedStub('retrieveSessions', backendError);
    //
    //   retrieveSessions = new RetrieveSessions(sessionsApiStub);
    //
    //   retrieveSessions.run({ commit, state });
    //
    //   expect(commit).calledWith(FETCH_SESSION);
    //   expect(commit).calledWith(FETCH_SESSION_ERROR, backendError);
    // });
  });
});

