import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { techDependencyData } from '../../data/chartData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

const items = [
  { key: 'AI 인지저하', color: '#3b82f6' },
  { key: 'AI 매칭', color: '#8b5cf6' },
  { key: '수화 해석', color: '#06b6d4' },
  { key: '고령 운전자', color: '#f59e0b' },
  { key: 'AI 패션', color: '#10b981' },
  { key: '판서 정리', color: '#ef4444' },
];

export default function TechRadarChart() {
  const { text, grid, isDark } = useThemeColors();

  return (
    <ChartWrapper title="🔬 아이템별 기술 의존도 레이더" description="NLP, 컴퓨터비전, IoT/센서, 추천 알고리즘 4개 축에 대한 의존도 분석">
      <div style={{ width: '100%', height: 420 }}>
        <ResponsiveContainer>
          <RadarChart data={techDependencyData}>
            <PolarGrid stroke={grid} />
            <PolarAngleAxis dataKey="subject" stroke={text} fontSize={12} />
            <PolarRadiusAxis angle={30} domain={[0, 3]} stroke={grid} fontSize={10} />
            {items.map(item => (
              <Radar key={item.key} name={item.key} dataKey={item.key} stroke={item.color} fill={item.color} fillOpacity={0.15} strokeWidth={2} />
            ))}
            <Legend wrapperStyle={{ fontSize: '0.8rem', color: text }} />
            <Tooltip
              contentStyle={{
                background: isDark ? '#1a2236' : '#fff',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
