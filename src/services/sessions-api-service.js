export class SessionsAPI {

  constructor(httpClient) {
    this.httpClient = httpClient;
    this.servicesUrl = 'http://localhost:4567/services';
  }

  retrieveSessions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSessions);
      }, 1000);
    });
  }

  createSession(session) {
    return new Promise((resolve) => {
      this.httpClient.post(this.servicesUrl, JSON.stringify({
        'jsonrpc': 2.0,
        'method': 'create_a_new_session',
        'params': session,
        'id': 1
      })).then((response) => {
        response.json().then((json) => {
          resolve(json.result);
        });
      });
    });
  }
}

export class ErrorApi {
  retrieveSessions() {
    $(document).ready(() => { $('#backendErrorModal').foundation('open'); });
    return Promise.reject(new Error('Backend Error'));
  }
}
