import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AuthProvider } from '@/components/providers/SessionProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/chatbot/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StockAI - AI-Powered Stock Prediction & Analysis',
  description: 'Advanced stock prediction and analysis using machine learning and AI technology. Make informed investment decisions with our comprehensive platform.',
  keywords: 'stock prediction, AI, machine learning, investment, financial analysis',
  authors: [{ name: 'Aryan Wadhwa' }, { name: 'Dipesh Gupta' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <Navbar />
              <main className="pt-16">
                {children}
              </main>
              <Footer />
              <Chatbot />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}