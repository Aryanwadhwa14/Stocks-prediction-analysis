'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, RefreshCw, TrendingUp, Newspaper, BarChart3, Building2, Brain } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewsCard from './NewsCard';
import { NewsArticle, NewsFilter } from '@/lib/newsService';
import { useToast } from '@/hooks/use-toast';

interface NewsSummary {
  totalArticles: number;
  categories: { [key: string]: number };
  sentiment: { [key: string]: number };
  topTickers: { [key: string]: number };
}

export default function NewsAggregator() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [summary, setSummary] = useState<NewsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<NewsFilter>({
    category: 'all',
    sentiment: undefined,
    dateRange: 'all'
  });
  const [activeTab, setActiveTab] = useState('all');
  const { toast } = useToast();

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news');
      const data = await response.json();
      
      if (data.success) {
        setNews(data.data);
        setFilteredNews(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: "Error",
        description: "Failed to fetch news. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'summary' })
      });
      const data = await response.json();
      
      if (data.success) {
        setSummary(data.data);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  }, []);

  const refreshNews = async () => {
    setRefreshing(true);
    await fetchNews();
    await fetchSummary();
    setRefreshing(false);
    toast({
      title: "Success",
      description: "News refreshed successfully!",
    });
  };

  useEffect(() => {
    fetchNews();
    fetchSummary();
  }, [fetchNews, fetchSummary]);

  useEffect(() => {
    let filtered = [...news];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tickers?.some(ticker => 
          ticker.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(article => article.category === filters.category);
    }

    // Apply sentiment filter
    if (filters.sentiment) {
      filtered = filtered.filter(article => article.sentiment === filters.sentiment);
    }

    // Apply date range filter
    if (filters.dateRange && filters.dateRange !== 'all') {
      const now = new Date();
      const ranges = {
        today: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000
      };
      
      if (ranges[filters.dateRange as keyof typeof ranges]) {
        const cutoff = new Date(now.getTime() - ranges[filters.dateRange as keyof typeof ranges]);
        filtered = filtered.filter(article => article.publishedAt > cutoff);
      }
    }

    setFilteredNews(filtered);
  }, [news, searchQuery, filters]);

  const handleTickerClick = (ticker: string) => {
    setSearchQuery(ticker);
    setActiveTab('all');
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      markets: BarChart3,
      business: Building2,
      finance: TrendingUp,
      analysis: Brain
    };
    return icons[category] || Newspaper;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Financial News
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Stay updated with the latest market news and insights
          </p>
        </div>
        <Button
          onClick={refreshNews}
          disabled={refreshing}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh News'}
        </Button>
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Newspaper className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Articles</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {summary.totalArticles}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {Object.entries(summary.sentiment).map(([sentiment, count]) => (
            <Card key={sentiment}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    sentiment === 'positive' ? 'bg-green-100 text-green-600' :
                    sentiment === 'negative' ? 'bg-red-100 text-red-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {sentiment === 'positive' ? <TrendingUp className="h-5 w-5" /> :
                     sentiment === 'negative' ? <TrendingUp className="h-5 w-5 rotate-180" /> :
                     <BarChart3 className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{sentiment}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search news by title, description, or ticker..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select
                value={filters.category}
                onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="markets">Markets</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.sentiment}
                onValueChange={(value) => setFilters(prev => ({ ...prev, sentiment: value as any }))}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sentiment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sentiments</SelectItem>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.dateRange}
                onValueChange={(value) => setFilters(prev => ({ ...prev, dateRange: value as any }))}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="markets">Markets</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        {['all', 'markets', 'business', 'finance', 'analysis'].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredNews
                  .filter(article => tab === 'all' || article.category === tab)
                  .map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      onTickerClick={handleTickerClick}
                    />
                  ))}
              </AnimatePresence>
            </div>
            
            {filteredNews.filter(article => tab === 'all' || article.category === tab).length === 0 && (
              <div className="text-center py-12">
                <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  No news found for {tab === 'all' ? 'the selected filters' : tab}.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
