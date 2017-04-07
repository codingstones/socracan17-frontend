export class SessionsAPI {

  constructor(httpClient) {
    this.httpClient = httpClient;
    this.servicesUrl = 'http://localhost:4567/services';
  }

  retrieveSessions() {
    return new Promise((resolve) => {
      this.httpClient.post(
        this.servicesUrl, this._build_jsonrpc_request_body('retrieve_all_sessions', {})
      ).then((json) => {
        resolve(json);
      });
    });
  }

  createSession(session) {
    return new Promise((resolve) => {
      this.httpClient.post(
        this.servicesUrl, this._build_jsonrpc_request_body('create_a_new_session', session)
      ).then((json) => {
        resolve(json);
      });
    });
  }

  _build_jsonrpc_request_body(method, params) {
    return JSON.stringify({
      'jsonrpc': "2.0",
      'method': method,
      'params': params,
      'id': 20
    });
  }
}

export class ErrorApi {
  retrieveSessions() {
    $(document).ready(() => { $('#backendErrorModal').foundation('open'); });
    return Promise.reject(new Error('Backend Error'));
  }
}
