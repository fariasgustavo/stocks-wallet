import { StockDetailResultModel } from '../../../domain/models/stocks-api/stock-detail-result.model';
import { RequestProtocol } from '../../request/protocols/request.protocol';
import { TickerDetailRequestProtocol } from '../protocols/get-ticker-detail-request.protocol';

export class TickerDetailRequest implements TickerDetailRequestProtocol {
  constructor(private request: RequestProtocol) {}

  async detail(stockTiker: string): Promise<StockDetailResultModel> {
    const response = await this.request.get(`/api/${stockTiker}`);
    const tickers: StockDetailResultModel = {
      marketInfo: {
        currentPrice: response.data.currentPrice,
        currentPriceVariationPercent: response.data.percentText,
        revenueGrowth: response.data.revenueGrowth,
        profitGrowth: response.data.profitGrowth,
        revenueGrowthPercentage: response.data.revenueGrowthText,
        profitGrowthPercentage: response.data.profitGrowthText,
        yearPriceVariationPercent: response.data.percentTextYear,
      },
      companyInfo: {
        ticker: response.data.ticker,
        name: response.data.shortName,
      },
    };

    return tickers;
  }
}
