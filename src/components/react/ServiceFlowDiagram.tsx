import { ReactFlow, Background, Controls, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { serviceFlowNodes, serviceFlowEdges } from '../../data/flowData';
import { useThemeColors } from './useThemeColors';
import ChartWrapper from './ChartWrapper';

export default function ServiceFlowDiagram() {
  const { isDark } = useThemeColors();

  return (
    <ChartWrapper title="🔄 고령 운전자 서비스 플로우" description="차량 OBD 센서 데이터 수집부터 보험사 리스크 데이터 연계까지의 전체 프로세스">
      <div style={{ height: 350 }}>
        <ReactFlow
          nodes={serviceFlowNodes}
          edges={serviceFlowEdges}
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
