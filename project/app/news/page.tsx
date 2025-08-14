'use client';

import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, BarChart3, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NewsAggregator from '@/components/news/NewsAggregator';

const features = [
  {
    icon: TrendingUp,
    title: 'Real-time Updates',
    description: 'Get the latest financial news as it happens from multiple trusted sources.'
  },
  {
    icon: BarChart3,
    title: 'Sentiment Analysis',
    description: 'AI-powered sentiment analysis to understand market mood and trends.'
  },
  {
    icon: Globe,
    title: 'Multiple Sources',
    description: 'Aggregated news from Reuters, Bloomberg, CNBC, MarketWatch, and more.'
  },
  {
    icon: Zap,
    title: 'Smart Filtering',
    description: 'Filter news by category, sentiment, ticker symbols, and time range.'
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-6">
            <Newspaper className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
              Real-time Financial News
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Ahead with Market News
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get comprehensive financial news coverage with AI-powered sentiment analysis, 
            real-time updates, and smart filtering to make informed investment decisions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* News Aggregator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <NewsAggregator />
        </motion.div>
      </div>
    </div>
  );
}
