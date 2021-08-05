type MarketInfo = {
  revenueGrowth: number[];
  profitGrowth: number[];
  revenueGrowthPercentage: string;
  profitGrowthPercentage: string;
  currentPrice: string;
  currentPriceVariationPercent: string;
  yearPriceVariationPercent: string;
};

type CompanyInfo = {
  ticker: string;
  name: string;
};

export type StockDetailResultModel = {
  marketInfo: MarketInfo;
  companyInfo: CompanyInfo;
};
