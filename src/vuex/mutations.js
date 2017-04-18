export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const FETCH_SESSIONS_SUCCESS = 'FETCH_SESSIONS_SUCCESS';
export const FETCH_SESSIONS_ERROR = 'FETCH_SESSIONS_ERROR';

export const CREATE_SESSION = 'CREATE_SESSION';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_ERROR = 'CREATE_SESSION_ERROR';
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

export function fetchSessions(state) {
  state.loading = true;
  state.error = '';
  state.sessions = [];
}

export function createSession(state) {
  state.loading = true;
  state.error = '';
}

export function createSessionSuccess(state, session) {
  state.loading = false;
  state.error = '';
  state.sessions.push(session);
  state.newSession.title = '';
  state.newSession.description = '';
  state.newSession.facilitator = '';
  state.newSession.datetime = '';
  state.newSession.place = '';
}

export function fetchSessionsSuccess(state, sessions) {
  state.error = '';
  state.loading = false;
  state.sessions = sessions;
}

export function fetchSessionsError(state, error) {
  state.loading = false;
  state.error = error.toString();
}

export function updateFormField(state, payload) {
  state.newSession[payload.field] = payload.value;
  state.sessionName = payload.value;
}
