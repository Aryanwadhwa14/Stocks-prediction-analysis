'use client';

import { motion } from 'framer-motion';
import { Shield, Mail, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/20 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900 rounded-full px-4 py-2 mb-4">
            <Shield className="h-5 w-5 text-emerald-700 mr-2" />
            <span className="text-emerald-800 dark:text-emerald-200 text-sm font-medium">
              Privacy
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Privacy Policy — StockAI
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: August, 2025</p>
        </motion.div>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
              <CardDescription>
                We respect your privacy and aim to be transparent about how we collect, use, and protect your information.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <ul className="list-disc ml-6 space-y-1">
                <li>Basic account details: name, email address. (for authentication)</li>
                <li>Usage data: pages you visit, how you interact with predictions and chatbot.</li>
                <li>Device & browser info: to optimize your experience.</li>
                <li>Chatbot conversations: for AI model improvement and better recommendations. </li>
              </ul>
              <p className="text-sm">We do not collect sensitive financial information like bank account details, unless you explicitly share them (which you shouldn’t).</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc ml-6 space-y-1">
                <li>Personalize stock predictions.</li>
                <li>Improve our AI models</li>
                <li>Provide relevant educational content.</li>
                <li>Fix bugs and enhance platform performance.</li>
                <li>Communicate important updates.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>3. Sharing Your Data</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>We never sell your personal data. We may share limited data with:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>AI processing services, only the text you input.</li>
                <li>Analytics tools to understand feature usage.</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-emerald-700" />
                4. Data Storage & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>Your data is stored securely on trusted cloud platforms.</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>We encrypt sensitive information.</li>
                <li>Only authorized team members can access user data.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <ul className="list-disc ml-6 space-y-1">
                <li>Access the data we have about you</li>
                <li>Request corrections to your personal information</li>
                <li>Request account deletion.</li>
                <li>Opt out of marketing emails</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>We use cookies to keep you logged in, remember preferences, and track usage for improving the platform.</p>
              <p className="text-sm">You can disable cookies in your browser settings, but some features may not work.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>7. Children’s Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>Our platform is not intended for users under 18.</p>
              <p className="text-sm">If you believe a child has shared personal information with us, please contact us to have it removed.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>8. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>If we update our Privacy Policy, we’ll notify you and update the date at the top of this page.</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
              <CardDescription>Have privacy-related questions? Reach out anytime.</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:aryanwadhwa911@gmail.com" className="inline-flex items-center text-emerald-700 hover:underline">
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