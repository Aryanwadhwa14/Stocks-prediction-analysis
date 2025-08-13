'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Newspaper, Brain, Activity, Target, AlertTriangle, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { mockNews, mockTechnicalIndicators, mockStockData } from '@/lib/mockData';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function AnalysisPage() {
  const marketSentiment = 72;
  const fearGreedIndex = 65;

  // Mock data for the comparative chart (similar to the provided image)
  const comparativeData = [
    { month: 'Jan', Nasdaq: 30, SP500: 40, DowJones: 50 },
    { month: 'Feb', Nasdaq: 35, SP500: 45, DowJones: 55 },
    { month: 'Mar', Nasdaq: 0, SP500: 0, DowJones: 0 },
    { month: 'Apr', Nasdaq: 15, SP500: 20, DowJones: 25 },
    { month: 'May', Nasdaq: 25, SP500: 30, DowJones: 35 },
    { month: 'Jun', Nasdaq: 40, SP500: 35, DowJones: 40 },
    { month: 'Jul', Nasdaq: 55, SP500: 45, DowJones: 45 },
    { month: 'Aug', Nasdaq: 65, SP500: 50, DowJones: 50 },
    { month: 'Sep', Nasdaq: 75, SP500: 55, DowJones: 55 },
    { month: 'Oct', Nasdaq: 85, SP500: 60, DowJones: 60 },
    { month: 'Nov', Nasdaq: 90, SP500: 65, DowJones: 65 },
    { month: 'Dec', Nasdaq: 95, SP500: 70, DowJones: 70 },
    { month: 'Jan', Nasdaq: 100, SP500: 75, DowJones: 75 },
    { month: 'Feb', Nasdaq: 105, SP500: 78, DowJones: 76 },
    { month: 'Mar', Nasdaq: 95, SP500: 76, DowJones: 76 },
  ];

  // Mock data for individual stock performance
  const stockPerformanceData = [
    { date: 'Mon', AAPL: 150, TSLA: 180, GOOGL: 2800, MSFT: 320 },
    { date: 'Tue', AAPL: 152, TSLA: 185, GOOGL: 2820, MSFT: 325 },
    { date: 'Wed', AAPL: 148, TSLA: 175, GOOGL: 2780, MSFT: 318 },
    { date: 'Thu', AAPL: 155, TSLA: 190, GOOGL: 2850, MSFT: 330 },
    { date: 'Fri', AAPL: 158, TSLA: 195, GOOGL: 2880, MSFT: 335 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 dark:text-green-200 text-sm font-medium">
              Comprehensive Market Analysis
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Market Analysis Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get deep insights into market trends, technical indicators, sentiment analysis, and AI-powered 
            recommendations to make informed investment decisions.
          </p>
        </motion.div>

        {/* Main Market Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <LineChart className="h-6 w-6 mr-2 text-blue-600" />
                Major Indices Performance Comparison
              </CardTitle>
              <CardDescription>
                Percentage gains of Nasdaq, S&P 500, and Dow Jones over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={comparativeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="Nasdaq" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="SP500" 
                      stroke="#F97316" 
                      strokeWidth={3}
                      dot={{ fill: '#F97316', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#F97316', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="DowJones" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              
              {/* Performance Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Nasdaq</span>
                    <span className="text-lg font-bold text-blue-600">+94.99%</span>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-900 dark:text-orange-100">S&P 500</span>
                    <span className="text-lg font-bold text-orange-600">+76.12%</span>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-900 dark:text-green-100">Dow Jones</span>
                    <span className="text-lg font-bold text-green-600">+76.05%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Individual Stock Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
                Top Stock Performance
              </CardTitle>
              <CardDescription>
                Weekly performance of major tech stocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stockPerformanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="date" 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="AAPL" 
                      stackId="1"
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="TSLA" 
                      stackId="1"
                      stroke="#EF4444" 
                      fill="#EF4444" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="GOOGL" 
                      stackId="1"
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="MSFT" 
                      stackId="1"
                      stroke="#8B5CF6" 
                      fill="#8B5CF6" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Technical Indicators */}
          <div className="lg:col-span-2 space-y-6">
            {/* Technical Indicators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-600" />
                    Technical Indicators
                  </CardTitle>
                  <CardDescription>
                    Key technical analysis indicators for market assessment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTechnicalIndicators.map((indicator, index) => (
                      <motion.div
                        key={indicator.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {indicator.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Value: {indicator.value}
                          </p>
                        </div>
                        <Badge
                          variant={
                            indicator.signal === 'Bullish' ? 'default' : 
                            indicator.signal === 'Bearish' ? 'destructive' : 'secondary'
                          }
                          className={
                            indicator.signal === 'Bullish' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                            indicator.signal === 'Bearish' ? 'bg-red-100 text-red-800 hover:bg-red-100' : 
                            'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                          }
                        >
                          {indicator.signal}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market News */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Newspaper className="h-5 w-5 mr-2 text-orange-600" />
                    Latest Market News
                  </CardTitle>
                  <CardDescription>
                    Breaking news and updates affecting market sentiment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.map((news, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-r-lg transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {news.title}
                          </h4>
                          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                            {news.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {news.summary}
                        </p>
                        <p className="text-xs text-blue-600 font-medium">
                          {news.source}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-purple-600" />
                    AI Market Insights
                  </CardTitle>
                  <CardDescription>
                    Advanced AI analysis and predictions based on multiple data sources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Market Trend Analysis
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Our AI models indicate a moderately bullish market sentiment with strong technology sector performance. 
                      Recent earnings reports suggest continued growth in cloud computing and AI-related stocks. 
                      Volatility is expected to decrease over the next 2-3 weeks.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      Sector Recommendations
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Technology and healthcare sectors show strong fundamentals. Renewable energy stocks 
                      are gaining momentum due to policy changes. Consider diversification across these sectors 
                      for optimal risk-adjusted returns.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                      Risk Factors
                    </h4>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      Monitor inflation indicators and Federal Reserve policy announcements. 
                      Geopolitical tensions may impact energy and commodity prices. 
                      Maintain adequate cash reserves for market opportunities.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                      Trading Strategy
                    </h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Current market conditions favor a balanced approach with 60% growth stocks and 40% value stocks. 
                      Consider implementing dollar-cost averaging for volatile positions. 
                      Set stop-losses at 8-10% below entry points.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Market Sentiment & Quick Stats */}
          <div className="space-y-6">
            {/* Market Sentiment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Market Sentiment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Overall Sentiment</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{marketSentiment}%</span>
                    </div>
                    <Progress value={marketSentiment} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Moderately Bullish</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Fear & Greed Index</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{fearGreedIndex}%</span>
                    </div>
                    <Progress value={fearGreedIndex} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Neutral to Greedy</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-600" />
                    Top AI Picks
                  </CardTitle>
                  <CardDescription>Highest confidence predictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockStockData
                      .filter(stock => stock.prediction === 'BUY')
                      .sort((a, b) => b.confidence - a.confidence)
                      .slice(0, 3)
                      .map((stock, index) => (
                        <motion.div
                          key={stock.symbol}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.4 }}
                          className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700"
                        >
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {stock.symbol}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ${stock.currentPrice}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-600">
                              {stock.confidence}% confidence
                            </p>
                            <p className="text-xs text-gray-500">
                              Target: ${stock.targetPrice}
                            </p>
                          </div>
                        </motion.div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                    Market Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 text-sm">
                      High Volatility Warning
                    </h4>
                    <p className="text-xs text-red-800 dark:text-red-200 mt-1">
                      TSLA showing unusual price swings. Consider reducing position sizes.
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">
                      Earnings Season Alert
                    </h4>
                    <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                      Tech giants reporting earnings this week. Expect increased volatility.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm">
                      Opportunity Alert
                    </h4>
                    <p className="text-xs text-green-800 dark:text-green-200 mt-1">
                      AI and cloud computing stocks showing strong fundamentals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Predictions</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</span>
                    <span className="font-semibold text-green-600">84.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Confidence</span>
                    <span className="font-semibold">78.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Market Coverage</span>
                    <span className="font-semibold">500+ Stocks</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Educational Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Understanding Technical Analysis</CardTitle>
              <CardDescription>
                Learn how these indicators help predict market movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">RSI (Relative Strength Index)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Measures overbought/oversold conditions. Values above 70 suggest overbought, 
                    below 30 suggest oversold conditions.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">MACD</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Moving Average Convergence Divergence shows the relationship between 
                    two moving averages, indicating momentum changes.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">Moving Averages</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Smoothed price data that helps identify trend direction. 
                    50-day and 200-day averages are commonly watched levels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>Disclaimer:</strong> All analysis and predictions shown are for educational purposes using simulated data. 
            Market conditions can change rapidly. Always conduct thorough research and consider consulting with financial 
            professionals before making investment decisions. Past performance does not guarantee future results.
          </p>
        </motion.div>
      </div>
    </div>
  );
}