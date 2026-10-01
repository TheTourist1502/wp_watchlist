import { lazy } from 'react';

export const lazyComponents = {
  LazyWatchlist: lazy(() => import('../pages/watchlist')),
  LazyStockDetail: lazy(() => import('../pages/stock-detail')),
};
