import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import {HttpClient} from "./http-client-service";

describe('Http client service', () => {
  it('calls a post request to an uri', () => {
    let httpClient = new HttpClient();

    return httpClient.post('http://localhost:4567/services', JSON.stringify({
      'jsonrpc': 2.0,
      'method': 'retrieve_all_sessions',
      'params':  {}
    })).then((response) => {
      expect(response.result.length).above(0);
    });
  });
});
