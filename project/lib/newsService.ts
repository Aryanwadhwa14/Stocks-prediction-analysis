import axios from 'axios';
import Parser from 'rss-parser';
import * as cheerio from 'cheerio';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content?: string;
  url: string;
  publishedAt: Date;
  source: string;
  category: string;
  sentiment?: 'positive' | 'negative' | 'neutral';
  tickers?: string[];
  imageUrl?: string;
  author?: string;
}

export interface NewsSource {
  name: string;
  url: string;
  category: string;
  active: boolean;
}

export interface NewsFilter {
  category?: string;
  ticker?: string;
  source?: string;
  dateRange?: 'today' | 'week' | 'month' | 'all';
  sentiment?: 'positive' | 'negative' | 'neutral';
}

class NewsService {
  private parser: Parser;
  private sources: NewsSource[] = [
    {
      name: 'Reuters Business',
      url: 'https://feeds.reuters.com/reuters/businessNews',
      category: 'business',
      active: true
    },
    {
      name: 'Bloomberg Markets',
      url: 'https://feeds.bloomberg.com/markets/news.rss',
      category: 'markets',
      active: true
    },
    {
      name: 'CNBC Markets',
      url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
      category: 'markets',
      active: true
    },
    {
      name: 'MarketWatch',
      url: 'https://feeds.marketwatch.com/marketwatch/marketpulse/',
      category: 'markets',
      active: true
    },
    {
      name: 'Yahoo Finance',
      url: 'https://feeds.finance.yahoo.com/rss/2.0/headline',
      category: 'finance',
      active: true
    },
    {
      name: 'Seeking Alpha',
      url: 'https://seekingalpha.com/feed.xml',
      category: 'analysis',
      active: true
    }
  ];

  constructor() {
    this.parser = new Parser({
      customFields: {
        item: [
          ['media:content', 'media'],
          ['media:thumbnail', 'thumbnail'],
          ['dc:creator', 'author']
        ]
      }
    });
  }

  async fetchNewsFromRSS(source: NewsSource): Promise<NewsArticle[]> {
    try {
      const feed = await this.parser.parseURL(source.url);
      return feed.items.map((item, index) => ({
        id: `${source.name}-${index}-${Date.now()}`,
        title: item.title || 'No Title',
        description: item.contentSnippet || item.content || 'No description available',
        content: item.content,
        url: item.link || '',
        publishedAt: item.pubDate ? new Date(item.pubDate) : new Date(),
        source: source.name,
        category: source.category,
        imageUrl: item.media?.$?.url || item.thumbnail?.$?.url,
        author: item.author || item['dc:creator'] || 'Unknown',
        tickers: this.extractTickers(item.title + ' ' + (item.contentSnippet || '')),
        sentiment: this.analyzeSentiment(item.title + ' ' + (item.contentSnippet || ''))
      }));
    } catch (error) {
      console.error(`Error fetching news from ${source.name}:`, error);
      return [];
    }
  }

  async fetchAllNews(): Promise<NewsArticle[]> {
    const activeSources = this.sources.filter(source => source.active);
    const newsPromises = activeSources.map(source => this.fetchNewsFromRSS(source));
    
    try {
      const allNews = await Promise.allSettled(newsPromises);
      const successfulNews = allNews
        .filter(result => result.status === 'fulfilled')
        .map(result => (result as PromiseFulfilledResult<NewsArticle[]>).value)
        .flat();
      
      // Sort by publication date (newest first)
      return successfulNews.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    } catch (error) {
      console.error('Error fetching all news:', error);
      return [];
    }
  }

  async fetchNewsByTicker(ticker: string): Promise<NewsArticle[]> {
    try {
      // Fetch news from multiple sources and filter by ticker
      const allNews = await this.fetchAllNews();
      return allNews.filter(article => 
        article.tickers?.some(t => t.toUpperCase() === ticker.toUpperCase())
      );
    } catch (error) {
      console.error(`Error fetching news for ticker ${ticker}:`, error);
      return [];
    }
  }

  async fetchNewsByCategory(category: string): Promise<NewsArticle[]> {
    try {
      const allNews = await this.fetchAllNews();
      return allNews.filter(article => article.category === category);
    } catch (error) {
      console.error(`Error fetching news for category ${category}:`, error);
      return [];
    }
  }

  async searchNews(query: string): Promise<NewsArticle[]> {
    try {
      const allNews = await this.fetchAllNews();
      const searchTerm = query.toLowerCase();
      
      return allNews.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm) ||
        article.tickers?.some(ticker => ticker.toLowerCase().includes(searchTerm))
      );
    } catch (error) {
      console.error(`Error searching news for query ${query}:`, error);
      return [];
    }
  }

  async fetchMarketNews(): Promise<NewsArticle[]> {
    try {
      const allNews = await this.fetchAllNews();
      return allNews.filter(article => 
        article.category === 'markets' || 
        article.category === 'finance'
      );
    } catch (error) {
      console.error('Error fetching market news:', error);
      return [];
    }
  }

  private extractTickers(text: string): string[] {
    const tickerPattern = /\b[A-Z]{1,5}\b/g;
    const commonWords = ['THE', 'AND', 'OR', 'FOR', 'WITH', 'FROM', 'THIS', 'THAT', 'WILL', 'CAN', 'ARE', 'WAS', 'HAS', 'HAD', 'NOT', 'BUT', 'YOU', 'ALL', 'HER', 'HIS', 'THEY', 'SAY', 'SHE', 'WILL', 'ONE', 'ALL', 'WOULD', 'THERE', 'THEIR', 'WHAT', 'SOUP', 'OUT', 'ABOUT', 'MANY', 'THEM', 'THEN', 'THESE', 'SOME', 'HER', 'WOULD', 'MAKE', 'LIKE', 'INTO', 'HIM', 'TIME', 'TWO', 'MORE', 'GO', 'NO', 'WAY', 'COULD', 'MY', 'THAN', 'FIRST', 'BEEN', 'CALL', 'WHO', 'ITS', 'NOW', 'FIND', 'LONG', 'DOWN', 'DAY', 'DID', 'GET', 'COME', 'MADE', 'MAY', 'PART'];
    
    const matches = text.match(tickerPattern) || [];
    return matches
      .filter(ticker => !commonWords.includes(ticker))
      .filter(ticker => ticker.length >= 2 && ticker.length <= 5)
      .slice(0, 5); // Limit to 5 tickers per article
  }

  private analyzeSentiment(text: string): 'positive' | 'negative' | 'neutral' {
    const positiveWords = [
      'surge', 'jump', 'rise', 'gain', 'rally', 'bullish', 'positive', 'growth', 'profit', 'earnings', 'beat', 'exceed', 'strong', 'upgrade', 'buy', 'outperform', 'recovery', 'bounce', 'climb', 'soar', 'leap', 'boost', 'improve', 'increase', 'higher', 'record', 'breakthrough', 'innovation', 'success', 'win', 'victory'
    ];
    
    const negativeWords = [
      'fall', 'drop', 'decline', 'plunge', 'crash', 'bearish', 'negative', 'loss', 'miss', 'disappoint', 'weak', 'downgrade', 'sell', 'underperform', 'recession', 'crisis', 'risk', 'danger', 'threat', 'worry', 'concern', 'fear', 'panic', 'sell-off', 'correction', 'bear market', 'volatility', 'uncertainty', 'downturn', 'slump', 'dip'
    ];

    const lowerText = text.toLowerCase();
    const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
    const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;

    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
  }

  async getNewsSummary(): Promise<{
    totalArticles: number;
    categories: { [key: string]: number };
    sentiment: { [key: string]: number };
    topTickers: { [key: string]: number };
  }> {
    try {
      const allNews = await this.fetchAllNews();
      
      const categories: { [key: string]: number } = {};
      const sentiment: { [key: string]: number } = { positive: 0, negative: 0, neutral: 0 };
      const topTickers: { [key: string]: number } = {};

      allNews.forEach(article => {
        // Count categories
        categories[article.category] = (categories[article.category] || 0) + 1;
        
        // Count sentiment
        if (article.sentiment) {
          sentiment[article.sentiment]++;
        }
        
        // Count tickers
        article.tickers?.forEach(ticker => {
          topTickers[ticker] = (topTickers[ticker] || 0) + 1;
        });
      });

      return {
        totalArticles: allNews.length,
        categories,
        sentiment,
        topTickers
      };
    } catch (error) {
      console.error('Error getting news summary:', error);
      return {
        totalArticles: 0,
        categories: {},
        sentiment: { positive: 0, negative: 0, neutral: 0 },
        topTickers: {}
      };
    }
  }

  // Method to refresh news sources
  async refreshSources(): Promise<void> {
    // This could be used to dynamically update news sources
    // or refresh cached data
  }
}

export const newsService = new NewsService();
export default newsService;
