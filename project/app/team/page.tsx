'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code, Brain, Cpu, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import aryanImg from './aryan.jpg.jpg';
import dipeshImg from './dipesh.jpg.jpg';

const teamMembers = [
  {
    name: 'Aryan Wadhwa',
    role: 'ML Specialist & Co-Founder',
    description: 'Machine Learning specialist with hands-on experience in Deep Learning and Large Language Models. Passionate about applying AI to financial markets.',
    image: aryanImg,
    education: 'B.Tech CSE - Third Year',
    specialization: 'AI/ML, Deep Learning, LLMs',
    github: 'https://github.com/Aryanwadhwa14',
    linkedin: 'https://www.linkedin.com/in/aryan-wadhwa-073727252/',
    twitter: 'https://x.com/aryan17198',
    email: 'https://aryanwadhwa14@gmail.com',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    achievements: [
      'Published research on stock prediction using LSTM networks',
      'Developed proprietary ML models with 85%+ accuracy',
      'Expert in time series forecasting and sentiment analysis',
      'Experience with GPT and transformer architectures'
    ],
    projects: [
      'Stock Prediction Models using Deep Learning',
      'Sentiment Analysis for Market Prediction',
      'Automated Trading Bot with ML',
      'Financial News Classification System'
    ]
  },
  {
    name: 'Dipesh Gupta',
    role: 'Full-Stack Developer & Co-Founder',
    description: 'Full-stack developer with a strong learning curve towards frontend and backend development. Expert in creating scalable web applications.',
    image: dipeshImg,
    education: 'B.Tech CSE - Third Year',
    specialization: 'Frontend & Backend Development',
    github: 'https://github.com/dipesh-gupta03',
    linkedin: 'https://www.linkedin.com/in/dipesh-gupta-512964295/',
    twitter: 'https://x.com/dipesh20059?t=eM0LE3Hs4dOQGV_Bu3Z9Qw&s=09',
    email: 'https://gupta.dipesh20059@gmail.com ',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    achievements: [
      'Built many production-ready web applications',
      'Expert in modern JavaScript frameworks and libraries',
      'Specialized in responsive design and user experience',
      'Strong background in database design and API development'
    ],
    projects: [
      'StockAI Web Platform Architecture',
      'Real-time Trading Dashboard',
      'User Authentication & Authorization System',
      'API Gateway for Financial Data'
    ]
  }
];

const companyValues = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI and machine learning to solve complex financial problems.'
  },
  {
    icon: Code,
    title: 'Code Excellence',
    description: 'We write clean, maintainable, and scalable code that powers reliable financial tools.'
  },
  {
    icon: Cpu,
    title: 'Performance Driven',
    description: 'Our systems are optimized for speed and accuracy, handling real-time financial data.'
  },
  {
    icon: Database,
    title: 'Data Integrity',
    description: 'We maintain the highest standards of data security and accuracy in all our operations.'
  }
];

const timeline = [
  {
    year: '2025',
    title: 'StockAI Founded',
    description: 'Aryan and Dipesh started StockAI with a vision to democratize AI-powered investment tools.'
  },
  {
    year: '2025',
    title: 'First ML Model',
    description: 'Developed and deployed our first stock prediction model with 80%+ accuracy rate.'
  },
  {
    year: '2025',
    title: 'Platform Launch',
    description: 'Launched the web platform with real-time predictions and analysis tools.'
  },
  {
    year: '2025',
    title: 'AI Chatbot Integration',
    description: 'Integrated AI for personalized investment advice and market insights.'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900 rounded-full px-4 py-2 mb-6">
            <Brain className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-indigo-800 dark:text-indigo-200 text-sm font-medium">
              Meet Our Team
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Minds Behind StockAI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of technologists and financial enthusiasts dedicated to making 
            AI-powered investment tools accessible to everyone. Our combined expertise in machine learning 
            and software development drives innovation in financial technology.
          </p>
        </motion.div>

        {/* Team Members */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <div className="absolute -bottom-12 left-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                      />
                    </div>
                  </div>
                  
                  <CardHeader className="pt-16">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600 mb-2">
                          {member.role}
                        </CardDescription>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {member.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Education:</strong> {member.education}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Specialization:</strong> {member.specialization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notable Projects</h4>
                      <ul className="space-y-2">
                        {member.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From idea to reality - the milestones that shaped StockAI
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Want to Work With Us?</h2>
              <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation in fintech. 
                Whether you're interested in collaboration, have questions about our platform, or want to join our team, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  asChild
                >
                  <a href="mailto:aryanwadhwa14@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  asChild
                >
                  <a href="https://github.com/Aryanwadhwa14" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Our Work
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}