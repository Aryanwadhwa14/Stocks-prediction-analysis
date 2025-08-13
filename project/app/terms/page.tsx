'use client';

import { motion } from 'framer-motion';
import { ScrollText, Mail, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900/50 dark:to-blue-900/20 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 mb-4">
            <ScrollText className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
              Legal
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Terms & Conditions — StockAI
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: August, 2025</p>
        </motion.div>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
              <CardDescription>
                Welcome to StockAI — your futuristic companion for stock prediction and market analysis. By using StockAI, you agree to these Terms.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>1. What We Do</CardTitle>
              <CardDescription>
                StockAI provides visualizations, AI-powered insights, educational resources, and a helpful chatbot.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <ul className="list-disc ml-6 space-y-1">
                <li>Stock price trend visualizations</li>
                <li>AI-powered insights (via our machine learning models)</li>
                <li>Educational resources about the stock market</li>
                <li>A chatbot to guide your decision-making process</li>
              </ul>
              <p className="text-sm">
                Important: We are not a registered financial advisor. Our predictions and recommendations are for informational purposes only and are not financial advice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>2. Your Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <ul className="list-disc ml-6 space-y-1">
                <li>Markets are unpredictable — past performance does not guarantee future results.</li>
                <li>You are responsible for your own investment decisions.</li>
                <li>Always consult a licensed financial advisor before making trades.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>3. Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc ml-6 space-y-1">
                <li>Do not use the platform for illegal activities.</li>
                <li>Do not hack, reverse-engineer, or misuse our code or AI models.</li>
                <li>Do not spam the chatbot or misuse the AI in ways unrelated to stock analysis.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>4. Accounts & Security</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>You may create an account to save predictions and track favorites.</p>
              <p className="text-sm">Keep your login details safe — we are not responsible for loss caused by unauthorized access due to weak passwords or sharing credentials.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                5. Data & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>We store minimal personal information, as explained in our Privacy Policy. We do not sell your data.</p>
              <p className="text-sm">Chatbot conversations may be processed to improve predictions and enhance the service.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>StockAI is provided “as is.” We will not be liable for financial losses, missed opportunities, or any damage caused by reliance on our AI predictions.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>7. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>We may update these Terms from time to time. If we do, we’ll update the date at the top and notify users where appropriate.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>8. Contact</CardTitle>
              <CardDescription>If you have questions about these Terms, contact us.</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <a href="mailto:aryanwadhwa911@gmail.com" className="inline-flex items-center text-blue-600 hover:underline">
                <Mail className="h-4 w-4 mr-2" />
                aryanwadhwa911@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 