export interface StockPrediction {
  symbol: string;
  prediction: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  currentPrice: number;
  targetPrice: number;
  change: number;
  changePercent: number;
}

export interface NewsItem {
  title: string;
  source: string;
  time: string;
  summary: string;
}

export interface TechnicalIndicator {
  name: string;
  value: number;
  signal: 'Bullish' | 'Bearish' | 'Neutral';
}

export const mockStockData: StockPrediction[] = [
  {
    symbol: 'AAPL',
    prediction: 'BUY',
    confidence: 89,
    currentPrice: 175.43,
    targetPrice: 195.00,
    change: 2.34,
    changePercent: 1.35
  },
  {
    symbol: 'TSLA',
    prediction: 'HOLD',
    confidence: 73,
    currentPrice: 248.50,
    targetPrice: 260.00,
    change: -5.67,
    changePercent: -2.23
  },
  {
    symbol: 'GOOGLE',
    prediction: 'BUY',
    confidence: 92,
    currentPrice: 138.21,
    targetPrice: 155.00,
    change: 3.45,
    changePercent: 2.56
  },
  {
    symbol: 'MSFT',
    prediction: 'BUY',
    confidence: 85,
    currentPrice: 378.85,
    targetPrice: 420.00,
    change: 8.92,
    changePercent: 2.41
  },
  {
    symbol: 'AMZN',
    prediction: 'SELL',
    confidence: 78,
    currentPrice: 142.65,
    targetPrice: 125.00,
    change: -2.18,
    changePercent: -1.50
  }
];

export const mockNews: NewsItem[] = [
  {
    title: 'Apple Reports Strong Q4 Earnings, iPhone Sales Exceed Expectations',
    source: 'Financial Times',
    time: '2 hours ago',
    summary: 'Apple Inc. exceeded Wall Street expectations with robust iPhone 15 sales and strong services revenue growth.'
  },
  {
    title: 'Tesla Stock Surges on Cybertruck Production Updates',
    source: 'Reuters',
    time: '4 hours ago',
    summary: 'Tesla shares gained 3% in pre-market trading following positive updates on Cybertruck manufacturing progress.'
  },
  {
    title: 'Google Cloud Revenue Growth Accelerates in Latest Quarter',
    source: 'Bloomberg',
    time: '6 hours ago',
    summary: 'Alphabet\'s cloud division showed accelerating growth, driven by increased AI and machine learning adoption.'
  },
  {
    title: 'Microsoft Azure Continues Market Share Gains Against AWS',
    source: 'TechCrunch',
    time: '8 hours ago',
    summary: 'Microsoft\'s cloud platform Azure reported 29% year-over-year growth, gaining ground on market leader AWS.'
  }
];

export const mockTechnicalIndicators: TechnicalIndicator[] = [
  { name: 'RSI (14)', value: 65.4, signal: 'Neutral' },
  { name: 'MACD', value: 2.34, signal: 'Bullish' },
  { name: 'Moving Average (50)', value: 172.8, signal: 'Bullish' },
  { name: 'Bollinger Bands', value: 0.85, signal: 'Neutral' },
  { name: 'Stochastic', value: 78.2, signal: 'Bearish' }
];

export const generateChartData = (days: number = 30) => {
  const data = [];
  let basePrice = 150;
  
  for (let i = 0; i < days; i++) {
    basePrice += (Math.random() - 0.5) * 10;
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      price: Math.max(100, Math.round(basePrice * 100) / 100),
      volume: Math.floor(Math.random() * 1000000) + 500000
    });
  }
  
  return data;
};