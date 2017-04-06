const mockSessions = require('../../test/fixtures/sessions.json');

export class ConectaApi {

  constructor(fetch) {
    this.fetch = fetch;
  }

  retrieveSessions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSessions);
      }, 1000);
    });
  }

  createSession(session) {
    console.log('Creating session', JSON.stringify(session));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('SESSION CREATED SUCCESSFULLY');
      }, 1000);
    });
  }
}

export class ErrorApi {
  retrieveSessions() {
    $(document).ready(() => { $('#backendErrorModal').foundation('open'); });
    return Promise.reject(new Error('Backend Error'));
  }
}
