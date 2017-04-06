import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import {HttpClient} from "./http-client-service";

describe.only('Http client service', () => {

  it('calls spotify', (done) => {
    const httpClient = new HttpClient();
    httpClient.post().then((response) => {
      console.log(response);
      done();
    });
  });
});
