export const FETCH_ISSUE = "FETCH_ISSUE";
export const FETCH_ISSUE_SUCCESS = "FETCH_ISSUE_SUCCESS";
export const FETCH_ISSUE_ERROR = "FETCH_ISSUE_ERROR";

export function fetchIssue(state) {
  state.loading = true;
  state.error = '';
  state.issues = [];
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






