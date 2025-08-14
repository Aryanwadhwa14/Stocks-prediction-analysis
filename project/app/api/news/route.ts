import { NextRequest, NextResponse } from 'next/server';
import { newsService } from '@/lib/newsService';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ticker = searchParams.get('ticker');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '50');

    let news;

    if (ticker) {
      news = await newsService.fetchNewsByTicker(ticker);
    } else if (category) {
      news = await newsService.fetchNewsByCategory(category);
    } else if (search) {
      news = await newsService.searchNews(search);
    } else {
      news = await newsService.fetchAllNews();
    }

    // Apply limit
    news = news.slice(0, limit);

    return NextResponse.json({
      success: true,
      data: news,
      count: news.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch news',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'summary':
        const summary = await newsService.getNewsSummary();
        return NextResponse.json({
          success: true,
          data: summary
        });

      case 'refresh':
        await newsService.refreshSources();
        return NextResponse.json({
          success: true,
          message: 'News sources refreshed successfully'
        });

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process request',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
