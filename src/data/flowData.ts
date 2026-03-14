import type { Node, Edge } from '@xyflow/react';

export const serviceFlowNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 120 },
    data: { label: '🚗 차량 OBD 센서 수집', description: '급정거, 차선이탈 등' },
    type: 'custom',
    style: { background: '#1a2236', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '14px', padding: '16px', color: '#e2e8f0', width: 180 },
  },
  {
    id: '2',
    position: { x: 240, y: 120 },
    data: { label: '🧠 AI 운전패턴 분석', description: '인지력 저하 모델' },
    type: 'custom',
    style: { background: '#1a2236', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '14px', padding: '16px', color: '#e2e8f0', width: 180 },
  },
  {
    id: '3',
    position: { x: 480, y: 120 },
    data: { label: '⚠️ 인지력 저하 감지', description: '위험 등급 산정' },
    type: 'custom',
    style: { background: '#1a2236', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '14px', padding: '16px', color: '#e2e8f0', width: 180 },
  },
  {
    id: '4',
    position: { x: 720, y: 40 },
    data: { label: '📋 면허반납 권고', description: '인센티브 제공' },
    type: 'custom',
    style: { background: '#1a2236', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '14px', padding: '16px', color: '#e2e8f0', width: 180 },
  },
  {
    id: '5',
    position: { x: 720, y: 200 },
    data: { label: '🏥 보험사 리스크 연계', description: 'B2B 데이터 수익' },
    type: 'custom',
    style: { background: '#1a2236', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '14px', padding: '16px', color: '#e2e8f0', width: 180 },
  },
];

export const serviceFlowEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#10b981' } },
  { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#f59e0b' } },
];

export const techEcosystemNodes: Node[] = [
  // Core technologies (center)
  {
    id: 'nlp',
    position: { x: 200, y: 0 },
    data: { label: '🗣️ NLP' },
    style: { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', border: 'none', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem' },
  },
  {
    id: 'cv',
    position: { x: 400, y: 0 },
    data: { label: '👁️ 컴퓨터비전' },
    style: { background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', border: 'none', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.75rem' },
  },
  {
    id: 'iot',
    position: { x: 200, y: 200 },
    data: { label: '📡 IoT' },
    style: { background: 'linear-gradient(135deg, #10b981, #06b6d4)', border: 'none', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem' },
  },
  {
    id: 'rec',
    position: { x: 400, y: 200 },
    data: { label: '🎯 추천엔진' },
    style: { background: 'linear-gradient(135deg, #f59e0b, #ef4444)', border: 'none', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.75rem' },
  },
  // Business items (outer)
  {
    id: 'cognitive',
    position: { x: 0, y: -60 },
    data: { label: '🧠 AI 인지저하' },
    style: { background: '#1a2236', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
  {
    id: 'matching',
    position: { x: 0, y: 100 },
    data: { label: '💑 AI 매칭' },
    style: { background: '#1a2236', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
  {
    id: 'signlang',
    position: { x: 560, y: -60 },
    data: { label: '🤟 수화 해석' },
    style: { background: '#1a2236', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
  {
    id: 'driver',
    position: { x: 0, y: 260 },
    data: { label: '🚗 고령 운전자' },
    style: { background: '#1a2236', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
  {
    id: 'fashion',
    position: { x: 560, y: 260 },
    data: { label: '👓 AI 패션' },
    style: { background: '#1a2236', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
  {
    id: 'board',
    position: { x: 560, y: 100 },
    data: { label: '📝 판서 정리' },
    style: { background: '#1a2236', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', padding: '10px', color: '#e2e8f0', fontSize: '0.8rem', width: 130 },
  },
];

export const techEcosystemEdges: Edge[] = [
  // AI Cognitive -> NLP (strong), IoT (medium)
  { id: 'cog-nlp', source: 'cognitive', target: 'nlp', style: { stroke: '#3b82f6', strokeWidth: 3 } },
  { id: 'cog-iot', source: 'cognitive', target: 'iot', style: { stroke: '#10b981', strokeWidth: 2 } },
  // AI Matching -> NLP (strong), Rec (strong)
  { id: 'match-nlp', source: 'matching', target: 'nlp', style: { stroke: '#3b82f6', strokeWidth: 3 } },
  { id: 'match-rec', source: 'matching', target: 'rec', style: { stroke: '#f59e0b', strokeWidth: 3 } },
  // Sign Language -> NLP (medium), CV (strong)
  { id: 'sign-nlp', source: 'signlang', target: 'nlp', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'sign-cv', source: 'signlang', target: 'cv', style: { stroke: '#06b6d4', strokeWidth: 3 } },
  // Driver -> IoT (strong), CV (weak), Rec (weak)
  { id: 'drv-iot', source: 'driver', target: 'iot', style: { stroke: '#10b981', strokeWidth: 3 } },
  { id: 'drv-cv', source: 'driver', target: 'cv', style: { stroke: '#06b6d4', strokeWidth: 1 } },
  // Fashion -> CV (strong), IoT (medium), Rec (strong)
  { id: 'fash-cv', source: 'fashion', target: 'cv', style: { stroke: '#06b6d4', strokeWidth: 3 } },
  { id: 'fash-iot', source: 'fashion', target: 'iot', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'fash-rec', source: 'fashion', target: 'rec', style: { stroke: '#f59e0b', strokeWidth: 3 } },
  // Board -> NLP (strong), CV (strong)
  { id: 'board-nlp', source: 'board', target: 'nlp', style: { stroke: '#3b82f6', strokeWidth: 3 } },
  { id: 'board-cv', source: 'board', target: 'cv', style: { stroke: '#06b6d4', strokeWidth: 3 } },
];
