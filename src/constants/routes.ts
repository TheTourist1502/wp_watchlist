// `path` is the segment passed to createRoute; `navigate` is the full URL for <Link to>.
export const APP_ROUTES = {
  WATCHLIST: { path: 'watchlist', navigate: '/watchlist' },
  STOCK_DETAIL: { path: 'watchlist/$symbol', navigate: '/watchlist/$symbol' },
} as const;
