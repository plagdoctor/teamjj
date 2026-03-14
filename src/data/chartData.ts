export const marketGrowthData = [
  { year: '2017', value: 14.3, label: '$14.3B' },
  { year: '2023', value: 158, label: '$158B' },
  { year: '2025', value: 677, label: '$677B' },
  { year: '2030E', value: 1818, label: '$1,818B' },
];

export const priorityScores = [
  { name: 'AI 인지저하 탐지', score: 95, fill: '#3b82f6' },
  { name: '고령 운전자 감지', score: 90, fill: '#f59e0b' },
  { name: 'AI 매칭 시스템', score: 85, fill: '#8b5cf6' },
  { name: 'AI 패션 체크', score: 78, fill: '#10b981' },
  { name: '노견 IoT 케어', score: 75, fill: '#06b6d4' },
  { name: '수화 해석', score: 70, fill: '#94a3b8' },
];

export const techDependencyData = [
  { subject: 'NLP', 'AI 인지저하': 3, 'AI 매칭': 3, '수화 해석': 2, '고령 운전자': 0, 'AI 패션': 0, '판서 정리': 3, fullMark: 3 },
  { subject: '컴퓨터 비전', 'AI 인지저하': 0, 'AI 매칭': 0, '수화 해석': 3, '고령 운전자': 1, 'AI 패션': 3, '판서 정리': 3, fullMark: 3 },
  { subject: 'IoT/센서', 'AI 인지저하': 2, 'AI 매칭': 0, '수화 해석': 0, '고령 운전자': 3, 'AI 패션': 2, '판서 정리': 0, fullMark: 3 },
  { subject: '추천 알고리즘', 'AI 인지저하': 0, 'AI 매칭': 3, '수화 해석': 0, '고령 운전자': 1, 'AI 패션': 3, '판서 정리': 0, fullMark: 3 },
];

export const methodFitData = [
  { item: 'AI 인지저하', consumerNeeds: 5, techChange: 5, megatrend: 5 },
  { item: 'AI 매칭', consumerNeeds: 4, techChange: 5, megatrend: 3 },
  { item: '노견 IoT', consumerNeeds: 5, techChange: 4, megatrend: 4 },
  { item: '고령 운전자', consumerNeeds: 5, techChange: 5, megatrend: 5 },
  { item: '수화 해석', consumerNeeds: 4, techChange: 5, megatrend: 3 },
  { item: 'AI 패션', consumerNeeds: 4, techChange: 5, megatrend: 4 },
];

export const seniorDriverStats = [
  { label: '65세+ 사고 비중', value: 20.2, year: '2023' },
  { label: '65세+ 가해 운전', value: 21.6, year: '2024' },
  { label: '사망자 중 고령층', value: 51.5, year: '2024' },
  { label: '사고율 차이', value: 45, suffix: '%' },
];

export const megatrendItems = [
  {
    trend: '초고령사회',
    color: '#f59e0b',
    items: ['AI 인지저하 탐지', '고령 운전자', '유병자 매칭', '노견→시니어'],
  },
  {
    trend: 'AI 에이전트',
    color: '#3b82f6',
    items: ['AI 대화 매칭', '영어 학습 TTS', '자녀 AI 모니터링', '판서 자동 정리'],
  },
  {
    trend: '초개인화',
    color: '#10b981',
    items: ['AI 패션 코디', '퍼스널컬러', '맞춤형 영어 학습', 'AI 성향 매칭'],
  },
];
