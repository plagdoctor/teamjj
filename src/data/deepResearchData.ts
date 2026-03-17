// ─── 매크로 트렌드 ─────────────────────────────────────────

export const agingTimelineData = [
  { year: '2000', rate: 7.2, milestone: '고령화사회' },
  { year: '2017', rate: 14.2, milestone: '고령사회' },
  { year: '2024', rate: 20.0, milestone: '초고령사회' },
  { year: '2025', rate: 20.3, milestone: '' },
  { year: '2036E', rate: 30.0, milestone: '' },
  { year: '2050E', rate: 43.0, milestone: '' },
];

export const singleHouseholdData = [
  { year: '2005', rate: 20.0 },
  { year: '2019', rate: 30.2 },
  { year: '2023', rate: 35.5 },
  { year: '2024', rate: 36.1 },
  { year: '2030E', rate: 35.6 },
  { year: '2050E', rate: 39.6 },
];

export const koreaAIMarketData = [
  { year: '2017', companies: 174 },
  { year: '2019', companies: 310 },
  { year: '2021', companies: 539 },
  { year: '2024', companies: 780 },
];

// ─── 아이템 1: 간병보험 + AI 인지저하 ──────────────────────

export const caregivingInsuranceGrowth = [
  { year: '2021', nonLife: 3410, life: 55 },
  { year: '2022', nonLife: 8200, life: 500 },
  { year: '2023', nonLife: 15900, life: 1446 },
  { year: '2024E', nonLife: 20000, life: 2285 },
];

export const dementiaProjection = [
  { year: '2025', dementia: 97, mci: 298 },
  { year: '2030', dementia: 136, mci: 360 },
  { year: '2033', dementia: 160, mci: 400 },
  { year: '2044', dementia: 200, mci: 500 },
];

export const item1Stats = {
  marketSize: '2조+',
  marketSizeLabel: '간병보험 시장(2024)',
  growth: '5배',
  growthLabel: '2년간 성장률',
  targetUsers: '298만명',
  targetUsersLabel: '경도인지장애 환자',
  nationalCost: '20.8조',
  nationalCostLabel: '치매 관리 비용(2022)',
};

export const item1Sources = [
  { title: '네이트뉴스 - 간병보험 2조 시장', url: 'https://news.nate.com/view/20251122n02214' },
  { title: 'IMARC - Korea Long-Term Care Market', url: 'https://www.imarcgroup.com/south-korea-long-term-care-market' },
  { title: 'Samsung Research - Alzheimer\'s Detection', url: 'https://news.samsung.com/global/world-alzheimers-day-samsung-research-advances-early-detection-of-alzheimers-with-everyday-digital-data' },
  { title: '치매뉴스 - 치매환자 100만명 돌파', url: 'https://www.dementianews.co.kr/news/articleView.html?idxno=6466' },
  { title: 'Nature - AI Voice Diagnostic Review', url: 'https://www.nature.com/articles/s41746-025-02105-z' },
];

// ─── 아이템 2: AI 매칭 시스템 ───────────────────────────────

export const datingMarketData = [
  { label: '한국 데이팅앱 지출(2023)', value: '1,615억원' },
  { label: '월간 다운로드(2024.1)', value: '118.7만건' },
  { label: '한국 침투율', value: '10.8%' },
  { label: '글로벌 시장(2024)', value: '$102.8억' },
];

export const aiMatchingProjection = [
  { year: '2025', share: 40 },
  { year: '2027', share: 60 },
  { year: '2030', share: 85 },
];

export const item2Stats = {
  marketSize: '1,615억',
  marketSizeLabel: '한국 데이팅앱 지출',
  growth: '7.51%',
  growthLabel: 'CAGR (2024-2035)',
  aiShare: '85%',
  aiShareLabel: 'AI 매칭 비율(2030)',
  travelMatches: '1,500만+',
  travelMatchesLabel: '설레여행 누적 매칭',
};

export const item2Sources = [
  { title: 'Business of Apps - Dating Report', url: 'https://www.businessofapps.com/data/dating-app-report/' },
  { title: 'Sensor Tower - Wippy', url: 'https://sensortower.com/ko/blog/WIPPY' },
  { title: 'Market Research Future - Korea Dating', url: 'https://www.marketresearchfuture.com/reports/south-korea-online-dating-market-61103' },
  { title: 'MosaicChats - AI Personality Analysis', url: 'https://www.mosaicchats.com/blog/personality-analysis-text-ai-character' },
  { title: 'VentureSquare - 설레여행', url: 'https://www.venturesquare.net/769200' },
];

// ─── 아이템 6: 노견 케어 ───────────────────────────────────

export const petMarketGrowth = [
  { year: '2022', value: 8 },
  { year: '2024', value: 15 },
  { year: '2028E', value: 18 },
  { year: '2032E', value: 21 },
];

export const petInsuranceComparison = [
  { country: '한국', rate: 2 },
  { country: '일본', rate: 21.4 },
  { country: '영국', rate: 25 },
  { country: '스웨덴', rate: 40 },
];

export const item6Stats = {
  marketSize: '15조원',
  marketSizeLabel: '반려동물 시장(2025)',
  seniorDogRate: '28.0%',
  seniorDogRateLabel: '노견 비율(7세+)',
  petOwners: '1,546만명',
  petOwnersLabel: '반려인구(2024)',
  insurancePenetration: '2%',
  insurancePenetrationLabel: '펫보험 가입률',
};

export const item6Sources = [
  { title: 'DailyVet - 반려동물 시장 규모', url: 'https://www.dailyvet.co.kr/news/industry/214784' },
  { title: 'KPMG 반려동물 시장 보고서', url: 'https://assets.kpmg.com/content/dam/kpmg/kr/pdf/2024/issue-monitor/kpmg-korea-petmarket-trends-20240604.pdf' },
  { title: 'KB금융 반려동물 리포트 2025', url: 'https://www.kbfg.com/kbresearch/report/reportView.do?reportId=2000531' },
  { title: 'GMInsights - Pet Tech Market', url: 'https://www.gminsights.com/industry-analysis/pet-tech-market' },
  { title: 'SkyQuest - Pet Camera Market', url: 'https://www.skyquestt.com/report/pet-monitoring-camera-market' },
];

// ─── 아이템 8: 고령 운전자 면허 반납 ──────────────────────

export const elderlyDriverAccidents = [
  { year: '2020', accidents: 30172, share: 16.8 },
  { year: '2021', accidents: 33219, share: 17.9 },
  { year: '2022', accidents: 36285, share: 19.1 },
  { year: '2023', accidents: 39417, share: 20.2 },
  { year: '2024', accidents: 42369, share: 21.6 },
];

export const licenseSurrenderGrowth = [
  { year: '2014', count: 1022 },
  { year: '2017', count: 12000 },
  { year: '2020', count: 35000 },
  { year: '2023', count: 73221 },
];

export const elderlyDriverProjection = [
  { year: '2025', drivers: 498 },
  { year: '2030', drivers: 620 },
  { year: '2040', drivers: 800 },
  { year: '2050', drivers: 983 },
];

export const item8Stats = {
  accidents: '42,369건',
  accidentsLabel: '65세+ 사고(2024)',
  accidentShare: '21.6%',
  accidentShareLabel: '전체 사고 중 비중',
  fatalityShare: '51.5%',
  fatalityShareLabel: '사망자 중 고령층',
  drivers: '498만명',
  driversLabel: '고령 면허보유자(2025)',
};

export const item8Sources = [
  { title: 'Reportera - 고령운전자 사고 통계', url: 'https://www.reportera.co.kr/car/42369-traffic-accidents-involving-elderly-drivers-in-2024/' },
  { title: '한국일보 - 고령운전자', url: 'https://www.hankookilbo.com/News/Read/A2025110716310001046' },
  { title: 'Korea Policy Briefing - One-stop service', url: 'https://www.korea.kr/briefing/policyBriefingView.do?newsId=148872820' },
  { title: 'FAU - In-vehicle Sensors', url: 'https://www.fau.edu/newsdesk/articles/in-vehicle-sensors-older-drivers.php' },
  { title: 'Insurance Journal - Mind Foundry', url: 'https://www.insurancejournal.com/news/international/2023/10/17/744556.htm' },
];

// ─── 비교 매트릭스 ─────────────────────────────────────────

export const comparisonMatrix = [
  {
    dimension: '시장 규모',
    item1: '2조+(보험) + 20.8조(치매비용)',
    item2: '~1,615억(데이팅앱)',
    item6: '15조(반려동물) + 799억(펫보험)',
    item8: '113만 UBI가입 + 성장중',
  },
  {
    dimension: '성장률',
    item1: '2년간 5배 (간병보험)',
    item2: 'CAGR 7.51%',
    item6: 'CAGR ~15% (수의비)',
    item8: '사고 36.4%↑, UBI 67%↑',
  },
  {
    dimension: '대상 사용자',
    item1: '1,050만 고령자 + 298만 MCI',
    item2: '월 118.7만 앱 다운로드',
    item6: '1,546만 반려인; 노견 28%',
    item8: '498만 고령 면허자(2025)',
  },
  {
    dimension: '기술 준비도',
    item1: '삼성 2026 베타; Linus Health 상용',
    item2: 'NLP 성격분석 검증됨',
    item6: '펫 CCTV 존재; 노견 특화 부재',
    item8: 'Mind Foundry 일본 상용; 한국 부재',
  },
  {
    dimension: '경쟁 상황',
    item1: '한국 인슈어테크+AI 주자 부재',
    item2: '위피 매출 1위, AI-first 부재',
    item6: '펫페오톡 존재; 노견 전문 없음',
    item8: '한국 내 블루오션',
  },
  {
    dimension: '정책 지원',
    item1: '국가치매관리계획',
    item2: '개인정보 이슈 / MZ 수용적',
    item6: '반려동물 등록 의무화(2024)',
    item8: '2025 적성검사 강화; 반납 지원',
  },
];
