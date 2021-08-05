import axios from 'axios';
import StyvioStockListFixture from '@test/fixtures/stocks-api/styvio/styvio-ticker-list.json';
import TickerListRequestFixture from '@test/fixtures/stocks-api/ticker-list-request.json';
import { TickerListRequest } from '../get-ticker-list-request';
import { RequestService } from '../../../request/request';

jest.mock('axios');

describe('Styvio API - Get Ticker List', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('shoud return a list of all stickers', async () => {
    mockedAxios.get.mockResolvedValue({
      data: StyvioStockListFixture,
    });

    const requestService = new RequestService(mockedAxios);
    const tickerListRequest = new TickerListRequest(requestService);

    const response = await tickerListRequest.list();

    expect(response).toEqual(TickerListRequestFixture);
  });
});
