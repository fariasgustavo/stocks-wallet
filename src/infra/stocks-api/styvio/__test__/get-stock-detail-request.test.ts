import axios from 'axios';
import { TickerDetailRequest } from '../get-stock-detail-request';
import StyvioStockDetailFixture from '@test/fixtures/stocks-api/styvio/styvio-ticker-detail.json';
import TickerDetailRequestFixture from '@test/fixtures/stocks-api/ticker-detail-request.json';
import { RequestService } from '../../../request/request';

jest.mock('axios');

describe('Styvio API - Get Stock Detail', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('shoud return the details from a stock sticker', async () => {
    mockedAxios.get.mockResolvedValue({
      data: StyvioStockDetailFixture,
      status: 200,
    });

    const requestService = new RequestService(mockedAxios);
    const tickerDetailRequest = new TickerDetailRequest(requestService);

    const response = await tickerDetailRequest.detail('appl');

    expect(response).toEqual(TickerDetailRequestFixture);
  });
});
