export const FETCH_SESSION = "FETCH_SESSION";
export const FETCH_SESSION_SUCCESS = "FETCH_SESSION_SUCCESS";
export const FETCH_SESSION_ERROR = "FETCH_SESSION_ERROR";

export const CREATE_SESSION = "CREATE_SESSION";
export const CREATE_SESSION_SUCCESS = "CREATE_SESSION_SUCCESS";
export const CREATE_SESSION_ERROR = "CREATE_SESSION_ERROR";
export const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";

export function fetchSession(state) {
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
  //state.newSession = {};
}

export function fetchSessionSuccess(state, sessions) {
  state.error = '';
  state.loading = false;
  state.sessions = sessions;
}

export function fetchSessionError(state, error) {
  state.loading = false;
  state.error = error.toString();
}

export function updateFormField(state, payload) {
  state.newSession[payload.field] = payload.value;
  state.sessionName = payload.value;
}
