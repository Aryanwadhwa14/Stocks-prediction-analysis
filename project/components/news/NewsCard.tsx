'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, User, TrendingUp, TrendingDown, Minus, Hash } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NewsArticle } from '@/lib/newsService';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  article: NewsArticle;
  onTickerClick?: (ticker: string) => void;
  className?: string;
}

export default function NewsCard({ article, onTickerClick, className = '' }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'negative':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800';
      case 'negative':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      markets: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
      business: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800',
      finance: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800',
      analysis: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-200 border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg leading-tight line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                         onClick={() => setIsExpanded(!isExpanded)}>
                {article.title}
              </CardTitle>
              <CardDescription className="mt-2 line-clamp-2">
                {article.description}
              </CardDescription>
            </div>
            {article.imageUrl && (
              <div className="flex-shrink-0">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-16 h-16 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{formatDistanceToNow(article.publishedAt, { addSuffix: true })}</span>
              </div>
              {article.author && (
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              {article.sentiment && (
                <Badge 
                  variant="outline" 
                  className={`${getSentimentColor(article.sentiment)} flex items-center gap-1`}
                >
                  {getSentimentIcon(article.sentiment)}
                  {article.sentiment}
                </Badge>
              )}
              <Badge 
                variant="outline" 
                className={getCategoryColor(article.category)}
              >
                {article.category}
              </Badge>
            </div>
          </div>

          {/* Tickers */}
          {article.tickers && article.tickers.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tickers.map((ticker, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex items-center gap-1"
                  onClick={() => onTickerClick?.(ticker)}
                >
                  <Hash className="h-3 w-3" />
                  {ticker}
                </Badge>
              ))}
            </div>
          )}

          {/* Expanded Content */}
          {isExpanded && article.content && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
            >
              <div 
                className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Source: {article.source}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open(article.url, '_blank')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Read Full
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
