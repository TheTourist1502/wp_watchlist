import { lazy } from 'react';

export const lazyComponents = {
  LazyWatchlist: lazy(() => import('../pages/Watchlist')),
  LazyStockDetail: lazy(() => import('../pages/StockDetail')),
};
