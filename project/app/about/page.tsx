'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp, Shield, Zap, Globe, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge'; 

const stats = [
  { label: 'Prediction Accuracy', value: 87, suffix: '%' },
  { label: 'Active Users', value: 10000, suffix: '+' },
  { label: 'Stocks Analyzed', value: 500, suffix: '+' },
  { label: 'Daily Predictions', value: 1200, suffix: '+' }
];

const features = [
  {
    icon: TrendingUp,
    title: 'Advanced ML Models',
    description: 'Our proprietary machine learning algorithms analyze historical data, market patterns, and sentiment to deliver highly accurate stock predictions.',
    details: [
      'LSTM networks for time series analysis',
      'Ensemble methods for improved accuracy',
      'Real-time model retraining and optimization',
      'Multi-factor analysis including technical and fundamental data'
    ]
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in risk assessment tools help you understand the potential risks and rewards of each investment decision.',
    details: [
      'Portfolio risk analysis and optimization',
      'Stop-loss and take-profit recommendations',
      'Volatility assessment for each prediction',
      'Correlation analysis across different assets'
    ]
  },
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Get instant market insights with our real-time data processing and analysis capabilities.',
    details: [
      'Live market data integration',
      'Instant news sentiment analysis',
      'Real-time technical indicator updates',
      'Automated alert system for significant changes'
    ]
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access predictions and analysis for stocks across major global markets and exchanges.',
    details: [
      'NYSE, NASDAQ, and international exchanges',
      'Multi-currency support and analysis',
      'Cross-market correlation insights',
      'Regional market trend analysis'
    ]
  }
];

const timeline = [
  {
    phase: 'Research & Development',
    title: 'Foundation Phase',
    period: 'Q1 2025',
    description: 'Deep research into ML models for financial prediction, market analysis, and algorithm development.',
    achievements: [
      'Developed initial LSTM-based prediction models',
      'Gathered and preprocessed historical market data',
      'Created fundamental analysis framework',
      'Established data pipeline architecture'
    ]
  },
  {
    phase: 'Prototype Development',
    title: 'MVP Creation',
    period: 'Q2 2025',
    description: 'Built the first working prototype with core prediction capabilities and basic user interface.',
    achievements: [
      'Launched beta version with 10 stock predictions',
      'Implemented basic technical analysis indicators',
      'Created responsive web interface',
      'Achieved 80% prediction accuracy in testing'
    ]
  },
  {
    phase: 'Platform Enhancement',
    title: 'Feature Expansion',
    period: 'Q3 2025',
    description: 'Enhanced the platform with advanced features, improved UI/UX, and expanded stock coverage.',
    achievements: [
      'Expanded to 500+ stock predictions',
      'Integrated real-time data feeds',
      'Added sentiment analysis capabilities',
      'Improved accuracy to 85%+'
    ]
  },
  {
    phase: 'AI Integration',
    title: 'Smart Assistant',
    period: 'Q4 2025',
    description: 'Integrated ML/NLP model for personalized investment advice and interactive user experience.',
    achievements: [
      'Deployed AI chatbot for investment guidance',
      'Added natural language query processing',
      'Implemented personalized recommendations',
      'Achieved 87% overall prediction accuracy'
    ]
  }
];

const technologies = [
  { name: 'Machine Learning', description: 'TensorFlow, PyTorch, Scikit-learn for model development', progress: 95 },
  { name: 'Data Processing', description: 'Pandas, NumPy, Apache Spark for big data analysis', progress: 90 },
  { name: 'Web Development', description: 'React, Next.js, TypeScript for frontend development', progress: 92 },
  { name: 'Backend Systems', description: 'Node.js, Python, PostgreSQL for robust infrastructure', progress: 88 },
  { name: 'Cloud Infrastructure', description: 'AWS, Docker, Kubernetes for scalable deployment', progress: 85 },
  { name: 'AI Integration', description: 'ML model, NLP, sentiment analysis', progress: 90 }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900/50 dark:to-blue-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-6">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
              About StockAI
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionizing Investment
            <br />
            with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            StockAI is an innovative platform that combines cutting-edge machine learning algorithms 
            with comprehensive market analysis to provide intelligent stock predictions and investment insights. 
            Our mission is to democratize access to advanced financial analysis tools that were once 
            available only to institutional investors.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    To make sophisticated AI-powered investment analysis accessible to individual investors, 
                    helping them make informed decisions with the same tools used by professional fund managers.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Democratize access to advanced financial analysis
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide transparent, data-driven investment insights
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Empower individuals to build wealth through informed investing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    To become the leading AI-powered investment platform that transforms how people 
                    approach stock market investing through technology, education, and intelligent automation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lead innovation in AI-driven financial technology
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Build a community of informed, successful investors
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Shape the future of personal wealth management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Platform Impact</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real numbers that demonstrate the effectiveness and reach of our AI-powered platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Platform Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools and capabilities that power intelligent investment decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our AI-driven investment platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                      <span className="text-sm font-medium text-blue-600">{tech.progress}%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tech.description}</p>
                    <Progress value={tech.progress} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Development Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The evolution of StockAI from concept to a comprehensive AI-powered investment platform
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <div className="flex">
                    <div className="w-2 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                            {phase.period}
                          </Badge>
                          <span className="text-sm text-gray-500">{phase.phase}</span>
                        </div>
                        <CardTitle className="text-xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base">
                          {phase.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {phase.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Award className="h-3 w-3 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Future Roadmap
                  </h2>
                  <p className="text-blue-100 mb-6 text-lg">
                    Our vision for the future includes exciting developments that will further enhance 
                    the platform's capabilities and user experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-blue-100">Q2 2025 - Enhanced AI</h3>
                      <ul className="space-y-2 text-sm text-blue-100">
                        <li>• Advanced sentiment analysis from social media</li>
                        <li>• Multi-timeframe prediction models</li>
                        <li>• Portfolio optimization algorithms</li>
                        <li>• Custom model training capabilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-blue-100">Q3 2025 - Platform Expansion</h3>
                      <ul className="space-y-2 text-sm text-blue-100">
                        <li>• Mobile application launch</li>
                        <li>• API access for developers</li>
                        <li>• Integration with major brokers</li>
                        <li>• Advanced backtesting tools</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3 text-blue-100">Long-term Vision</h3>
                    <p className="text-sm text-blue-100">
                      We're working towards creating a comprehensive ecosystem that includes automated trading, 
                      advanced portfolio management, educational resources, and community features that will 
                      revolutionize how individuals approach investment decisions.
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            StockAI is currently an educational and demonstration platform using simulated data and predictions. 
            All analysis, predictions, and recommendations shown are for learning purposes only and should not be 
            considered as professional financial advice. We are actively working on integrating real market data 
            and developing production-ready ML models. Always conduct your own research and consult with qualified 
            financial advisors before making investment decisions. Past performance does not guarantee future results, 
            and all investments carry risk of loss.
          </p>
        </motion.div>
      </div>
    </div>
  );
}