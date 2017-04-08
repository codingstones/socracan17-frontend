import 'isomorphic-fetch';

export class HttpClient {
  post(url, body) {
    return fetch(
      url,
      {
        method: 'POST',
        body,
      }
    ).then(response => response.json());
  }
}
