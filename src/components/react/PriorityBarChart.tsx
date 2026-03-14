import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { priorityScores } from '../../data/chartData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

export default function PriorityBarChart() {
  const { text, isDark } = useThemeColors();

  return (
    <ChartWrapper title="🎯 종합 우선순위 평가" description="3가지 탐색방법(소비자 니즈 × 기술변화 × 메가트렌드) 교차 분석 결과">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={priorityScores} layout="vertical" margin={{ top: 5, right: 60, left: 80, bottom: 5 }}>
            <XAxis type="number" domain={[0, 100]} stroke={text} fontSize={12} />
            <YAxis type="category" dataKey="name" stroke={text} fontSize={12} width={80} />
            <Tooltip
              contentStyle={{
                background: isDark ? '#1a2236' : '#fff',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '12px',
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
              formatter={(value: number) => [`${value}점`, '종합 점수']}
            />
            <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={28}>
              {priorityScores.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList dataKey="score" position="right" style={{ fill: text, fontSize: 13, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }} formatter={(v: number) => `${v}점`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
