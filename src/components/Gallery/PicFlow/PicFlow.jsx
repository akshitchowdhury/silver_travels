import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls
} from "reactflow";
import "reactflow/dist/style.css";
import i1 from '../../../assets/g1.jpg'
import i2 from '../../../assets/g2.jpg'
import ImageNode from "./ImageNode";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  imageNode: ImageNode
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes([
      {
        id: "2",
        type: "imageNode",
        data: {
          image: {
            url: i1,
            alt: "my first image"
          }
        },
        position: { x: 0, y: 0 }
      },
      {
        id: "3",
        type: "imageNode",
        data: {
          image: {
            url: i2,
            alt: "my second image"
          }
        },
        position: { x: 750, y: -225 },
        targetPosition: "left"
      },
      {
        id: "4",
        type: "output",
        data: { label: "Another Node" },
        position: { x: 450, y: 450 },
        targetPosition: "left"
      }
    ]);

    setEdges([
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#000" }
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        sourceHandle: "b",
        animated: true,
        style: { stroke: "#000" }
      }
    ]);
  }, [setEdges, setNodes]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    [setEdges]
  );

  return (
<div style={{height: '120vh'}}>
<ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
    </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;
