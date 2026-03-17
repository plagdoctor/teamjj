import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell,
  ComposedChart,
} from 'recharts';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';
import {
  agingTimelineData, singleHouseholdData,
  caregivingInsuranceGrowth, dementiaProjection,
  aiMatchingProjection,
  petMarketGrowth, petInsuranceComparison,
  elderlyDriverAccidents, licenseSurrenderGrowth, elderlyDriverProjection,
} from '../../data/deepResearchData';

const tooltipStyle = (isDark: boolean) => ({
  background: isDark ? '#1a2236' : '#fff',
  border: '1px solid rgba(59,130,246,0.3)',
  borderRadius: '12px',
  color: isDark ? '#e2e8f0' : '#1e293b',
  fontSize: '0.85rem',
});

// ─── 메가트렌드: 고령화 추이 ───────────────────────────────
export function AgingTrendChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="한국 고령화율 추이 (65세+ 인구 비율)" description="2000년 7.2% → 2024년 초고령사회 진입(20%) → 2050년 43% 전망. 일본보다 빠른 속도(7년 만에 14%→20%)">
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={agingTimelineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="agingGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} domain={[0, 50]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}%`, '고령화율']} />
            <Area type="monotone" dataKey="rate" stroke="#ef4444" fill="url(#agingGrad)" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 메가트렌드: 1인가구 추이 ──────────────────────────────
export function SingleHouseholdChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="1인가구 비율 추이" description="2024년 804.5만 가구(36.1%), 2050년 905만 가구(39.6%) 전망. 서울/경기 집중 42.7%">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={singleHouseholdData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} domain={[0, 45]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}%`, '1인가구 비율']} />
            <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
              {singleHouseholdData.map((_, i) => (
                <Cell key={i} fill={i >= 4 ? 'rgba(139,92,246,0.4)' : '#8b5cf6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템1: 간병보험 성장 ────────────────────────────────
export function CaregivingInsuranceChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="간병보험 수입보험료 추이 (억원)" description="손보사: 3,410억(2021) → 2조(2024E), 생보사: 55억 → 2,285억. 2년 만에 5배 성장">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={caregivingInsuranceGrowth} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}천억`} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value.toLocaleString()}억원`]} />
            <Legend wrapperStyle={{ fontSize: '0.8rem', color: text }} />
            <Bar dataKey="nonLife" name="손해보험" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="life" name="생명보험" fill="#06b6d4" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템1: 치매/MCI 전망 ────────────────────────────────
export function DementiaProjectionChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="치매 & 경도인지장애(MCI) 환자 전망 (만명)" description="2025년 MCI 298만명, 치매 97만명 → 2044년 치매만 200만명 돌파 예상">
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <ComposedChart data={dementiaProjection} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}만`} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number, name: string) => [`${value}만명`, name === 'dementia' ? '치매' : 'MCI']} />
            <Legend wrapperStyle={{ fontSize: '0.8rem', color: text }} formatter={(v) => v === 'dementia' ? '치매' : '경도인지장애(MCI)'} />
            <Bar dataKey="mci" fill="rgba(245,158,11,0.7)" radius={[6, 6, 0, 0]} />
            <Line type="monotone" dataKey="dementia" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템2: AI 매칭 비율 전망 ────────────────────────────
export function AIMatchingShareChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="AI 기반 매칭 시장 점유율 전망" description="AI 기반 데이팅 매칭 비율이 2025년 40%에서 2030년 85%로 급성장 전망">
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <AreaChart data={aiMatchingProjection} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="matchGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} domain={[0, 100]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}%`, 'AI 매칭 비율']} />
            <Area type="monotone" dataKey="share" stroke="#8b5cf6" fill="url(#matchGrad)" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템6: 반려동물 시장 성장 ───────────────────────────
export function PetMarketChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="한국 반려동물 시장 규모 (조원)" description="2022년 8조 → 2025년 15조 → 2032년 21조 전망. 연평균 수의비 15%+ 성장">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={petMarketGrowth} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="petGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}조`} domain={[0, 25]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}조원`, '시장 규모']} />
            <Area type="monotone" dataKey="value" stroke="#10b981" fill="url(#petGrad)" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템6: 펫보험 가입률 국제 비교 ─────────────────────
export function PetInsuranceComparisonChart() {
  const { text, grid, isDark } = useThemeColors();
  const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
  return (
    <ChartWrapper title="펫보험 가입률 국제 비교" description="한국 2% vs 일본 21.4% vs 영국 25% vs 스웨덴 40%. 한국은 10배 이상 성장 잠재력">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={petInsuranceComparison} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis type="number" stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} domain={[0, 50]} />
            <YAxis type="category" dataKey="country" stroke={text} fontSize={12} width={60} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}%`, '가입률']} />
            <Bar dataKey="rate" radius={[0, 8, 8, 0]}>
              {petInsuranceComparison.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템8: 고령 운전자 사고 추이 ───────────────────────
export function ElderlyAccidentTrendChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="65세+ 고령 운전자 교통사고 추이" description="2020년 30,172건 → 2024년 42,369건 (36.4% 증가). 전체 사고의 21.6% 차지">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <ComposedChart data={elderlyDriverAccidents} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis yAxisId="left" stroke={text} fontSize={12} tickFormatter={(v: number) => `${(v / 10000).toFixed(1)}만`} />
            <YAxis yAxisId="right" orientation="right" stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}%`} domain={[10, 25]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} />
            <Legend wrapperStyle={{ fontSize: '0.8rem', color: text }} />
            <Bar yAxisId="left" dataKey="accidents" name="사고 건수" fill="#f59e0b" radius={[6, 6, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="share" name="전체 사고 비중(%)" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템8: 면허반납 추이 ────────────────────────────────
export function LicenseSurrenderChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="고령 운전자 면허 자진반납 추이" description="2014년 1,022건 → 2023년 73,221건. 사회적 수용도 급속 확산 중">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={licenseSurrenderGrowth} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${(v / 10000).toFixed(1)}만`} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value.toLocaleString()}건`, '반납 건수']} />
            <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]}>
              {licenseSurrenderGrowth.map((_, i) => (
                <Cell key={i} fill={i === licenseSurrenderGrowth.length - 1 ? '#3b82f6' : 'rgba(6,182,212,0.6)'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

// ─── 아이템8: 고령 면허자 전망 ─────────────────────────────
export function ElderlyDriverProjectionChart() {
  const { text, grid, isDark } = useThemeColors();
  return (
    <ChartWrapper title="65세+ 면허보유자 전망 (만명)" description="2025년 498만명 → 2050년 983만명. 시장 규모 2배 확대 전망">
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <LineChart data={elderlyDriverProjection} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} />
            <XAxis dataKey="year" stroke={text} fontSize={12} />
            <YAxis stroke={text} fontSize={12} tickFormatter={(v: number) => `${v}만`} domain={[400, 1100]} />
            <Tooltip contentStyle={tooltipStyle(isDark)} formatter={(value: number) => [`${value}만명`, '면허보유자']} />
            <Line type="monotone" dataKey="drivers" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }} strokeDasharray="8 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}
