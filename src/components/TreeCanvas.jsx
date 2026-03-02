import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    BackgroundVariant,
    useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

import TreeNode from './TreeNode';
import InfoPanel from './InfoPanel';
import ControlsPanel from './Controls';
import { getChildren, nodeById } from '../data/academicData';
import { calculateChildPositions, calculateChildEdges } from '../utils/treeLayout';
import { useSmartZoom } from '../hooks/useSmartZoom';

const nodeTypes = { careerNode: TreeNode };

const ROOT_NODE = {
    id: 'root',
    type: 'careerNode',
    position: { x: 80, y: 0 },
    data: {
        id: 'root',
        label: 'After 10th',
        subtitle: 'Choose Your Stream',
        type: 'root',
        parent: null,
        description: 'Your journey begins here. After completing 10th grade, you have three main academic streams to choose from.',
        emoji: '🎓',
        depth: 0,
    },
    draggable: true,
};

function TreeCanvasInner({ onReturnToLanding }) {
    const [nodes, setNodes] = useState([ROOT_NODE]);
    const [edges, setEdges] = useState([]);
    const [expandedIds, setExpandedIds] = useState(new Set());
    const [selectedNode, setSelectedNode] = useState(null);
    const { zoomToNodes } = useSmartZoom();

    const handleNodeClick = useCallback((event, node) => {
        // Update selected node for info panel
        setSelectedNode(node);

        const nodeData = node.data;

        // If this node type is job, no children to expand
        if (nodeData.type === 'job') return;

        const children = getChildren(nodeData.id);
        if (children.length === 0) return;

        // Toggle: collapse if already expanded
        if (expandedIds.has(nodeData.id)) {
            // Collapse: remove all descendants
            const toRemove = new Set();
            const queue = [nodeData.id];
            while (queue.length) {
                const cur = queue.shift();
                const kids = getChildren(cur);
                kids.forEach(k => {
                    toRemove.add(k.id);
                    queue.push(k.id);
                });
            }

            setNodes(prev => prev.filter(n => !toRemove.has(n.id)));
            setEdges(prev => prev.filter(e => !toRemove.has(e.target)));
            setExpandedIds(prev => {
                const next = new Set(prev);
                next.delete(nodeData.id);
                toRemove.forEach(id => next.delete(id));
                return next;
            });
            return;
        }

        // Expand: first auto-collapse expanded siblings (accordion behavior)
        // Find siblings = other children of same parent that are currently expanded
        const parentId = nodeData.parent;
        let nodesToRemove = new Set();
        let edgesToRemove = new Set();
        let idsToUnexpand = new Set();

        if (parentId) {
            const siblings = getChildren(parentId).filter(
                s => s.id !== nodeData.id && expandedIds.has(s.id)
            );

            // For each expanded sibling, collect all descendants to remove
            for (const sib of siblings) {
                idsToUnexpand.add(sib.id);
                const queue = [sib.id];
                while (queue.length) {
                    const cur = queue.shift();
                    const kids = getChildren(cur);
                    kids.forEach(k => {
                        nodesToRemove.add(k.id);
                        edgesToRemove.add(k.id); // edge target
                        if (expandedIds.has(k.id)) {
                            idsToUnexpand.add(k.id);
                        }
                        queue.push(k.id);
                    });
                }
            }
        }

        // Add children of the clicked node
        const newNodes = calculateChildPositions(node, children, nodes);
        const newEdges = calculateChildEdges(nodeData.id, children);

        setNodes(prev => {
            // Remove collapsed sibling descendants, then add new children
            let filtered = prev.filter(n => !nodesToRemove.has(n.id));
            // Remove any existing nodes for new child ids (in case of re-expand)
            filtered = filtered.filter(n => !newNodes.find(nn => nn.id === n.id));
            return [...filtered, ...newNodes];
        });
        setEdges(prev => {
            // Remove edges targeting collapsed descendants
            let filtered = prev.filter(e => !edgesToRemove.has(e.target));
            // Remove any existing edges for new edge ids
            filtered = filtered.filter(e => !newEdges.find(ne => ne.id === e.id));
            return [...filtered, ...newEdges];
        });
        setExpandedIds(prev => {
            const next = new Set(prev);
            idsToUnexpand.forEach(id => next.delete(id));
            next.add(nodeData.id);
            return next;
        });

        // Smart zoom
        const allIds = [node.id, ...newNodes.map(n => n.id)];
        zoomToNodes(allIds, children.length);
    }, [nodes, edges, expandedIds, zoomToNodes]);

    const handleReset = useCallback(() => {
        setNodes([ROOT_NODE]);
        setEdges([]);
        setExpandedIds(new Set());
        setSelectedNode(null);
        setTimeout(() => {
            // fitView will be called by the fit view button or auto
        }, 100);
    }, []);

    const handleCollapseAll = useCallback(() => {
        setNodes([ROOT_NODE]);
        setEdges([]);
        setExpandedIds(new Set());
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', paddingTop: 64 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.4 }}
                minZoom={0.25}
                maxZoom={2}
                defaultEdgeOptions={{
                    type: 'smoothstep',
                    style: { stroke: 'rgba(99,102,241,0.5)', strokeWidth: 2 },
                }}
                proOptions={{ hideAttribution: true }}
            >
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={30}
                    size={1}
                    color="rgba(99,102,241,0.12)"
                />
                <Controls
                    style={{ bottom: 80, left: 16 }}
                />
                <MiniMap
                    nodeColor={(n) => {
                        const colors = {
                            root: '#6366f1', stream: '#3b82f6', subject: '#10b981',
                            field: '#f59e0b', degree: '#ec4899', branch: '#8b5cf6',
                            subbranch: '#06b6d4', job: '#84cc16',
                        };
                        return colors[n.data?.type] || '#6366f1';
                    }}
                    style={{
                        bottom: 80,
                        right: selectedNode ? 332 : 16,
                        transition: 'right 0.4s ease',
                    }}
                    maskColor="rgba(5,11,24,0.85)"
                />
                <ControlsPanel onReset={handleReset} onCollapseAll={handleCollapseAll} />
            </ReactFlow>

            <InfoPanel
                selectedNode={selectedNode}
                onClose={() => setSelectedNode(null)}
            />
        </div>
    );
}

export default function TreeCanvas(props) {
    return (
        <ReactFlowProvider>
            <TreeCanvasInner {...props} />
        </ReactFlowProvider>
    );
}
