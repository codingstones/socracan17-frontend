export const FETCH_ISSUE = "FETCH_ISSUE";
export const FETCH_ISSUE_SUCCESS = "FETCH_ISSUE_SUCCESS";
export const FETCH_ISSUE_ERROR = "FETCH_ISSUE_ERROR";

export const CREATE_ISSUE = "CREATE_ISSUE";
export const CREATE_ISSUE_SUCCESS = "CREATE_ISSUE_SUCCESS";
export const CREATE_ISSUE_ERROR = "CREATE_ISSUE_ERROR";
export const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";

export function fetchIssue(state) {
  state.loading = true;
  state.error = '';
  state.issues = [];
}

export function createIssue(state) {
  state.loading = true;
  state.error = '';
}

export function createIssueSuccess(state, issue) {
  state.loading = false;
  state.error = '';
  state.issues.push(issue);
}

export function fetchIssueSuccess(state, issues) {
  state.error = '';
  state.loading = false;
  state.issues = issues;
}

export function fetchIssueError(state, error) {
  state.loading = false;
  state.error = error.toString();
}

export function updateFormField(state, payload) {
  state.newIssue[payload.field] = payload.value;
}






