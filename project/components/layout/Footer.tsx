'use client';

import { motion } from 'framer-motion';
import { Heart, Github } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-black text-white py-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span>Website built by Aryan & Dipesh :)</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm">
            <a
              href="https://github.com/Aryanwadhwa14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors hover:underline"
            >
              <Github className="h-4 w-4" />
              <span>Aryanwadhwa14</span>
            </a>
            <span>·</span>
            <a
              href="https://github.com/dipesh-gupta03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors hover:underline"
            >
              <Github className="h-4 w-4" />
              <span>dipesh-gupta03</span>
            </a>
          </div>
          
          <div className="text-xs text-gray-300 mt-4">
            © 2025 StockAI. All rights reserved. This is an educational project and not professional financial advice.
          </div>
          <div className="text-xs text-gray-300 mt-4">
            Read the <a href="/terms" className="text-blue-400 hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> carefully, Thanks for visiting!
          </div>
        </div>
      </div>
    </motion.footer>
  );
}