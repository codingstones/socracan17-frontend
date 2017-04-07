export class SessionsAPI {

  constructor(httpClient) {
    this.httpClient = httpClient;
    this.servicesUrl = 'http://localhost:4567/services';
  }

  retrieveSessions() {
    return new Promise((resolve) => {
      this.httpClient.post(
        this.servicesUrl, this._buildJsonrpcRequestBody('retrieve_all_sessions', {})
      ).then((json) => {
        resolve(json.result);
      });
    });
  }

  createSession(session) {
    return new Promise((resolve) => {
      this.httpClient.post(
        this.servicesUrl, this._buildJsonrpcRequestBody('create_a_new_session', session)
      ).then((json) => {
        resolve(json.result);
      });
    });
  }

  _buildJsonrpcRequestBody(method, params) {
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
