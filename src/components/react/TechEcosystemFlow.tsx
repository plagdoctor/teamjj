import { ReactFlow, Background, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { techEcosystemNodes, techEcosystemEdges } from '../../data/flowData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

export default function TechEcosystemFlow() {
  const { isDark } = useThemeColors();

  return (
    <ChartWrapper title="🌐 기술 생태계 맵" description="4대 핵심 기술(NLP, 컴퓨터비전, IoT, 추천엔진)과 6개 비즈니스 아이템의 기술 의존 관계. 선 굵기는 의존도를 나타냄">
      <div style={{ height: 400 }}>
        <ReactFlow
          nodes={techEcosystemNodes}
          edges={techEcosystemEdges}
          fitView
          proOptions={{ hideAttribution: true }}
          style={{ background: 'transparent' }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        >
          <Background color={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} gap={20} />
        </ReactFlow>
      </div>
    </ChartWrapper>
  );
}
