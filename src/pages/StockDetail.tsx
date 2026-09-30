import { Card } from 'wp_shared/Card';

export default function StockDetail({ symbol }: { symbol: string }) {
  return <Card title={symbol}>Stock detail.</Card>;
}
