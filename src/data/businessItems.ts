export interface BusinessItem {
  id: number;
  method: string;
  source: string;
  name: string;
  description: string;
  coreTech: string[];
}

export const businessItems: BusinessItem[] = [
  { id: 1, method: '경험과 지식', source: '간병 관련 보험', name: 'AI 인지저하 탐지 + 간병보험 연계', description: '스마트폰 사용 패턴이나 음성 분석을 통해 초기 인지 저하를 탐지', coreTech: ['AI 음성/행동 패턴 분석', '스마트폰 센서 데이터', 'NLP'] },
  { id: 2, method: '경험과 지식', source: '나는솔로 (AI 매칭)', name: 'AI 대화 기반 매칭 시스템', description: 'AI 챗봇과 자연스러운 대화를 통해 성향을 파악하고 매칭', coreTech: ['AI 대화 분석', '성향 프로파일링', '추천 알고리즘', 'NLP 감성분석'] },
  { id: 3, method: '경험과 지식', source: '오픈클로 (자녀 AI 관리)', name: '유해 콘텐츠 제어 + AI 튜터링', description: '유해 콘텐츠 제어와 AI 기반 자녀 튜터링 서비스', coreTech: ['콘텐츠 필터링', 'AI 튜터링'] },
  { id: 4, method: '경험과 지식', source: 'AI 자녀/부모 모니터링', name: '자녀 AI 사용 내역 분석 리포트', description: '자녀가 AI와 대화한 내용을 수집·분석하여 부모에게 요약 리포트 제공', coreTech: ['AI 대화 로그 분석', 'NLP 감성/주제 분석', '대시보드 시각화'] },
  { id: 5, method: '외부의 정보', source: '문단열 (영어 학습)', name: 'TTS 기반 맞춤형 영어 학습', description: '최신 트렌드 뉴스를 AI가 취합하여 관심 주제 기반 영어 지문 자동 생성', coreTech: ['TTS/STT 엔진', '뉴스 크롤링/API', 'AI 지문 생성', '난이도 자동 조절'] },
  { id: 6, method: '경험과 지식', source: '반려견 (노견 케어)', name: 'IoT/카메라 기반 노견 상태 모니터링', description: '카메라/센서로 노견 실시간 모니터링, 이상행동 감지 시 알림', coreTech: ['IoT 센서/카메라', 'AI 영상 분석', '이상행동 감지 모델', '웨어러블 디바이스'] },
  { id: 7, method: '외부의 정보 (스레드)', source: '수화 해석', name: '실시간 수화 → 텍스트 변환', description: '카메라로 수화 동작을 인식하여 실시간 텍스트 변환', coreTech: ['AI 영상 인식', '수화 동작 인식 모델', 'Real-time inference', '자연어 생성'] },
  { id: 8, method: '경험과 지식', source: '고령 운전자 면허 반납 유도', name: '고령 운전자 인지력 저하 감지', description: '차량 센서 기반 고령 운전자 인지력 저하 감지 및 면허 반납 권고', coreTech: ['차량 OBD/센서 데이터', 'AI 운전 패턴 분석', '인지력 저하 모델', 'IoT 텔레매틱스'] },
  { id: 9, method: '경험과 지식', source: '유병자 매칭 (보험 연계)', name: '유병자 커뮤니티 매칭 + 보험', description: '유병자 간 커뮤니티 매칭 및 전용 보험 상품 연계', coreTech: ['AI 프로파일링', '건강 데이터 분석', '커뮤니티 플랫폼', '보험 상품 연계 API'] },
  { id: 10, method: '경험과 지식', source: '스마트글래스 AI 패션 체크', name: 'AI 패션 트렌드 분석 및 코디 추천', description: '스마트글래스/카메라로 착장 분석, AI가 패션 트렌드와 비교하여 코디 추천', coreTech: ['AI 영상/이미지 분석', '패션 트렌드 DB', '퍼스널컬러 진단 모델', '스마트글래스/AR', '추천 알고리즘'] },
  { id: 11, method: '경험과 지식', source: '판서 자동 정리 (교육용)', name: '칠판 판서 AI 자동 정리·요약', description: '칠판/화이트보드 판서를 카메라로 촬영하면 AI가 자동 인식·정리', coreTech: ['OCR/필기 인식 AI', '이미지 분석', 'NLP 요약 모델', '교육 콘텐츠 구조화'] },
];
