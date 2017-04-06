import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import {HttpClient} from "./http-client-service";
import {SessionsAPI} from "./sessions-api-service";

describe('Sessions API client service', () => {
  let httpClient;
  let sessionsAPI;

  beforeEach(() => {
    httpClient = new HttpClient();
    sessionsAPI = new SessionsAPI(httpClient);
  });

  it('creates a new session', () => {
    const title = 'Irrelevant title';
    const description = 'Irrelevant description';
    const facilitator = 'Irrelevant facilitator';
    const datetime = 'Irrelevant datetime';
    const place = 'Irrelevant place';

    return sessionsAPI.createSession({title, description, facilitator, datetime, place}).then((session) => {
      expect(session.title).eql(title);
      expect(session.description).eql(description);
      expect(session.facilitator).eql(facilitator);
      expect(session.datetime).eql(datetime);
      expect(session.place).eql(place);
    });
  });
});
