'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Target, BarChart3, LineChart } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockStockData, generateChartData } from '@/lib/mockData';

export default function PredictPage() {
  const [ticker, setTicker] = useState('');
  const [timeRange, setTimeRange] = useState('30');
  const [prediction, setPrediction] = useState<any>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (!ticker.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Find existing stock data or create mock data
    const existingStock = mockStockData.find(
      stock => stock.symbol.toLowerCase() === ticker.toUpperCase()
    );
    
    const predictionData = existingStock || {
      symbol: ticker.toUpperCase(),
      prediction: ['BUY', 'SELL', 'HOLD'][Math.floor(Math.random() * 3)] as 'BUY' | 'SELL' | 'HOLD',
      confidence: Math.floor(Math.random() * 30) + 70,
      currentPrice: Math.floor(Math.random() * 300) + 50,
      targetPrice: Math.floor(Math.random() * 350) + 100,
      change: (Math.random() - 0.5) * 20,
      changePercent: (Math.random() - 0.5) * 10
    };
    
    setPrediction(predictionData);
    setChartData(generateChartData(parseInt(timeRange)));
    setIsLoading(false);
  };

  const getPredictionIcon = (prediction: string) => {
    switch (prediction) {
      case 'BUY':
        return <TrendingUp className="h-6 w-6 text-green-600" />;
      case 'SELL':
        return <TrendingDown className="h-6 w-6 text-red-600" />;
      default:
        return <Minus className="h-6 w-6 text-yellow-600" />;
    }
  };

  const getPredictionColor = (prediction: string) => {
    switch (prediction) {
      case 'BUY':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'SELL':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
              AI Stock Prediction Engine
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stock Price Prediction
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enter a stock ticker symbol and timeframe to get AI-powered predictions with confidence scores, 
            technical analysis, and price targets based on advanced machine learning models.
          </p>
        </motion.div>

        {/* Prediction Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="mb-8 border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle>Make a Prediction</CardTitle>
              <CardDescription>
                Enter a stock ticker symbol (e.g., AAPL, TSLA, GOOGL) and select your analysis timeframe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter stock ticker (e.g., AAPL)"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value.toUpperCase())}
                    className="text-lg"
                  />
                </div>
                <div className="sm:w-48">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                      <SelectItem value="90">90 Days</SelectItem>
                      <SelectItem value="180">6 Months</SelectItem>
                      <SelectItem value="365">1 Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handlePredict}
                  disabled={!ticker.trim() || isLoading}
                  className="sm:w-32 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Predict'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Popular Stocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle>Popular Stocks</CardTitle>
              <CardDescription>Click on any stock to get instant predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['AAPL', 'TSLA', 'GOOGL', 'MSFT', 'AMZN', 'META', 'NVDA', 'NFLX'].map((stock) => (
                  <Button
                    key={stock}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setTicker(stock);
                      handlePredict();
                    }}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {stock}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prediction Results */}
        {prediction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Prediction Card */}
            <Card className="border-2 border-blue-200 dark:border-blue-700 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  {getPredictionIcon(prediction.prediction)}
                </div>
                <CardTitle className="text-3xl font-bold">
                  {prediction.symbol} Prediction
                </CardTitle>
                <CardDescription>
                  Based on {timeRange} days of market analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-2xl font-bold ${getPredictionColor(prediction.prediction)}`}>
                    <span>Recommended: {prediction.prediction}</span>
                    {prediction.prediction === 'BUY' && <TrendingUp className="ml-2 h-6 w-6" />}
                    {prediction.prediction === 'SELL' && <TrendingDown className="ml-2 h-6 w-6" />}
                    {prediction.prediction === 'HOLD' && <Minus className="ml-2 h-6 w-6" />}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    Confidence Level: <span className="font-semibold text-blue-600">{prediction.confidence}%</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Price</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${prediction.currentPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Target Price</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${prediction.targetPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Price Change</p>
                    <p className={`text-2xl font-bold ${prediction.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {prediction.change >= 0 ? '+' : ''}{prediction.change.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Change %</p>
                    <p className={`text-2xl font-bold ${prediction.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {prediction.changePercent >= 0 ? '+' : ''}{prediction.changePercent.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Chart */}
            <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="h-5 w-5 mr-2 text-blue-600" />
                  Price History & Trend Analysis
                </CardTitle>
                <CardDescription>
                  Historical price data and predicted trend for {prediction.symbol}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                      <Line
                        type="monotone"
                        dataKey="price"
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

            {/* Volume Chart */}
            <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                  Trading Volume Analysis
                </CardTitle>
                <CardDescription>
                  Volume patterns and market activity for {prediction.symbol}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                      <Area
                        type="monotone"
                        dataKey="volume"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  AI Insights & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Market Analysis</h4>
                  <p className="text-blue-800 dark:text-blue-200">
                    Based on technical indicators and market sentiment, {prediction.symbol} shows{' '}
                    {prediction.prediction === 'BUY' ? 'strong bullish signals' : 
                     prediction.prediction === 'SELL' ? 'bearish tendencies' : 'neutral momentum'}.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Risk Assessment</h4>
                  <p className="text-green-800 dark:text-green-200">
                    {prediction.confidence > 85 ? 'Low' : prediction.confidence > 70 ? 'Medium' : 'High'} risk investment 
                    with a confidence score of {prediction.confidence}%. Consider your risk tolerance before investing.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Trading Strategy</h4>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    {prediction.prediction === 'BUY' ? 
                      `Consider dollar-cost averaging for entry positions around $${prediction.currentPrice.toFixed(2)} with target at $${prediction.targetPrice.toFixed(2)}.` :
                      prediction.prediction === 'SELL' ?
                      'Consider taking profits or reducing positions. Set stop-loss orders to protect gains.' :
                      'Hold current positions and monitor for breakout signals above key resistance levels.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>Disclaimer:</strong> This is an educational platform using mock data for demonstration purposes. 
            All predictions and recommendations are simulated and should not be considered as professional financial advice. 
            Always conduct your own research and consult with financial advisors before making investment decisions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}