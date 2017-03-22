import jQuery from 'jquery';
const mockIssues = require('../../test/fixtures/issues.json');

export class ConectaApi {

  constructor(fetch) {
    this.fetch = fetch;
  }

  retrieveIssues() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockIssues);
      }, 1000);
    });
  }
}

export class ErrorApi {
  retrieveIssues() {
    $(document).ready(() => { $('#exampleModal1').foundation('open'); });
    return Promise.reject(new Error('Error de Backend'));
  }
}
