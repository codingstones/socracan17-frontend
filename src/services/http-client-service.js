import 'isomorphic-fetch';

export class HttpClient {

  post() {
    return fetch('https://api.spotify.com/v1/search?q=lil&type=artist', {
      method: 'GET',
    }).then((response) => {
      console.log(response);
      return response.json();
    });
  }
}
