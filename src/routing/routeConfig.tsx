import { type AnyRoute, createRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { APP_ROUTES } from '../constants/routes';
import { lazyComponents } from './lazyComponents';

// Exposed as `wp_watchlist/routes`. The host passes its layout route as `parent`;
// standalone dev (routing/index.tsx) passes a bare root route.
// Params/search are read here and passed as props: route ids differ between host and standalone,
// so pages must not call getRouteApi themselves. The cast only resolves the generic `TParent`;
// the `$symbol` path segment guarantees the shape at runtime.
export function createRoutes<TParent extends AnyRoute>(parent: TParent) {
  const watchlistRoute = createRoute({
    getParentRoute: () => parent,
    path: APP_ROUTES.WATCHLIST.path,
    component: lazyComponents.LazyWatchlist,
  });

  const stockDetailRoute = createRoute({
    getParentRoute: () => parent,
    path: APP_ROUTES.STOCK_DETAIL.path,
    component: function StockDetailRoute(): ReactNode {
      const { symbol } = stockDetailRoute.useParams() as { symbol: string };
      return <lazyComponents.LazyStockDetail symbol={symbol} />;
    },
  });

  return [watchlistRoute, stockDetailRoute] as const;
}
