import { StocksTickersListResultModel } from '../../../domain/models/stocks-api/stocks-tickers-list-result.model';
import { RequestProtocol } from '../../request/protocols/request.protocol';
import { TickerListRequestProtocol } from '../protocols/get-ticker-list-request.protocol';

export class TickerListRequest implements TickerListRequestProtocol {
  constructor(private request: RequestProtocol) {}

  async list(): Promise<StocksTickersListResultModel> {
    const response = await this.request.get('/completeTickerList');
    const tickers: StocksTickersListResultModel = {
      tickers: response.data.tickerList,
    };

    return tickers;
  }
}
