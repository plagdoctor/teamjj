import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { methodFitData } from '../../data/chartData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

export default function MethodFitChart() {
  const { text, grid, isDark } = useThemeColors();

  return (
    <ChartWrapper title="📊 탐색방법별 적합도 비교" description="각 아이템에 대해 소비자 니즈·기술변화·메가트렌드 3가지 방법의 적합도를 비교">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={methodFitData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="item" stroke={text} fontSize={11} />
            <YAxis domain={[0, 5]} stroke={text} fontSize={12} />
            <Tooltip
              contentStyle={{
                background: isDark ? '#1a2236' : '#fff',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '0.8rem' }} />
            <Bar dataKey="consumerNeeds" name="소비자 니즈" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="techChange" name="기술변화" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="megatrend" name="메가트렌드" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
