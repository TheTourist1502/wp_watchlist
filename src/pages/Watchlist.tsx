import { Link } from '@tanstack/react-router';
import { Card } from 'wp_shared/Card';

import { APP_ROUTES } from '../constants/routes';

export default function Watchlist() {
  return (
    <Card title="Watchlist">
      <Link to={APP_ROUTES.STOCK_DETAIL.navigate} params={{ symbol: 'AAPL' }}>
        AAPL
      </Link>
    </Card>
  );
}
