import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid, LabelList } from 'recharts';
import { seniorDriverStats } from '../../data/chartData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

const barColors = ['#f59e0b', '#ef4444', '#ef4444', '#f59e0b'];

export default function SeniorDriverStats() {
  const { text, grid, isDark } = useThemeColors();

  return (
    <ChartWrapper title="🚨 고령 운전자 교통사고 현황" description="교통사고 사망자의 51.5%가 고령층이며, 면허 자진반납률은 2.2%에 불과">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={seniorDriverStats} layout="vertical" margin={{ top: 5, right: 60, left: 120, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} horizontal={false} />
            <XAxis type="number" domain={[0, 60]} stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} />
            <YAxis type="category" dataKey="label" stroke={text} fontSize={11} width={120} />
            <Tooltip
              contentStyle={{
                background: isDark ? '#1a2236' : '#fff',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '12px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
              formatter={(value: number) => [`${value}%`, '비율']}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
              {seniorDriverStats.map((_, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index]} />
              ))}
              <LabelList dataKey="value" position="right" style={{ fill: text, fontSize: 13, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }} formatter={(v: number) => `${v}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
