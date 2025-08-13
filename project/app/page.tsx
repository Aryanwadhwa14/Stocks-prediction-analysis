'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Brain, BarChart3, MessageSquare, ArrowRight, Target, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockStockData } from '@/lib/mockData';
import { Analytics } from "@vercel/analytics/next"

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning models analyze market patterns and historical data to provide accurate stock predictions with confidence scores.'
  },
  {
    icon: BarChart3,
    title: 'Technical Analysis',
    description: 'Comprehensive technical indicators including RSI, MACD, Bollinger Bands, and moving averages to support your investment decisions.'
  },
  {
    icon: MessageSquare,
    title: 'AI Stock Advisor',
    description: 'Chat with our intelligent assistant powered by Google Gemini AI to get personalized investment advice and market insights.'
  },
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Get specific buy/sell/hold recommendations with target prices and confidence levels for better portfolio management.'
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Understand the risk profile of your investments with detailed analysis and risk-adjusted recommendations.'
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Stay updated with the latest market trends, news analysis, and real-time stock performance metrics.'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                AI-Powered Stock Analysis Platform
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Make{' '}
              <motion.span
                initial={{ backgroundPosition: '0%' }}
                animate={{ backgroundPosition: '100%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                Smarter Investments
              </motion.span>
              <br />
              with AI Technology
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of machine learning and artificial intelligence to predict stock movements, 
              analyze market trends, and make data-driven investment decisions with confidence.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/predict">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Predicting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/learn">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose StockAI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with comprehensive market analysis 
              to give you the edge in stock trading and investment decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Predictions Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Live Stock Predictions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See our AI predictions in action with real-time analysis and confidence scores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStockData.slice(0, 6).map((stock, index) => (
              <motion.div
                key={stock.symbol}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stock.symbol}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          stock.prediction === 'BUY'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : stock.prediction === 'SELL'
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {stock.prediction}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Current Price:</span>
                        <span className="font-semibold">${stock.currentPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Target Price:</span>
                        <span className="font-semibold">${stock.targetPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Confidence:</span>
                        <span className="font-semibold text-blue-600">{stock.confidence}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Change:</span>
                        <span className={`font-semibold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/predict">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Predictions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Trading Strategy?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of investors who are already using AI to make better investment decisions. 
              Start your journey with StockAI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/analysis">
                <Button variant="outline" size="lg" className="px-8">
                  Explore Analysis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}