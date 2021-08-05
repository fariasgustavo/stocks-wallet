import { StocksTickersListResultModel } from '../../../domain/models/stocks-api/stocks-tickers-list-result.model';

export interface TickerListRequestProtocol {
  list(): Promise<StocksTickersListResultModel>;
}
