'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, BarChart3, Target, DollarSign, AlertCircle, Star, ArrowRight, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockStockData } from '@/lib/mockData';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (!session) {
    return null;
  }

  // Mock portfolio data
  const portfolioValue = 125430.50;
  const todayChange = 2340.75;
  const todayChangePercent = 1.9;
  const weeklyChange = 5.2;
  const monthlyChange = 12.8;

  // Mock chart data for portfolio performance
  const portfolioData = [
    { date: 'Mon', value: 120000, change: 0 },
    { date: 'Tue', value: 122000, change: 1.67 },
    { date: 'Wed', value: 121500, change: -0.41 },
    { date: 'Thu', value: 123000, change: 1.23 },
    { date: 'Fri', value: 125430, change: 1.98 },
  ];

  // Mock market indices data
  const marketData = [
    { date: 'Mon', SP500: 100, NASDAQ: 100, DOW: 100 },
    { date: 'Tue', SP500: 101, NASDAQ: 102, DOW: 99.5 },
    { date: 'Wed', SP500: 100.5, NASDAQ: 101.5, DOW: 99 },
    { date: 'Thu', SP500: 102, NASDAQ: 103, DOW: 100.5 },
    { date: 'Fri', SP500: 103, NASDAQ: 104.5, DOW: 101 },
  ];

  const watchlist = mockStockData.slice(0, 5);
  const topGainers = mockStockData.filter(stock => stock.changePercent > 0).slice(0, 3);
  const recentPredictions = mockStockData.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900/50 dark:to-blue-900/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {session.user?.name || 'Investor'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Here's your investment overview for today
              </p>
            </div>
            <div className="hidden md:flex space-x-3">
              <Link href="/predict">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  New Prediction
                </Button>
              </Link>
              <Link href="/analysis">
                <Button variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Target className="h-4 w-4 mr-2" />
                  Market Analysis
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Overview */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Portfolio Value</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${portfolioValue.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className={`flex items-center mt-2 ${todayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">
                      ${Math.abs(todayChange).toLocaleString()} ({Math.abs(todayChangePercent)}%)
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Weekly Performance</p>
                      <p className="text-2xl font-bold text-green-600">+{weeklyChange}%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Outperforming market by 2.1%
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Return</p>
                      <p className="text-2xl font-bold text-blue-600">+{monthlyChange}%</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Strong momentum this month
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Success Rate</p>
                      <p className="text-2xl font-bold text-purple-600">87%</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Predictions accuracy rate
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Performance Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="h-5 w-5 mr-2 text-blue-600" />
                Portfolio Performance
              </CardTitle>
              <CardDescription>Your portfolio value over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={portfolioData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#9CA3AF' }}
                      formatter={(value: any) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Predictions */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Predictions</CardTitle>
                    <CardDescription>Your latest AI-powered stock analysis</CardDescription>
                  </div>
                  <Link href="/predict">
                    <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      View All
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPredictions.map((stock, index) => (
                      <motion.div
                        key={stock.symbol}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-blue-600">{stock.symbol}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{stock.symbol}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ${stock.currentPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              stock.prediction === 'BUY' ? 'default' : 
                              stock.prediction === 'SELL' ? 'destructive' : 'secondary'
                            }
                            className={
                              stock.prediction === 'BUY' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                              stock.prediction === 'SELL' ? 'bg-red-100 text-red-800 hover:bg-red-100' : 
                              'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                            }
                          >
                            {stock.prediction}
                          </Badge>
                          <span className="text-sm font-medium text-blue-600">
                            {stock.confidence}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Top Gainers */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Top Gainers Today
                  </CardTitle>
                  <CardDescription>Best performing stocks in your watchlist</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topGainers.map((stock, index) => (
                      <motion.div
                        key={stock.symbol}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-green-600">{stock.symbol}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{stock.symbol}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ${stock.currentPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">
                            +{stock.changePercent.toFixed(2)}%
                          </p>
                          <p className="text-sm text-green-500">
                            +${stock.change.toFixed(2)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Watchlist */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-500" />
                      Watchlist
                    </CardTitle>
                    <CardDescription>Stocks you're monitoring</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Manage
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {watchlist.map((stock, index) => (
                      <motion.div
                        key={stock.symbol}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-center justify-between py-2"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">
                            {stock.symbol}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            ${stock.currentPrice.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${
                            stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                          </p>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              stock.prediction === 'BUY' ? 'border-green-200 text-green-700' :
                              stock.prediction === 'SELL' ? 'border-red-200 text-red-700' :
                              'border-yellow-200 text-yellow-700'
                            }`}
                          >
                            {stock.prediction}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* AI Insights */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                    AI Insights
                  </CardTitle>
                  <CardDescription>Personalized recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">
                      Portfolio Optimization
                    </h4>
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      Consider rebalancing your tech allocation. Current: 65%, Recommended: 55%
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-1">
                      Opportunity Alert
                    </h4>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      Healthcare stocks showing strong momentum. Consider increasing exposure.
                    </p>
                  </div>

                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 text-sm mb-1">
                      Risk Warning
                    </h4>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      High correlation detected between TSLA and NVDA in your portfolio.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Market Summary */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle>Market Summary</CardTitle>
                  <CardDescription>Overall market performance today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">S&P 500</span>
                    <span className="text-sm font-medium text-green-600">+0.8%</span>
                  </div>
                  <Progress value={80} className="h-1" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">NASDAQ</span>
                    <span className="text-sm font-medium text-green-600">+1.2%</span>
                  </div>
                  <Progress value={70} className="h-1" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">DOW</span>
                    <span className="text-sm font-medium text-red-600">-0.3%</span>
                  </div>
                  <Progress value={45} className="h-1" />

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Market sentiment: <span className="font-medium text-green-600">Bullish</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}