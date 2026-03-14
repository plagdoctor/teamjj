import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { marketGrowthData } from '../../data/chartData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

export default function MarketGrowthChart() {
  const { text, grid, isDark } = useThemeColors();

  return (
    <ChartWrapper title="📈 AI 헬스케어 시장 성장 전망" description="2017년 $14.3B에서 2030년 $1,818B로 폭발적 성장 예상 (CAGR 45.3%)">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <AreaChart data={marketGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `$${v}B`} />
            <Tooltip
              contentStyle={{
                background: isDark ? '#1a2236' : '#fff',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
              formatter={(value: number) => [`$${value}B`, '시장 규모']}
            />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#marketGrad)" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
