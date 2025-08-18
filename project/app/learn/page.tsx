'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, TrendingUp, Brain, Target, BarChart3, DollarSign, Clock, User, Calculator, Shield, Globe, PieChart, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Stock Market Fundamentals',
    description: 'Learn the basics of stock markets, how they work, and key terminology every investor should know.',
    difficulty: 'Beginner',
    duration: '2 hours',
    lessons: 8,
    icon: TrendingUp,
    color: 'blue',
    topics: ['Market Basics', 'Stock Types', 'Trading Hours', 'Market Participants', 'Order Types'],
    link : 'https://www.mygreatlearning.com/academy/learn-for-free/courses/financial-markets'
  },
  {
    id: 2,
    title: 'Technical Analysis Mastery',
    description: 'Master chart patterns, indicators, and technical analysis techniques used by professional traders.',
    difficulty: 'Intermediate',
    duration: '4 hours',
    lessons: 12,
    icon: BarChart3,
    color: 'green',
    topics: ['Chart Patterns', 'RSI & MACD', 'Support & Resistance', 'Moving Averages', 'Volume Analysis'],
    link : 'https://cursa.app/en/free-course/technical-analysis-bdeb'
  },
  {
    id: 3,
    title: 'AI in Financial Markets',
    description: 'Understand how machine learning and AI are revolutionizing investment strategies and market analysis.',
    difficulty: 'Advanced',  
    duration: '3 hours',
    lessons: 10,
    icon: Brain,
    color: 'purple',
    topics: ['ML Algorithms', 'Predictive Models', 'Sentiment Analysis', 'Risk Management', 'Algorithmic Trading'],
    link : 'https://www.coursera.org/learn/introduction-to-generative-ai-in-finance'
  },
  {
    id: 4,
    title: 'Portfolio Management',
    description: 'Learn professional portfolio construction, diversification strategies, and risk management techniques.',
    difficulty: 'Intermediate',
    duration: '3 hours',
    lessons: 9,
    icon: Target,
    color: 'orange',
    topics: ['Asset Allocation', 'Diversification', 'Risk Assessment', 'Rebalancing', 'Performance Metrics'],
    link : 'https://www.udemy.com/course/portfolio-management/'
  }
];

const blogPosts = [
  {
    title: 'Understanding Market Volatility: A Beginner\'s Guide',
    excerpt: 'Market volatility can be intimidating for new investors. Learn what causes price swings and how to navigate volatile markets with confidence.',
    author: 'Aryan Wadhwa',
    readTime: '5 min read',
    date: 'Jan 15, 2025',
    category: 'Market Basics',
    content: `
      Market volatility refers to the degree of price fluctuation in financial markets over time. It's a natural characteristic of markets that can be influenced by various factors including economic news, geopolitical events, earnings reports, and investor sentiment.

      ## What Causes Market Volatility?

      1. **Economic Indicators**: GDP growth, inflation rates, unemployment data, and interest rate changes can significantly impact market movements.

      2. **Corporate Earnings**: Quarterly earnings reports often trigger significant price movements as investors react to company performance.

      3. **Geopolitical Events**: Wars, elections, trade disputes, and policy changes can create uncertainty and drive volatility.

      4. **Market Sentiment**: Fear and greed cycles, investor psychology, and market trends can amplify price movements.

      ## How to Navigate Volatile Markets

      ### Stay Informed but Don't Panic
      Keep up with market news and trends, but avoid making emotional decisions based on short-term fluctuations.

      ### Diversify Your Portfolio
      Spread investments across different asset classes, sectors, and geographic regions to reduce risk.

      ### Focus on Long-term Goals
      Remember your investment timeline and objectives. Short-term volatility often smooths out over longer periods.

      ### Use Dollar-Cost Averaging
      Invest a fixed amount regularly, regardless of market conditions, to reduce the impact of timing the market.

      ## Volatility as Opportunity

      While volatility can be scary, it also creates opportunities. Market downturns can present buying opportunities for quality stocks at discounted prices. The key is to have a well-thought-out strategy and stick to it.

      Remember, volatility is not inherently good or bad - it's simply a characteristic of markets that successful investors learn to navigate and even leverage to their advantage.
    `,
    link: 'https://www.investopedia.com/terms/v/volatility.asp'
  },
  {
    title: 'The Rise of AI in Stock Market Prediction',
    excerpt: 'Artificial Intelligence is transforming how we analyze and predict stock movements. Discover the latest developments in AI-powered trading.',
    author: 'Dipesh Gupta',
    readTime: '7 min read',
    date: 'Jan 12, 2025',
    category: 'Technology',
    content: `
      Artificial Intelligence and Machine Learning have revolutionized financial markets, offering unprecedented capabilities in data analysis, pattern recognition, and prediction accuracy. Today's AI systems can process vast amounts of information faster than ever before.

      ## How AI Transforms Trading

      ### Pattern Recognition
      AI algorithms excel at identifying complex patterns in historical price data, trading volumes, and market indicators that human analysts might miss.

      ### Sentiment Analysis
      Natural Language Processing (NLP) enables AI to analyze news articles, social media posts, and financial reports to gauge market sentiment.

      ### High-Frequency Trading
      AI-powered systems can execute thousands of trades per second, capitalizing on tiny price differences and market inefficiencies.

      ## Popular AI Techniques in Finance

      ### Machine Learning Models
      - **Random Forest**: Excellent for handling large datasets with multiple variables
      - **Neural Networks**: Great for detecting non-linear patterns
      - **Support Vector Machines**: Effective for classification problems

      ### Deep Learning Applications
      - **LSTM Networks**: Ideal for time series prediction
      - **Convolutional Neural Networks**: Used for chart pattern analysis
      - **Transformer Models**: Applied to financial text analysis

      ## Benefits and Limitations

      ### Advantages
      - 24/7 market monitoring
      - Emotion-free decision making
      - Processing of massive datasets
      - Consistent strategy execution

      ### Limitations
      - Black swan events
      - Over-optimization risks
      - Market regime changes
      - Regulatory concerns

      ## The Future of AI Trading

      As AI technology continues to advance, we can expect even more sophisticated trading strategies, better risk management, and improved market efficiency. However, the human element remains crucial for strategy development, risk oversight, and ethical considerations.

      The integration of AI in finance is not about replacing human judgment but augmenting it with powerful analytical capabilities.
    `
  },
  {
    title: 'Building Your First Investment Portfolio - A Step-by-Step Guide',
    excerpt: 'Step-by-step guide to creating a diversified investment portfolio that aligns with your financial goals and risk tolerance.',
    author: 'Aryan Wadhwa',
    readTime: '8 min read',
    date: 'Jan 10, 2025',
    category: 'Investment Strategy',
    content: `
      Building your first investment portfolio can seem overwhelming, but with the right approach and understanding of key principles, you can create a solid foundation for your financial future.

      ## Step 1: Define Your Investment Goals

      Before selecting any investments, clearly define what you're investing for:
      - **Retirement planning**
      - **Buying a home**
      - **Education funding**
      - **Wealth building**
      - **Emergency fund**

      Each goal may have different time horizons and risk tolerance levels.

      ## Step 2: Assess Your Risk Tolerance

      ### Conservative Investor
      - Prefers stable, predictable returns
      - Cannot afford significant losses
      - Shorter investment timeline

      ### Moderate Investor
      - Willing to accept some volatility for potentially higher returns
      - Balanced approach to risk and reward
      - Medium to long-term timeline

      ### Aggressive Investor
      - Comfortable with high volatility
      - Long investment timeline
      - Seeking maximum growth potential

      ## Step 3: Choose Your Asset Allocation

      A typical balanced portfolio might include:

      ### Stocks (60-70%)
      - **Large-cap stocks**: Stable, established companies
      - **Mid-cap stocks**: Growing companies with potential
      - **Small-cap stocks**: Higher growth potential, more risk
      - **International stocks**: Geographic diversification

      ### Bonds (20-30%)
      - **Government bonds**: Low risk, stable returns
      - **Corporate bonds**: Higher yields than government bonds
      - **Municipal bonds**: Tax-advantaged for some investors

      ### Alternative Investments (5-15%)
      - **REITs**: Real estate exposure
      - **Commodities**: Inflation hedge
      - **Cryptocurrency**: High-risk, high-reward (small allocation)

      ## Step 4: Select Specific Investments

      ### Individual Stocks
      Research companies thoroughly, considering:
      - Financial health
      - Competitive advantages
      - Growth prospects
      - Valuation

      ### Exchange-Traded Funds (ETFs)
      - Instant diversification
      - Lower fees than mutual funds
      - Easy to trade

      ### Mutual Funds
      - Professional management
      - Diversification
      - Automatic reinvestment

      ## Step 5: Implementation Strategy

      ### Dollar-Cost Averaging
      Invest a fixed amount regularly, regardless of market conditions. This strategy helps reduce the impact of market volatility.

      ### Gradual Entry
      If you have a large sum to invest, consider entering the market gradually over 3-6 months.

      ## Step 6: Monitor and Rebalance

      ### Regular Reviews
      Check your portfolio quarterly to ensure it aligns with your goals.

      ### Rebalancing
      Sell high-performing assets and buy underperforming ones to maintain your target allocation.

      ### Tax Considerations
      - Use tax-advantaged accounts (401k, IRA, Roth IRA)
      - Consider tax-loss harvesting
      - Hold investments for over a year to qualify for long-term capital gains rates

      ## Common Mistakes to Avoid

      1. **Lack of diversification**
      2. **Emotional investing**
      3. **Trying to time the market**
      4. **Ignoring fees and expenses**
      5. **Not having a long-term plan**

      ## Sample Portfolio Allocations

      ### Conservative Portfolio (Age 60+)
      - 40% Stocks, 50% Bonds, 10% Alternatives

      ### Moderate Portfolio (Age 40-60)
      - 60% Stocks, 30% Bonds, 10% Alternatives

      ### Aggressive Portfolio (Age 20-40)
      - 80% Stocks, 15% Bonds, 5% Alternatives

      Remember, these are general guidelines. Your specific situation may require a different approach. Consider consulting with a financial advisor to develop a personalized strategy.

      Building a portfolio is not a one-time event but an ongoing process that evolves with your life circumstances, goals, and market conditions.
    `
  }
];

const resources = [
  {
    title: 'Stock Market Glossary',
    description: 'Comprehensive dictionary of investment terms and definitions',
    icon: BookOpen,
    link: 'https://www.webnots.com/100-essential-stock-market-terms-for-beginners/'
  },
  {
    title: 'Investment Calculators',
    description: 'Tools for compound interest, retirement planning, and risk assessment',
    icon: Calculator,
    link: 'https://www.calculator.net/investment-calculator.html'
  },
  {
    title: 'Market Data & Charts',
    description: 'Real-time market data, interactive charts, and technical analysis tools',
    icon: BarChart3,
    link: 'https://www.tradingview.com/markets/'
  }
];

const stockMarketBasics = [
  {
    title: 'What is a Stock?',
    content: 'A stock represents ownership in a company. When you buy a stock, you\'re purchasing a small piece of that company, called a share. As a shareholder, you have a claim on the company\'s assets and earnings.',
    icon: TrendingUp,
    color: 'blue'
  },
  {
    title: 'How Stock Markets Work',
    content: 'Stock markets are platforms where buyers and sellers come together to trade shares of publicly listed companies. The price of a stock is determined by supply and demand - when more people want to buy a stock, its price goes up.',
    icon: Globe,
    color: 'green'
  },
  {
    title: 'Types of Stocks',
    content: 'Common stocks give you voting rights and potential dividends. Preferred stocks offer fixed dividends but usually no voting rights. Growth stocks focus on capital appreciation, while value stocks are undervalued relative to their fundamentals.',
    icon: PieChart,
    color: 'purple'
  },
  {
    title: 'Risk and Return',
    content: 'Generally, higher potential returns come with higher risk. Stocks are riskier than bonds but offer higher potential returns. Diversification across different stocks and sectors can help manage risk.',
    icon: Shield,
    color: 'orange'
  }
];

const tradingBasics = [
  {
    title: 'Market Orders vs Limit Orders',
    content: 'Market orders execute immediately at the current market price. Limit orders only execute at a specified price or better, giving you more control but no guarantee of execution.',
    icon: CheckCircle,
    color: 'blue'
  },
  {
    title: 'Bid and Ask Prices',
    content: 'The bid price is what buyers are willing to pay, while the ask price is what sellers are asking for. The difference between them is called the spread, which represents the broker\'s profit.',
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Trading Hours',
    content: 'Regular market hours are 9:30 AM to 4:00 PM ET, Monday through Friday. Pre-market trading (4:00 AM - 9:30 AM) and after-hours trading (4:00 PM - 8:00 PM) are also available.',
    icon: Clock,
    color: 'purple'
  },
  {
    title: 'Stop Loss and Take Profit',
    content: 'Stop loss orders automatically sell your stock if it falls to a certain price, limiting your losses. Take profit orders automatically sell when the stock reaches your target price.',
    icon: Target,
    color: 'orange'
  }
];

export default function LearnPage() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900 rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-800 dark:text-purple-200 text-sm font-medium">
              Financial Education Hub
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Master the Art of Investing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive courses, expert insights, and practical guides to help you become a successful investor. 
            Learn from market fundamentals to advanced AI-powered trading strategies.
          </p>
        </motion.div>

        {/* Stock Market Basics */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stock Market Basics</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Essential concepts every investor needs to understand before starting their investment journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stockMarketBasics.map((basic, index) => (
              <motion.div
                key={basic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${basic.color}-100 dark:bg-${basic.color}-900 rounded-lg flex items-center justify-center mb-4`}>
                      <basic.icon className={`h-6 w-6 text-${basic.color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{basic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{basic.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trading Basics */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trading Basics</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn the fundamental mechanics of how stock trading works
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradingBasics.map((basic, index) => (
              <motion.div
                key={basic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${basic.color}-100 dark:bg-${basic.color}-900 rounded-lg flex items-center justify-center mb-4`}>
                      <basic.icon className={`h-6 w-6 text-${basic.color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{basic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{basic.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Structured learning paths designed to take you from beginner to expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-${course.color}-100 dark:bg-${course.color}-900 rounded-lg flex items-center justify-center`}>
                        <course.icon className={`h-6 w-6 text-${course.color}-600`} />
                      </div>
                      <Badge
                        variant={
                          course.difficulty === 'Beginner' ? 'secondary' :
                          course.difficulty === 'Intermediate' ? 'default' : 'destructive'
                        }
                      >
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.lessons} lessons
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                     <Link href={course.link} target="_blank" className="w-full">
                      <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Start Learning
                      </Button>
                    </Link>
                  
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Expert analysis, market insights, and educational content from our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <>
                      <div
                       className="w-full group-hover:text-blue transition-colors flex items-center justify-center mt-4">
                       <a href="/blog-posts" className="text-blue-400 hover:underline">Read Full Article </a>
                      </div>
                    </>
                 
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Essential Resources</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tools and references to support your investment journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={resource.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <resource.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-gray-600 to-gray-1200 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated with Market Insights</h2>
              <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
                Get weekly market analysis, investment tips, and educational content delivered to your inbox. 
                Join thousands of investors who trust our insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-100 placeholder-gray-500"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-100  mt-4">
                No spam, unsubscribe at any time. Read our <a href="/privacy" className="text-blue-400 hover:underline" >privacy policy</a> 
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}