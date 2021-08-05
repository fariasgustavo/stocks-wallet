import { StockDetailResultModel } from '../../../domain/models/stocks-api/stock-detail-result.model';

export interface TickerDetailRequestProtocol {
  detail(stockTiker: string): Promise<StockDetailResultModel>;
}
